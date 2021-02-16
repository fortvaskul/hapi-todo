import React, { useState } from "react";
import {
  EuiButton,
  EuiCard,
  EuiButtonEmpty,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFlexGrid,
  EuiIcon
} from "@elastic/eui";
import { Observer } from "mobx-react-lite";
import { useTodosStore } from "../../store/todosStore";
import EditTodo from "./EditTodo";

function ViewTodos() {
  const [editableTodo, setEditableTodo] = useState(null);

  const closeModal = () => setEditableTodo(null);
  const showModal = item => setEditableTodo(item);

  const { todos, deleteTodo, editTodo } = useTodosStore();

  return (
    <Observer>
      {() => (
        <EuiFlexGrid>
          {editableTodo ? (
            <EditTodo
              closeModal={closeModal}
              editTodo={editTodo}
              item={editableTodo}
            />
          ) : null}
          {todos.map((todo, i) => (
            <EuiFlexItem key={i} style={{ width: "500px" }}>
              <EuiCard
                textAlign="left"
                title={
                  <span>
                    {todo.content.done ? (
                      <EuiIcon color="success" type="check" />
                    ) : (
                      <EuiIcon color="danger" type="cross" />
                    )}{" "}
                    {todo.id}
                  </span>
                }
                description={todo.content.task}
                footer={
                  <EuiFlexGroup justifyContent="flexStart">
                    <EuiFlexItem grow={false}>
                      <EuiButton fill onClick={() => showModal(todo)}>
                        Edit
                      </EuiButton>
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                      <EuiButtonEmpty
                        color="danger"
                        onClick={() => deleteTodo(todo.id)}
                      >
                        Delete
                      </EuiButtonEmpty>
                    </EuiFlexItem>
                  </EuiFlexGroup>
                }
              />
            </EuiFlexItem>
          ))}
        </EuiFlexGrid>
      )}
    </Observer>
  );
}

export default ViewTodos;
