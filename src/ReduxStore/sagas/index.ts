import { takeEvery, put, call } from "redux-saga/effects";
import axios from "axios";
import { BookActionTypes } from "../reducer/action-types";

async function getBooks() {
  // TODO: Don't use await and then in one place (remove all then's)
  const res = await axios
    .get(
      "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=fa0hc3d4zd1nmjr1GE53oPlBLPtYPTv9"
    )
    .then((response) => response.data.results.books)
    .then((data) =>
      data.map((el: any) => {
        return {
          id: el.primary_isbn13,
          image: el.book_image,
          order: el.rank,
        };
      })
    );

  return res;
}

export function* workerSaga(): Generator {
  const data = yield call(getBooks);
  yield put({ type: BookActionTypes.GET_BOOKS, payload: data });
}

export function* watchRequest() {
  yield takeEvery(BookActionTypes.LOAD_DATA, workerSaga);
}
export function* rootSaga() {
  yield watchRequest();
}
