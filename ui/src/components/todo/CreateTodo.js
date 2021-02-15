import React, { useState } from "react";
import {
  EuiButton,
  EuiCard,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFieldText,
  EuiCheckbox,
  EuiSpacer
} from "@elastic/eui";
import { htmlIdGenerator } from "@elastic/eui/lib/services";
import { useTodosStore } from "../../store/todosStore";

function CreateTodo() {
  const [task, setTask] = useState("");
  const [done, setDone] = useState(false);

  const store = useTodosStore();
  const { addTodo } = store;

  return (
    <EuiCard
      textAlign="left"
      title="Add a Task"
      description=""
      footer={
        <EuiFlexGroup>
          <EuiFlexItem grow={false}>
            <EuiButton
              color="secondary"
              size="s"
              fill
              onClick={() => {
                addTodo({ content: { task, done } });
              }}
            >
              Save
            </EuiButton>
          </EuiFlexItem>
        </EuiFlexGroup>
      }
    >
      <EuiFieldText
        placeholder="Name"
        value={task}
        onChange={e => setTask(e.target.value)}
      />
      <EuiSpacer size="s" />
      <EuiCheckbox
        id={htmlIdGenerator()()}
        label="Done"
        checked={done}
        onChange={e => setDone(e.target.checked)}
      />
    </EuiCard>
  );
}

export default CreateTodo;
