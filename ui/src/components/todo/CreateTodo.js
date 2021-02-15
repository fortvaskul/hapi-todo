import React, { useState } from "react";
import ReactJson from "react-json-view";
import { EuiButton, EuiSpacer } from "@elastic/eui";
import { useTodosStore } from "../../store/todosStore";

function CreateTodo() {
  const [json, setJson] = useState({
    content: {}
  });

  const onAdd = e => {
    setJson(e.updated_src);
  };

  const onEdit = e => {
    setJson(e.updated_src);
  };

  const onDelete = e => {
    setJson(e.updated_src);
  };

  const store = useTodosStore();
  const { addTodo } = store;

  return (
    <React.Fragment>
      <p>Add a Task</p>
      <EuiSpacer size="s" />
      <ReactJson src={json} onAdd={onAdd} onEdit={onEdit} onDelete={onDelete} />
      <EuiSpacer size="s" />
      <EuiButton
        onClick={() => {
          addTodo(json);
        }}
      >
        Save
      </EuiButton>
    </React.Fragment>
  );
}

export default CreateTodo;
