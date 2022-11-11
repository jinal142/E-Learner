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



function App() {
  return (

      <BrowserRouter>
          <div className="App" style={{backgroundColor:"azure"}}> 

            <div>
              <Header/>
              
                <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path='/results' element={<SearchResults />}/>
                  <Route path="/about" element={<About/>} />
                </Routes>
            </div>     
            
          </div>
      </BrowserRouter>
  );
}




export default App;
