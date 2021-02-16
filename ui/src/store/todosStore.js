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
        .get("api/todos")
        .then(res => {
          console.log(res.data);
          this.setTodos(res.data.reverse());
        })
        .catch(error => {
          console.log("Error" + error);
        });
    },

    addTodo(item) {
      axios
        .post("api/todos", item)
        .then(response => {
          this.todos.unshift(response.data);
        })
        .catch(error => {
          console.log(
            "An error occurred while trying to send a new JSON to the server:" +
              error
          );
        });
    },

    deleteTodo(id) {
      axios
        .delete("api/todos/" + id)
        .then(() => {
          this.setTodos(this.todos.filter(todo => todo.id !== id));
        })
        .catch(error => {
          console.log(
            "An error occurred while trying to delete the todo:" + error
          );
        });
    },

    editTodo(id, item) {
      axios
        .put("api/todos/" + id, item)
        .then(response => {
          this.setTodos(
            this.todos.map(todo => (todo.id === id ? response.data : todo))
          );
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
