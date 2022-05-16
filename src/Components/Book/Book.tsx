import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

// Types
import { BookUI, BookComponent } from "../../types/types";

// Selectors
import {
  selectorGetBooks,
  selectorGetCurrentBook,
} from "../../ReduxStore/reducer";

// Actions
import { BookActionTypes } from "../../ReduxStore/reducer/action-types";

// Styles
import s from "./Book.module.scss";

// TODO: Change order for imports like here for every component
// TODO: Add memo to this component
const Book: FC<BookComponent> = ({ image, id, order }) => {
  const book = { id, order, image };
  const bookList = useSelector(selectorGetBooks);
  const currentBook = useSelector(selectorGetCurrentBook);
  const dispatch = useDispatch();

  function dragStartHandler(e: React.DragEvent<HTMLDivElement>): void {
    dispatch({ type: BookActionTypes.SET_CURRENT_BOOK, payload: book });
  }

  function dragOverHandler(e: React.DragEvent<HTMLDivElement>): void {
    e.preventDefault();
  }

  function dropHandler(e: React.DragEvent<HTMLDivElement>): void {
    e.preventDefault();

    const newBookList = bookList.map((el: BookUI) => {
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
  }

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

export default Book;
