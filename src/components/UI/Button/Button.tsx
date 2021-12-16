import React, {FC} from 'react';

import {Wrapper} from "./Button.styles";

interface ButtonProps {
  onClickHandler?: () => void;
}

const Button: FC<ButtonProps> = ({children, onClickHandler = null}) => {

  const clickHandler = (event: React. MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    onClickHandler?.();
  }

  return (
    <Wrapper onClick={clickHandler}>
      {children}
    </Wrapper>
  );
};

export default Button;