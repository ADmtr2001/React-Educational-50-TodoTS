import React, {FC} from 'react';

import {Wrapper} from "./TodoList.styles";
import TodoItem from "../TodoItem/TodoItem";
import {useTypedSelector} from "../../hooks/useTypedSelector";

interface TodoListProps {
}

const TodoList: FC<TodoListProps> = () => {
  const {items} = useTypedSelector(state => state.todo);

  return (
    <Wrapper>
      {items.map((item, index) => (
        <TodoItem key={item.id} number={index + 1}  item={item}/>
      ))}
    </Wrapper>
  );
};

export default TodoList;