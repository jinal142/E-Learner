import Header from '../Header.js'
import Expert from "./Expert";
import { useLocation } from 'react-router-dom';

const ListExperts = () =>{

    const exp = [
        {
            name : "Tirth",
            source : "./img/gamer.png ",
            lang : "Hindi English",
            availble : ["10AM - 11AM", "11AM - 12PM", "2PM - 3PM", "4PM - 5PM", "5PM - 6PM"],
            call : true

        },
        {
            name : "Namrata",
            source : " ./img/woman.png",
            lang : "Hindi English",
            availble : ["9AM - 10AM", "10AM - 11PM", "2PM - 3PM", "3PM - 4PM", "5PM - 6PM"],
            call : false,

        },
        {
            name : "Jinal",
            source : "./img/woman.png",
            lang : "Hindi English",
            availble : ["8AM - 10AM", "10AM - 12PM", "2PM - 3PM", "5PM - 6PM", "7PM - 8PM"],
            call:true

        },
        {
            name : "Vedant",
            source : "./img/gamer.png",
            lang : "Hindi English",
            availble : ["8AM - 10AM", "10AM - 12PM", "2PM - 3PM", "5PM - 6PM", "7PM - 8PM"],
            call:false

        }
    ]
    return (
        <>
            {console.log(useLocation())}
            <Header path = {useLocation().pathname}/>
            <div>
            {
                exp.map( t =>
                    <Expert src ={t.source} name = {t.name} lang = {t.lang} time_array = {t.availble} call_val = {t.call}/> 
                )
            }
                
                
            </div>
        </>

    );

};

export default ListExperts;
