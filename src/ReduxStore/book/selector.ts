import { BookStore } from "../../types/types";

export const selectorGetBooks = (store: BookStore) => store.bookList;
export const selectorGetCurrentBook = (store: BookStore) => store.currentBook;
