import {TodoAction, TodoActionTypes, TodoState} from "../../types/todo";

const initialState: TodoState = {
  items: [],
}

export const todoReducer = (state: TodoState = initialState, action: TodoAction) : TodoState => {
  switch (action.type) {
    case TodoActionTypes.ADD_ITEM:
      return {...state, items: [...state.items, action.payload]};
    case TodoActionTypes.REMOVE_ITEM:
      return {...state, items: state.items.filter(item => item.id !== action.payload)};
    case TodoActionTypes.REMOVE_ALL_ITEMS:
      return {...state, items: []};
    default:
      return state;
  }
}