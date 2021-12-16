import todo from "../pages/Todo";
import Todo from "../pages/Todo";

export interface TodoItemType {
  id: number;
  text: string;
  finished: boolean;
};

export interface TodoState {
  items: TodoItemType[];
};

export type TodoAction = AddItemAction | RemoveItemAction | RemoveAllItemsActions;

export enum TodoActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  REMOVE_ALL_ITEMS = 'REMOVE_ALL_ITEMS',
}

interface AddItemAction {
  type: TodoActionTypes.ADD_ITEM;
  payload: TodoItemType;
};

interface RemoveItemAction {
  type: TodoActionTypes.REMOVE_ITEM;
  payload: number;
};

interface RemoveAllItemsActions {
  type: TodoActionTypes.REMOVE_ALL_ITEMS;
}