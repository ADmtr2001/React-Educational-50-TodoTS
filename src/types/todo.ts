import todo from "../pages/Todo";

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
  type: string;
  payload: TodoItemType;
};

interface RemoveItemAction {
  type: string;
  payload: number;
};

interface RemoveAllItemsActions {
  type: string;
}