
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'


import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";







class App extends Component {
  render() {
    return (
      <Router>
       
        <div>
        <Navbar></Navbar>
          <Routes>
            <Route exact path="/business" element={ <News  key="business" page={5} category="business"></News>}/>
            <Route exact path="/" element={ <News key="general" page={5} category="general"></News>}/>
            <Route exact path="/home" element={ <News key="general"  page={5} category="general"></News>}/>
          

            <Route exact path="/entertainment" element={ <News key="entertainment" page={5} category="entertainment"></News>}/>
            <Route exact path="/general" element={ <News key="general" page={5} category="general"></News>}/>
            <Route exact path="/science" element={ <News key="science" page={5} category="science"></News>}/>
            <Route exact path="/sports" element={ <News key="sports" page={5} category="sports"></News>}/>
            <Route exact path="/technology" element={ <News key="technology" page={5} category="technology"></News>}/>
           
             
           
        
          </Routes>

          
      

        </div>
      
      </Router>
    )
  }
}

export default App;
