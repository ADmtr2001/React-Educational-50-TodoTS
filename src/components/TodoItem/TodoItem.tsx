import React, {FC} from 'react';

import {Wrapper} from "./TodoItem.styles";
import {TodoItemType} from "../../types/todo";

interface TodoItemProps {
  item: TodoItemType;
  number: number;
}

const TodoItem: FC<TodoItemProps> = ({item, number}) => {
  return (
    <Wrapper>
      {number} - {item.text}
    </Wrapper>
  );
};

export default TodoItem;