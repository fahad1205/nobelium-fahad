import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import {AddNotes, EditNotes, DeleteNotes, Notes, HomePage} from './pages';
import { Header } from './rootFiles/Header';

function App() {

  return (
    <Fragment>
    <Header/>
      <Routes>
       <Route path="/"  element = {<HomePage/>} /> 
       <Route path="/notes" element = {<Notes/>} />
       <Route path="/add"  element = {<AddNotes/>} /> 
       <Route path="/edit" element = {<EditNotes/>} />
       <Route path="/delete" element = {<DeleteNotes/>} /> 
      
      </Routes>
    </Fragment>
  );
}



export default App;
