import Header from '../Header.js'
import Expert from "./Expert";
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const ListExperts = (props) =>{
    
    
   

   
    // console.log(card)

    // const handlechange1 = (t) =>{
    //     setStime(t);
    //     // console.log('time change called: ' + t);
    // }
    
    // const handlechange2 = (t) =>{
    // setSdate(t);
    // // console.log('date change called: ' + t);

    // }
    // const handlechange3 = (t) =>{
    // setName(t);
    // // console.log('name change called: ' + t);
    // }


    const exp = [
        {
            id:"1",
            name : "Tirth Raval",
            source : "./img/gamer.png ",
            lang : "Hindi, English",
            available : ["10AM - 11AM", "11AM - 12PM", "2PM - 3PM", "4PM - 5PM", "5PM - 6PM"],
            call : true

        },
        {
            id:"2",
            name : "Namrata Thaker",
            source : " ./img/woman.png",
            lang : "Hindi, English",
            available : ["9AM - 10AM", "10AM - 11PM", "2PM - 3PM", "3PM - 4PM", "5PM - 6PM"],
            call : false,

        },
        {
            id:"3",
            name : "Jinal Patel",
            source : "./img/woman.png",
            lang : "Hindi, English",
            available : ["8AM - 10AM", "10AM - 12PM", "2PM - 3PM", "5PM - 6PM", "7PM - 8PM"],
            call:true

        },
        {
            id:"4",
            name : "Vedant Shah",
            source : "./img/gamer.png",
            lang : "Hindi, English",
            available : ["8AM - 10AM", "10AM - 12PM", "2PM - 3PM", "5PM - 6PM", "7PM - 8PM"],
            call:false

        }
    ]
    // console.log({ stime, sdate, sname });
    return (
        <>
           
            <div>
            {
                exp.map( t =>
                    <Expert src ={t.source} name = {t.name} lang = {t.lang} time_array = {t.available} call_val = {t.call}  id = {t.id} setCard = {props.setCard} card ={props.card} /> 
                )
            }
                
                
            </div>
        </>

    );

};

export default ListExperts;
