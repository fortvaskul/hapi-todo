import React, { useEffect } from "react";
import { EuiPage, EuiPageBody, EuiPageContent, EuiSpacer } from "@elastic/eui";
import CreateTodo from "./CreateTodo";
import ViewTodos from "./ViewTodos";
import { useTodosStore } from "../../store/todosStore";

function TodoContainer() {
  const { getTodos } = useTodosStore();

  useEffect(() => getTodos(), []);

  return (
    <EuiPage>
      <EuiPageBody>
        <EuiPageContent style={{ width: "1600px" }} horizontalPosition="center">
          <CreateTodo />
          <EuiSpacer size="xl" />
          <ViewTodos />
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  );
}

export default TodoContainer;
