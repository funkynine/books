import { BookUI } from "../../types/types";

// TODO: rename folder from reducer to book

export type BookActions =
  | GetBooksAction
  | LoadDataAction
  | ReorderBooksAction
  | RemoveBookAction
  | SetCurrentBookAction;

export enum BookActionTypes {
  GET_BOOKS = "GET_BOOKS",
  LOAD_DATA = "LOAD_DATA",
  REORDER_BOOKS = "REORDER_BOOKS",
  REMOVE_BOOK = "REMOVE_BOOK",
  SET_CURRENT_BOOK = "SET_CURRENT_BOOK",
}

interface GetBooksAction {
  type: BookActionTypes.GET_BOOKS;
  payload: BookUI[];
}

interface LoadDataAction {
  type: BookActionTypes.LOAD_DATA;
  payload: BookUI;
}

interface ReorderBooksAction {
  type: BookActionTypes.REORDER_BOOKS;
  payload: BookUI[];
}

interface SetCurrentBookAction {
  type: BookActionTypes.SET_CURRENT_BOOK;
  payload: BookUI;
}

interface RemoveBookAction {
  type: BookActionTypes.REMOVE_BOOK;
  payload: BookUI;
}
