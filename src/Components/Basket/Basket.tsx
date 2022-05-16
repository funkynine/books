import React, { FC } from "react";
import { BookUI } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";

import { BookActionTypes } from "../../ReduxStore/reducer/action-types";

import s from "./Basket.module.scss";
import { selectorGetCurrentBook } from "../../ReduxStore/reducer";
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
