import React from "react";
import HomePage from "./pages/HomePage";
import {useDispatch} from "react-redux";
import {fetchAllCourses} from "./redux/actions/courses";
import {fetchAllSymbols} from "./redux/actions/symbols";

import "./assets/App.css";

function App() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchAllCourses());
        dispatch(fetchAllSymbols());
    })

  return (
    <div className="app">
        <HomePage/>
    </div>
  );
}

export default App;
