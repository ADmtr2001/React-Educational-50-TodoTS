import React from 'react';
import {Navigate, Route, Routes} from "react-router";
import Start from "../../pages/Start";
import Todo from "../../pages/Todo";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='start' element={<Start/>}/>
      <Route path='todo' element={<Todo/>}/>
      <Route path='*' element={<Navigate replace to='/start'/>}/>
    </Routes>
  );
};

export default AppRoutes;