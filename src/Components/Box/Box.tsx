import React, { FC } from "react";
import BookList from "../BookList/BookList";
import s from "./Box.module.scss";

const Box: FC = () => {
  return (
    <div className={s.bookshelf}>
      <BookList />
    </div>
  );
};

export default Box;
