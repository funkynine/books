import React, { FC, useMemo } from "react";
import { useSelector } from "react-redux";

// Selectors
import { selectorGetBooks } from "../../ReduxStore/book";

// Types
import { BookProps } from "../../types/types";

//Components
import { MemoizedBook } from "../Book/Book";

// Styles
import s from "./BookList.module.scss";

const BookList: FC = () => {
  const books = useSelector(selectorGetBooks);

  const sortedBooks = useMemo(() => {
    return books.sort((a: BookProps, b: BookProps) =>
      a.order > b.order ? 1 : -1
    );
  }, [books]);

  return (
    <>
      <div className={s.list}>
        {sortedBooks.map((el: BookProps) => (
          <MemoizedBook key={el.id} {...el} />
        ))}
      </div>
    </>
  );
};

export default BookList;
