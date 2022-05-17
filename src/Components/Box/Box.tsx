import React, { FC } from "react";

//Components
import BookList from "../BookList/BookList";

// Styles
import s from "./Box.module.scss";

const Box: FC = () => {
  return (
    <div className={s.bookshelf}>
      <BookList />
    </div>
  );
};

export default Box;
