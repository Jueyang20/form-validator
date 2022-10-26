import './App.css';
import React from 'react';
import AddUser from './components/AddUser';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormAdd from './components/FormAdd';



const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='addUser' element={<AddUser />} />
          <Route path='formAdd' element={<FormAdd />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
