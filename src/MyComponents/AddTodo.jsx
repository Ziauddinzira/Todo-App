import PropTypes from 'prop-types';
import { useState } from 'react';

export const AddTodo = ({ addTodo, onCancel }) => {
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");
  const [status, setStatus] = useState("Not started");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !deadline) {
      alert("Title and Deadline are required.");
    } else {
      addTodo(title, deadline, status);
      setTitle("");
      setDeadline("");
      setStatus("Not started");
    }
  };

  return (
    <div className="container mt-4">
      <h3>Add New Todo</h3>
      <form onSubmit={submit} className="bg-light p-4 rounded">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter todo title"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="deadline" className="form-label">Deadline</label>
          <input
            type="date"
            className="form-control"
            id="deadline"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="status" className="form-label">Status</label>
          <select
            className="form-select"
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Not started">Not started</option>
            <option value="In progress">In progress</option>
            <option value="Done">Done</option>
          </select>
        </div>

        <div className="d-flex justify-content-between">
          <button type="button" className="btn btn-secondary" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
};

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};
