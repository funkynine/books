import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import { selectorGetBooks } from "../../ReduxStore/reducer";
import { BookUI } from "../../types/types";
import Book from "../Book/Book";
import s from "./BookList.module.scss";

// TODO: Imports order

const BookList: FC = () => {
  const books = useSelector(selectorGetBooks);
  // TODO: U don't used this variable
  const [currentBook, setCurrentBook] = useState<BookUI | null>(null);

  // TODO: use conditional (ternary) operator
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
        {/* TODO: U can create useMemo variable which will do sort for your array */}
        {books.sort(sortCards).map((el: BookUI) => (
          <Book key={el.id} {...el} />
        ))}
      </div>
    </>
  );
};

export default BookList;
