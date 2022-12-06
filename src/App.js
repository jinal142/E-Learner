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




function App() {
  const [card, setCard] = useState([]);
  return (
         <BrowserRouter>
         <Header path = {useLocation.path}/>
          <div className="App" style={{backgroundColor:"azure"}}> 
            
            <div>              
              
                <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path='/results' element={<SearchResults />}/>

                  <Route path="/newlogin" element={ <NewLogin />} />
                  <Route path = '/bookAppointment' element = {<ListExperts/>}/>
                  <Route path ="/history" element = {<History/>}/>
                  <Route path ="/myappointments" element = {<MyAppointments/>}/>
                  <Route path="/newsignup" element={ <NewSignUp />} />

                  
                  <Route path="/about" element={<About/>} />
                </Routes>
            </div>     
            
          </div>
      </BrowserRouter>
     
     
  );
}




export default App;
