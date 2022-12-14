import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Link,
  Route,
} from "react-router-dom";
import {About} from "./containers/About/About.js";
import Home from './containers/Home/Home';
import SearchResults from './component/SearchResults/SearchResults';
import NewLogin from './component/Login/NewLogin';
import NewSignUp from './component/Login/NewSignUp';
import ListExperts from './component/ListExperts/ListExperts';
import History from './component/History/History';
import MyAppointments from './component/MyAppointments/MyAppointments';
import Header from './component/Header';
import { useLocation } from 'react-router';
import { useState } from 'react';
import Bread from './component/Bread';





function App() {
  const [card, setCard] = useState([]);
  const[headerShow,  setHeaderShow] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  // const [crumbs, setCrumbs] = useState(['Home']);

  // const selected = crumb => {
  //   console.log(crumb);
  // }

  return (
         <BrowserRouter>
         
          <div className="App" style={{backgroundColor:"azure",minHeight:"130vh"}}> 
            <Header headerShow = {headerShow} setHeaderShow = {setHeaderShow} setIsLogin = {setIsLogin}/>
            
            {/* <Bread crumbs={ crumbs } selected={ selected } /> */}
            
            <div>           
              
                <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path='/results' element={<SearchResults isLogin = {isLogin}/>}/>

                  <Route path="/newlogin" element={ <NewLogin  setHeaderShow = {setHeaderShow} setIsLogin = {setIsLogin}/>} />
                  <Route path = '/bookAppointment' element = {<ListExperts card = {card} setCard = {setCard} />}/>
                  <Route path ="/history" element = {<History/>}/>
                  <Route path ="/myappointments" element = {<MyAppointments card = {card} setCard = {setCard}/>}/>
                  <Route path="/newsignup" element={ <NewSignUp setHeaderShow ={setHeaderShow}/>} />

                  
                  <Route path="/about" element={<About/>} />
                </Routes>
            </div>     
            
          </div>
      </BrowserRouter>
     
     
  );
}




export default App;
