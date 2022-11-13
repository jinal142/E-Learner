import './App.css';
import {
  BrowserRouter,
  Routes,
  Link,
  Route,
} from "react-router-dom";
import {About} from "./containers/About/About.js";
import {Header} from "./component/Header.js";
import Home from './containers/Home/Home';
import SearchResults from './component/SearchResults/SearchResults';
import Login from './component/Login/Login';
import SignUp from './component/Login/SignUp';
import ListExperts from './component/ListExperts/ListExperts';




function App() {
  return (

      <BrowserRouter>
          <div className="App" style={{backgroundColor:"azure"}}> 

            <div>
              <Header/>
              
                <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path='/results' element={<SearchResults />}/>
                  <Route path="/login" element={ <Login />} />
                  <Route path="/signup" element={ <SignUp />} />
                  <Route path="/list_of_experts" element={ <ListExperts />} />
                  <Route path="/about" element={<About/>} />
                </Routes>
            </div>     
            
          </div>
      </BrowserRouter>
  );
}




export default App;
