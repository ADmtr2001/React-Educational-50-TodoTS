import React, {FC} from 'react';
import {Link} from "react-router-dom";

import {Wrapper} from "./Navbar.styles";
import Button from "../Button/Button";

const Navbar: FC = () => {
  return (
    <Wrapper>
      <Link to='start'>
        <Button>Start</Button>
      </Link>
      <Link to='todo'>
        <Button>Todo</Button>
      </Link>
    </Wrapper>
  );
};

export default Navbar;