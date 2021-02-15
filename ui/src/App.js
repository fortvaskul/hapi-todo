import React from "react";
// import SampleContainer from './components/sample/SampleContainer';
// import {SamplesStoreProvider} from "./store/samplesStore";
import TodoContainer from "./components/todo/TodoContainer";
import { TodosStoreProvider } from "./store/todosStore";
import "./App.css";

function App() {
  return (
    // <SamplesStoreProvider>
    //   <SampleContainer />
    // </SamplesStoreProvider>
    <TodosStoreProvider>
      <TodoContainer />
    </TodosStoreProvider>
  );
}

export default App;
