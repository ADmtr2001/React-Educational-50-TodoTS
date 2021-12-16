import React, {Fragment} from 'react';
import {Navigate, Route, Routes} from "react-router";
import Start from "./pages/Start";
import Todo from "./pages/Todo";
import Navbar from "./components/UI/Navbar/Navbar";

const App = () => {
  return (
    <Fragment>
      <Navbar/>
      <Routes>
        <Route path='start' element={<Start/>}/>
        <Route path='todo' element={<Todo/>}/>
        <Route path='*' element={<Navigate replace to='/start'/>}/>
      </Routes>
    </Fragment>
  );
};

export default App;