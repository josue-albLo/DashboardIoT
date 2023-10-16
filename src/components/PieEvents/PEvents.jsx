import React, { useEfect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import '../../styles/PieEvents.css';

const PEvents = () => {
    ChartJS.register(ArcElement, Tooltip, Legend);
    const [data, setData] = useState([]);


    const myOptions = {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 1, // Adjust the aspectRatio to control the size of the chart (1 means it's a square)

        // You can also specify other options here if needed
    };

    const ficData = {
        labels: ['Abrir', 'Cerrar'],
        datasets: [
            {
                data: [300, 50],
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