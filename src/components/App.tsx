import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, RootState } from "./Counter";
import "../index.css";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 m-1"
      >
        Increment
      </button>
      <span className="w-11 inline-block border-2 border-gray-600">
        {count}
      </span>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(decrement())}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 m-1"
      >
        Decrement
      </button>
    </div>
  );
}

export default App;
