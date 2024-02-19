import React from "react";
import { Table } from "ka-table";
import "ka-table/style.css";
import { DataType, EditingMode, SortingMode } from "ka-table/enums";
import { Comment } from "../store/comments.slice";

interface myProp {
  tableData: Comment[];
}

const myTable = function add<T extends myProp>(props: T) {
  return (
    <Table
      columns={[
        {
          key: "postId",
          title: "postId",
          dataType: DataType.Number,
          width: 80,
        },
        { key: "id", title: "id", dataType: DataType.Number, width: 80 },
        {
          key: "name",
          title: "name",
          dataType: DataType.String,
          width: 250,
        },
        {
          key: "email",
          title: "email",
          dataType: DataType.String,
          width: 200,
        },
        { key: "body", title: "body", dataType: DataType.String },
      ]}
      data={props.tableData}
      editingMode={EditingMode.Cell}
      rowKeyField={"id"}
      columnResizing={true}
      sortingMode={SortingMode.Single}
    />
  );
};

export default myTable;
