import React, {FC} from 'react';

import {Wrapper} from "./TodoItem.styles";

interface TodoItemProps {
  item: any;
}

const TodoItem: FC<TodoItemProps> = ({item}) => {
  return (
    <Wrapper>
      {item.id} - {item.text}
    </Wrapper>
  );
};

export default TodoItem;