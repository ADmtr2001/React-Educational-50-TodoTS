import React from 'react';
import {Link} from "react-router-dom";

import {Wrapper} from "./Navbar.styles";

const Navbar = () => {
  return (
    <Wrapper>
      <Link to='start'>Start</Link>
      <Link to='todo'>Todo</Link>
    </Wrapper>
  );
};

export default Navbar;