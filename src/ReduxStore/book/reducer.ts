import { BookStore } from "../../types/types";
import { BookActionTypes } from "./action-types";
import { BookActions } from "./action-types";

const initState: BookStore = {
  bookList: [],
  currentBook: null,
};

export const bookReducer = (state = initState, action: BookActions) => {
  const { type, payload } = action;
  switch (type) {
    case BookActionTypes.GET_BOOKS:
      return { ...state, bookList: payload };
    case BookActionTypes.REORDER_BOOKS: {
      return {
        ...state,
        bookList: payload,
      };
    }
    case BookActionTypes.REMOVE_BOOK: {
      return {
        ...state,
        bookList: state.bookList.filter((el) => el.id !== payload.id),
      };
    }
    case BookActionTypes.SET_CURRENT_BOOK: {
      return {
        ...state,
        currentBook: payload,
      };
    }
    default:
      return state;
  }
};
