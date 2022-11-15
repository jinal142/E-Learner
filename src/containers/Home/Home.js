
import React,{useState, use} from 'react';
import "./Home.css";
import {FiSearch} from 'react-icons/fi'
import {Container, Form} from 'react-bootstrap';
//import Card from 'react-bootstrap/Card';
//import SearchResults from '../../component/SearchResults/SearchResults';
import { useNavigate } from 'react-router-dom';
import CardHome from '../../component/CardHome/CardHome';
import SolutionHome from '../../component/SolutionHome/SolutionHome';
import { Input, Button } from 'antd'
import Header from '../../component/Header';
import SearchBar from '../../component/SearchBar/SearchBar';
import NoteCard from '../../component/NoteCard/NoteCard';


const Home = () => {


  return (
    <div style={{minHeight:"170vh"}}>
        <Header/>
        <div style={{backgroundColor:'azure', }}>
        <div>
            <img class="home-image" src="img/logo-no-background.png" alt="Logo"/>
        </div>
        <SearchBar/>

        
        
        
    <div style={{marginTop:"70px"}}>
        
        <h1 class="d-flex justify-content-center" style={{textShadow:"1px 1px 5px rgba(0,0,0,.4)", marginTop:"85px"}}> Offered Solutions </h1>
        
        <div className="home" class="d-flex justify-content-center" style={{border:"2px solid gray", borderRadius:"25px", width:"1350px", marginLeft:"170px", marginBottom:"50px", height:"170px", paddingLeft:"-10px", alignItems:"center", paddingRight:"50px", paddingBottom:"50px", boxShadow: "5px 5px 5px rgba(0,0,0,.4)"}}> 
    
            <SolutionHome source = "img/uber.jpeg" />
            <SolutionHome source = "img/airbnb.png" />
            <SolutionHome source = "img/doordash.png" />
            <SolutionHome source = "img/venmo.jpeg" />
            <SolutionHome source = "img/walmart.jpeg" />
            
        </div>
    
        <NoteCard />


        </div>
            <div style={{marginTop:"80px"}}>
            
                <h1 class="d-flex justify-content-center" style={{textShadow:"1px 1px 5px rgba(0,0,0,.4)"}}> How do we Work </h1>
                
                <div className="home" class="d-flex justify-content-center" style={{border:"2px solid gray", borderRadius:"25px", width:"1250px", marginLeft:"220px", marginBottom:"50px", height:"230px", paddingLeft:"-10px", alignItems:"center", paddingRight:"50px", paddingBottom:"10px", boxShadow: "5px 5px 5px rgba(0,0,0,.4)"}}> 
            
                    <CardHome style={{marginLeft:"50px"}} text = " We provide solution in Text & Image format in Flash Cards." title = "Solution 1"/>&nbsp;&nbsp;
                    <CardHome style={{marginLeft:"1000px"}} text = "We provide solution in Video format." title = "Solution 2"/>&nbsp;&nbsp;
                    <CardHome text = "We provide solution directly from an expert with talk with expert."  title = "Solution 3"/>
            
                </div>
            
            </div>        

        </div>
    </div>
    
    
  )
}

export default Home;