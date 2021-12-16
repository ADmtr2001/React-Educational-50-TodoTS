import {TodoAction, TodoActionTypes, TodoItemType} from "../../types/todo";

export const addItem = (item: TodoItemType): TodoAction => {
  return {type: TodoActionTypes.ADD_ITEM, payload: item};
}

export const removeItem = (id: number): TodoAction => {
  return {type: TodoActionTypes.REMOVE_ITEM, payload: id};
}

export const removeAllItems = (): TodoAction => {
  return {type: TodoActionTypes.REMOVE_ALL_ITEMS};
}