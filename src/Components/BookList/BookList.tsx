import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import { selectorGetBooks } from "../../ReduxStore/reducer";
import { BookUI } from "../../types/types";
import Book from "../Book/Book";
import s from "./BookList.module.scss";

const BookList: FC = () => {
  const books = useSelector(selectorGetBooks);
  const [currentBook, setCurrentBook] = useState<BookUI | null>(null);

  const sortCards = (a: BookUI, b: BookUI) => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  };

  return (
    <>
      <div className={s.list}>
        {books.sort(sortCards).map((el: BookUI) => (
          <Book key={el.id} {...el} />
        ))}
      </div>
    </>
  );
};

export default BookList;
