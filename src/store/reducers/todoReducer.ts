import {TodoAction, TodoActionTypes, TodoItemType, TodoState} from "../../types/todo";

const initialState: TodoState = {
  items: [],
}

export const todoReducer = (state: TodoState = initialState, action: TodoAction) : TodoState => {
  switch (action.type) {
    case TodoActionTypes.ADD_ITEM:
      return {...state};
    case TodoActionTypes.REMOVE_ITEM:
      return {...state};
    case TodoActionTypes.REMOVE_ALL_ITEMS:
      return {...state};
    default:
      return state;
  }
}