import { useState, useEffect } from "react";
import {getDataSeverTwo} from "../../api/getData";
import {EventTable} from "./tableEvents.jsx"


const ShowTableEvents = ()=>{
    const [events, setEvents] = useState([]);

    useEffect(()=>{
        getDataSeverTwo().then((data)=>{
            const lastEvetns = data.slice(-10);
            lastEvetns.reverse();
            setEvents(lastEvetns);
        }).catch((err)=>{
            console.log(err);
        })
    },[])

    return (
        <>
            <EventTable events={events}/>
        </>
    )
    
}

export default ShowTableEvents;