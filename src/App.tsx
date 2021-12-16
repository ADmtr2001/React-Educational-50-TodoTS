import React, {Fragment} from 'react';
import {Navigate, Route, Routes} from "react-router";
import Start from "./pages/Start";
import Todo from "./pages/Todo";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRoutes from "./components/AppRoutes/AppRoutes";

const App = () => {
  return (
    <Fragment>
      <Navbar/>
      <AppRoutes/>
    </Fragment>
  );
};

export default App;