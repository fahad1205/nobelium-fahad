import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import {HomePage , ContactPage} from './pages';
import { Header } from './rootFiles/Header';

function App() {

  return (
    <Fragment>
    <Header/>
      <Routes>
       <Route path="/"  element = {<HomePage/>} /> 
       <Route path="/contact" element = {<ContactPage/>} />
      </Routes>
    </Fragment>
  );
}



export default App;
