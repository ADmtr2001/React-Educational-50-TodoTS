import React, {FC} from 'react';
import {Link} from "react-router-dom";

import {Wrapper} from "./Navbar.styles";
import Button from "../Button/Button";

const Navbar: FC = () => {
  return (
    <Wrapper>
      <Link to='start'>
        Start
      </Link>
      <Link to='todo'>
        Todo
      </Link>
    </Wrapper>
  );
};

export default Navbar;