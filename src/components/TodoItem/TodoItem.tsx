import React, {FC} from 'react';

import {Wrapper} from "./TodoItem.styles";
import {TodoItemType} from "../../types/todo";
import {useActions} from "../../hooks/useActions";

interface TodoItemProps {
  item: TodoItemType;
  number: number;
}

const TodoItem: FC<TodoItemProps> = ({item, number}) => {
  const {removeItem} = useActions();

  const removeItemHandler = (id: number) => {
    removeItem(id);
  }

  return (
    <Wrapper onClick={() => removeItemHandler(item.id)}>
      {number} - {item.text}
    </Wrapper>
  );
};

export default TodoItem;