import React from 'react';
import '../styles/styles.css'; // Importamos el archivo de estilos

export const EventTable = ({ events }) => {
    return (
        <div className='center-table'>
            <div className='cardTable'>
                <table className='event-table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Event Date</th>
                            <th>Event Name</th>
                            <th>Event Creator</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map(event => (
                            <tr key={event.id}>
                                <td>{event.id}</td>
                                <td>{event.event_date}</td>
                                <td>{event.event_name}</td>
                                <td>{event.event_creator}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
