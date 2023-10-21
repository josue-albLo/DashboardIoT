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
                        acc[date] = { dateCreated: date, Abrir: 0, Cerrar: 0 }
                    }

                    if (item.evento1 === 'Abrir') {
                        acc[date].Abrir++;
                    } else if (item.evento1 === 'Cerrar') {
                        acc[date].Cerrar++;
                    }
                    return acc;
                })

                const datos = Object.values(eventsByDate).slice(-7)

                // Ordenar el array en función de la propiedad "dateCreated" en orden descendente
                datos.sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated));
                datos.reverse();
                setData(datos);
            })
            .catch(err => console.log(err))
    }, [])



    const dataFetch = {
        labels: data.map(item => item.dateCreated),
        datasets: [
            {
                label: 'Abrir',
                data: data.map(item => item.Abrir),
                tension: 0.4,
                fill: true,
                backgroundColor: 'rgba(0, 0, 255, 0.2)', // Color azul con opacidad
                borderColor: 'rgba(0, 0, 255, 0.8)', // Color azul más oscuro
            },
            {
                label: 'Cerrar',
                data: data.map(item => item.Cerrar),
                tension: 0.4,
                fill: true,
                backgroundColor: 'rgba(255, 255, 0, 0.2)', // Color amarillo con opacidad
                borderColor: 'rgba(255, 255, 0, 0.8)', // Color amarillo más oscuro
            }
        ]
    };


    const optionsFetch = {
        responsive: true,
        animation: true,
        plugins: {
            legend: {
                display: true,
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Eventos (Abrir, Cerrar)', // Nombre del eje X
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Fechas', // Nombre del eje Y
                },
            },
        },
    };


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