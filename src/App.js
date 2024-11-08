import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './components/pages/HomePage';
import LogIn from './components/pages/LogIn';
import Header2 from './components/Header2';
import Html from './components/pages/components/Html';
import JS from './components/pages/components/JS';
import Java from './components/pages/components/Java';
import Css from './components/pages/components/Css';
import Vue from './components/pages/components/Vue';
import React1 from './components/pages/components/React1';

function App() {
  return (
    <div className="App">
<Routes>
    <Route path='/' element={<Header/>} >
        <Route index element={<HomePage/>} />
        <Route path='login' element={<LogIn/>} />
    </Route>
    <Route path='/2' element={<Header2/>} >
    </Route>  
       <Route path='/html' element={<Html/>} />
       <Route path='/css' element={<Css/>} />
       <Route path='/js' element={<JS/>} />
       <Route path='/java' element={<Java/>} />
    <Route> 
      <Route path='react' element={<React1/>} />
      <Route path='vue' element={<Vue/>} />
    </Route>
</Routes>
      
    </div>
  );
}

export default App;
