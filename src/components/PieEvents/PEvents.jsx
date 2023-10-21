import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import '../../styles/PieEvents.css';

import { getDataSeverTwo } from '../../api/getData';

const PEvents = () => {
    ChartJS.register(ArcElement, Tooltip, Legend);
    const [abrir, setAbrir] = useState(0);
    const [cerrar, setCerrar] = useState(0);

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
                
                const datos = Object.values(eventsByDate).slice(5)
                const sumaAbrir = datos.reduce((acc, item) => acc + item.Abrir, 0);
                const sumaCerrar = datos.reduce((acc, item) => acc + item.Cerrar, 0);
                
                setAbrir(sumaAbrir);
                setCerrar(sumaCerrar);
                
            }).catch(err => console.log(err))
    }, [])
    
    

    const myOptions = {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 1,

        // Otras opciones aquí si es necesario
    };

    const ficData = {
        labels: ['Abrir', 'Cerrar'],
        datasets: [
            {
                data: [abrir,cerrar],
                backgroundColor: ['#FF6384', '#36A2EB'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB']
            }
        ]
    }

    return (
        <div className="chart-container">
            <Pie data={ficData} options={myOptions} />
        </div>
    )
}

export default PEvents;
