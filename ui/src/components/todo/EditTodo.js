import React, { useState } from "react";
import { htmlIdGenerator } from "@elastic/eui/lib/services";
import {
  EuiButton,
  EuiButtonEmpty,
  EuiFieldText,
  EuiForm,
  EuiFormRow,
  EuiModal,
  EuiModalBody,
  EuiModalFooter,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiOverlayMask,
  EuiCheckbox
} from "@elastic/eui";

const EditTodo = ({ closeModal, editTodo, item }) => {
  const [task, setTask] = useState(item.content.task);
  const [done, setDone] = useState(item.content.done);

  const confirmEdit = () => {
    editTodo(item.id, {
      content: {
        task,
        done
      }
    });
    closeModal();
  };

  const formSample = (
    <EuiForm>
      <EuiFormRow>
        <EuiFieldText
          name="popfirst"
          placeholder="Name"
          value={task}
          onChange={e => setTask(e.target.value)}
        />
      </EuiFormRow>
      <EuiFormRow>
        <EuiCheckbox
          id={htmlIdGenerator()()}
          label="Done"
          checked={done}
          onChange={e => setDone(e.target.checked)}
        />
      </EuiFormRow>
    </EuiForm>
  );

  return (
    <EuiOverlayMask>
      <EuiModal onClose={closeModal} initialFocus="[name=popfirst]">
        <EuiModalHeader>
          <EuiModalHeaderTitle>Edit the Task</EuiModalHeaderTitle>
        </EuiModalHeader>

        <EuiModalBody>{formSample}</EuiModalBody>

        <EuiModalFooter>
          <EuiButtonEmpty onClick={closeModal}>Cancel</EuiButtonEmpty>

          <EuiButton color="secondary" onClick={confirmEdit} fill>
            Save
          </EuiButton>
        </EuiModalFooter>
      </EuiModal>
    </EuiOverlayMask>
  );
};

export default EditTodo;
