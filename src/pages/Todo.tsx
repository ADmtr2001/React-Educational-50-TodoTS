import React, {FC} from 'react';

import {Wrapper} from "./Todo.styles";
import TodoList from "../components/TodoList/TodoList";
import AddForm from "../components/AddForm/AddForm";
import Button from "../components/UI/Button/Button";
import {useActions} from "../hooks/useActions";


const Todo: FC = () => {
  const {removeAllItems} = useActions();

  return (
    <Wrapper>
      <h1>Keep calm and complete tasks</h1>
      <AddForm/>
      <TodoList/>
      <Button onClickHandler={removeAllItems}>Clear List</Button>
    </Wrapper>
  );
};

export default Todo;