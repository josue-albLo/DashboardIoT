import { useState, useEffect } from "react";
import {get_data} from "../../api/getData";
import {EventTable} from "./tableEvents.jsx"


const ShowTableEvents = ()=>{
    const [events, setEvents] = useState([]);

    useEffect(()=>{
        get_data().then((data)=>{
            setEvents(data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])

    return (
        <>
            <h1>Eventos</h1>
            <EventTable events={events}/>
        </>
    )
    
}

export default ShowTableEvents;