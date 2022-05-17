import React, { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

// Types
import { BookProps } from "../../types/types";

// Selectors
import {
  selectorGetBooks,
  selectorGetCurrentBook,
} from "../../ReduxStore/book";

// Actions
import { BookActionTypes } from "../../ReduxStore/book/action-types";

// Styles
import s from "./Book.module.scss";

const Book: FC<BookProps> = ({ image, id, order }) => {
  const book = { id, order, image };
  const bookList = useSelector(selectorGetBooks);
  const currentBook = useSelector(selectorGetCurrentBook);
  const dispatch = useDispatch();

  function dragStartHandler(): void {
    dispatch({ type: BookActionTypes.SET_CURRENT_BOOK, payload: book });
  }

  function dragOverHandler(e: React.DragEvent<HTMLDivElement>): void {
    e.preventDefault();
  }

  const dropHandler = useCallback(
    (e: React.DragEvent<HTMLDivElement>): void => {
      e.preventDefault();

      const newBookList = bookList.map((el: BookProps) => {
        switch (el.id) {
          case book.id:
            return { ...el, order: currentBook?.order };
          case currentBook?.id:
            return { ...el, order: book?.order };
          default:
            return el;
        }
      });

      dispatch({ type: BookActionTypes.REORDER_BOOKS, payload: newBookList });
    },
    [bookList, currentBook]
  );

  return (
    <div
      className={s.book}
      draggable={true}
      onDragStart={dragStartHandler}
      onDragOver={dragOverHandler}
      onDrop={dropHandler}
      id={id}
    >
      <div className={s.book__cover}>
        <img src={image} alt="title" />
      </div>
    </div>
  );
};

export const MemoizedBook = React.memo(Book);
