import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

import { getDataSeverTwo } from '../../api/getData'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

import '../../styles/PieEvents.css';

const LcEvents = () => {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
        Filler,
    )

    const [data, setData] = useState([]);

    useEffect(() => {
        getDataSeverTwo()
            .then(response => {
                const eventsByDate = response.reduce((acc, item) => {
                    const date = item.fechaCreacion.split('T')[0];
                    if (!acc[date]) {
                        acc[date] = { dateCreated: date, Abrir: 0, Cerrar: 0}
                    }

                    if (item.evento1 === 'Abrir') {
                        acc[date].Abrir++;
                    } else if (item.evento1 === 'Cerrar') {
                        acc[date].Cerrar++;
                    }
                    return acc;
                })
                
                const filterData = Object.values(eventsByDate)[5];
                setData(filterData);
                console.log(`filterData`, filterData);
                
            }).catch(err => console.log(err))
    }, [])

    const ficData = [
        {
            "dateCreated": "2023-10-14",
            "Abrir": 7,
            "Cerrar": 5
        },
        {
            "dateCreated": "2023-10-13",
            "Abrir": 6,
            "Cerrar": 2
        },
        {
            "dateCreated": "2023-10-12",
            "Abrir": 7,
            "Cerrar": 8
        },
        {
            "dateCreated": "2023-10-11",
            "Abrir": 22,
            "Cerrar": 10
        }
    ]
    const dataFetch = {
        labels: ficData.map(item => item.dateCreated),
        datasets: [
            {
                label: 'Abrir',
                data: ficData.map(item => item.Abrir),
                tension: 0.4,
                fill: true,
                backgroundColor: 'rgba(0,0,255, 0.2)',
                borderColor: 'rgba(0,0,255)'
            },
            {
                label: 'Cerrar',
                data: ficData.map(item => item.Cerrar),
                tension: 0.4,
                fill: true,
                backgroundColor: 'rgba(255,255,0, 0.2)',
                borderColor: 'rgba(255,255,0)'
            }
        ]
    }

    const optionsFetch = {
        responsive: true,
        animation: true,
        plugins:{
            legend:{
                display:true,
            }
        }
    }

    return (
        <div className="chart-container">
            <Line
                data={dataFetch}
                options={optionsFetch}
            />
        </div>
    )
}

export default LcEvents;