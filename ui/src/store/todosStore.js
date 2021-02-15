import React from "react";
import { useLocalObservable } from "mobx-react-lite";
import axios from "axios";

const StoreContext = React.createContext(null);

export const TodosStoreProvider = ({ children }) => {
  const store = useLocalObservable(createTodosStore);
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export const useTodosStore = () => {
  const store = React.useContext(StoreContext);
  if (!store) {
    throw new Error("useStore must be used within a StoreProvider.");
  }
  return store;
};

export const createTodosStore = () => {
  return {
    todos: [],

    getTodos() {
      axios
        .get("http://localhost:8000/todos")
        .then(res => {
          console.log(res.data);
          this.setTodos(res.data);
        })
        .catch(error => {
          console.log("Error" + error);
        });
    },

    addTodo(item) {
      axios
        .post("http://localhost:8000/todos", item)
        .then(response => {
          this.todos.push(response.data);
        })
        .catch(error => {
          console.log(
            "An error occurred while trying to send a new JSON to the server:" +
              error
          );
        });
    },

    setTodos(todos) {
      this.todos.replace(todos);
    }
  };
};
