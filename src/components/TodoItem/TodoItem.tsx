import React, {FC} from 'react';

import {Wrapper} from "./TodoItem.styles";
import {TodoItemType} from "../../types/todo";

interface TodoItemProps {
  item: TodoItemType;
}

const TodoItem: FC<TodoItemProps> = ({item}) => {
  return (
    <Wrapper>
      {item.id} - {item.text}
    </Wrapper>
  );
};

export default TodoItem;