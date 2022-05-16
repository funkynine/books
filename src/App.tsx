import React, { useEffect } from "react";
import Box from "./Components/Box/Box";
import { useDispatch } from "react-redux";

import { BookActionTypes } from "./ReduxStore/reducer/action-types";
import Basket from "./Components/Basket/Basket";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: BookActionTypes.LOAD_DATA });
  }, []);

  return (
    <div className="App">
      <Box />
      <Basket />
    </div>
  );
}

export default App;
