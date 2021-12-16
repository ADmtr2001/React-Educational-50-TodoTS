import React, {FC} from 'react';

import {Wrapper} from "./Todo.styles";
import TodoList from "../components/TodoList/TodoList";
import AddForm from "../components/AddForm/AddForm";

const Todo: FC = () => {
  return (
    <Wrapper>
      <h1>Keep calm and complete tasks</h1>
      <AddForm/>
      <TodoList/>
    </Wrapper>
  );
};

export default Todo;