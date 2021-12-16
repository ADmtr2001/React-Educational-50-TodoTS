import React, {FC} from 'react';

import {Wrapper} from "./Todo.styles";
import TodoList from "../components/TodoList/TodoList";

const Todo: FC = () => {
  const list = [
    {id: 1, text: 'Math', finished: false},
    {id: 2, text: 'English', finished: true},
    {id: 3, text: 'Games', finished: false},
    {id: 4, text: 'Book', finished: true},
  ];

  return (
    <Wrapper>
      <h1>Keep calm and complete tasks</h1>
      <TodoList items={list}/>
    </Wrapper>
  );
};

export default Todo;