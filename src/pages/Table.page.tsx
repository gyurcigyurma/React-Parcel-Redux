import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { fetchComments } from "../store/comments.slice";
import Table from "../components/Table";

function Home() {
  const comments = useSelector((state: RootState) => state.comments);
  const status = useSelector((state: RootState) => state.comments.status);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (status === "initial") {
      dispatch(fetchComments());
    }
  }, [dispatch]);

  return (
    <>
      {status === "failed" && (
        <div className="font-bold text-red-600">
          Fetch error or bad resonse format
        </div>
      )}
      {status === "loading" && <p>Loading table data...</p>}
      {status === "complete" && <Table tableData={comments.value} />}
    </>
  );
}

export default Home;
