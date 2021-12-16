import React, {FC} from 'react';

import {Wrapper} from "./TodoList.styles";
import TodoItem from "../TodoItem/TodoItem";

interface TodoListProps {
  items: any[]
}

const TodoList: FC<TodoListProps> = ({items}) => {
  return (
    <Wrapper>
      {items.map(item => (
        <TodoItem key={item.id} item={item}/>
      ))}
    </Wrapper>
  );
};

export default TodoList;