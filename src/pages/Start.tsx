import React, {FC} from 'react';

import {Wrapper} from "./Start.styles";
import Button from "../components/UI/Button/Button";
import {Link} from "react-router-dom";

const Start: FC = () => {
  return (
    <Wrapper>
      <Link to='/todo'>
        <Button>Let's Go!</Button>
      </Link>
    </Wrapper>
  );
};

export default Start;