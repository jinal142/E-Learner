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
import Login from './component/Login/Login';
import SignUp from './component/Login/SignUp';
import ListExperts from './component/ListExperts/ListExperts';
import History from './component/History/History';
import MyAppointments from './component/MyAppointments/MyAppointments';



function App() {
  return (

      <BrowserRouter>
          <div className="App" style={{backgroundColor:"azure"}}> 

            <div>              
              
                <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path='/results' element={<SearchResults />}/>
                  <Route path="/login" element={ <Login />} />
                  <Route path = '/bookAppointment' element = {<ListExperts/>}/>
                  <Route path ="/history" element = {<History/>}/>
                  <Route path ="/myappointments" element = {<MyAppointments/>}/>
                  <Route path="/signup" element={ <SignUp />} />
                  
                  <Route path="/about" element={<About/>} />
                </Routes>
            </div>     
            
          </div>
      </BrowserRouter>
  );
}




export default App;
