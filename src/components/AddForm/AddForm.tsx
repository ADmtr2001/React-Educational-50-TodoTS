import React, {useState} from 'react';

import {Wrapper} from "./AddForm.styles";
import Button from "../UI/Button/Button";
import {useActions} from "../../hooks/useActions";

const AddForm = () => {
  const [text, setText] = useState('');
  const {addItem} = useActions();

  const addItemHandler = () => {
    if (text.trim().length === 0) return;

    addItem({id: Date.now(), text, finished: false});
    setText('');
  }

  return (
    <Wrapper>
      <input type='text' placeholder='Task' value={text} onChange={(e) => setText(e.target.value)}/>
      <Button onClickHandler={addItemHandler}>Add</Button>
    </Wrapper>
  );
};

export default AddForm;