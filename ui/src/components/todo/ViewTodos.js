import React from "react";
import { EuiBasicTable } from "@elastic/eui";
import ReactJson from "react-json-view";
import { Observer } from "mobx-react-lite";
import { useTodosStore } from "../../store/todosStore";

function ViewTodos() {
  const { todos } = useTodosStore();

  const columns = [
    {
      field: "id",
      name: "ID"
    },
    {
      field: "content",
      name: "Content",
      render: c => <ReactJson src={c} collapsed={true} />
    }
  ];

  return (
    <Observer>
      {() => <EuiBasicTable items={todos} columns={columns} />}
    </Observer>
  );
}

export default ViewTodos;
