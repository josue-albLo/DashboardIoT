import React from 'react';
import '../../styles/styles.css'

export const EventTable = ({ events }) => {
    return (
        <div className='center-table'>
            <div className='cardTable'>
                <table className='event-table'>
                    <thead>
                        <tr>
                            <th>Num</th>
                            <th>Event Date</th>
                            <th>Event Name</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events && events.map(event => (
                            <tr key={event.id}>
                                <td>{event.id}</td>
                                <td>{event.fechaCreacion.split('T')[0]}</td>
                                <td>{event.evento1}</td>
                                <td>{event.fechaCreacion.split('T')[1]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
