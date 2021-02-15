import React, { useEffect } from "react";
import axios from "axios";
import { EuiPage, EuiPageBody, EuiPageContent, EuiSpacer } from "@elastic/eui";
import CreateTodo from "./CreateTodo";
import ViewTodos from "./ViewTodos";
import { useTodosStore } from "../../store/todosStore";

function TodoContainer() {
  const { setTodos } = useTodosStore();

  useEffect(() => {
    axios
      .get("http://localhost:8000/todos")
      .then(res => {
        console.log(res.data);
        setTodos(res.data);
      })
      .catch(error => {
        console.log("Error" + error);
      });
  }, [setTodos]);

  return (
    <EuiPage>
      <EuiPageBody>
        <EuiPageContent>
          <ViewTodos />
          <EuiSpacer size="xl" />
          <CreateTodo />
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  );
}

export default TodoContainer;
