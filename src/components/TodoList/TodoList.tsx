import React, {FC} from 'react';

import {Wrapper} from "./TodoList.styles";
import {TodoItemType} from "../../types/todo";
import TodoItem from "../TodoItem/TodoItem";

interface TodoListProps {
  items: TodoItemType[];
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