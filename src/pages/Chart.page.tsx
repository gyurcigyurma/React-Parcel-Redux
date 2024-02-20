import React, { useEffect } from "react";
import { fetchComments } from "../store/comments.slice";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import ChartComponent from "../components/Chart";

export default function Chart() {
  const comments = useSelector((state: RootState) => state.comments);
  const status = useSelector((state: RootState) => state.comments.status);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (status === "initial") {
      dispatch(fetchComments());
    }
  }, [dispatch]);

  const labels = comments.value.map((arr) => arr.id);
  const wordsLengths = comments.value.map((arr) => arr.body.split(" ")?.length);

  const datas = {
    labels,
    datasets: [
      {
        label: "number of words per comment ",
        data: wordsLengths,
        borderColor: "rgb(10, 129, 32)",
      },
    ],
  };

  return <ChartComponent data={datas} />;
}
