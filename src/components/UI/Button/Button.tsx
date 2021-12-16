import React, {FC} from 'react';

import {Wrapper} from "./Button.styles";

const Button: FC = ({children}) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
};

export default Button;