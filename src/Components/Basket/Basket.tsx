import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

// Actions
import { BookActionTypes } from "../../ReduxStore/reducer/action-types";

// Selectors
import { selectorGetCurrentBook } from "../../ReduxStore/reducer";

// Styles
import s from "./Basket.module.scss";

const Basket: FC = () => {
  const dispatch = useDispatch();
  const currentBook = useSelector(selectorGetCurrentBook);

  function dragOverHandler(e: React.DragEvent<HTMLDivElement>): void {
    e.preventDefault();
  }

  function dropHandler(e: React.DragEvent<HTMLDivElement>): void {
    e.preventDefault();
    dispatch({ type: BookActionTypes.REMOVE_BOOK, payload: currentBook });
  }

  return (
    <div
      className={s.basket}
      draggable={true}
      onDragOver={dragOverHandler}
      onDrop={dropHandler}
      id="remove_book"
    ></div>
  );
};

export default Basket;
