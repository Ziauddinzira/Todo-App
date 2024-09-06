import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

export const AddTodo = ({ addTodo, editingTodo }) => {
    const [title, setTitle] = useState("");
    const [deadline, setDeadline] = useState("");
    const [status, setStatus] = useState("Not Started");

    useEffect(() => {
        if (editingTodo) {
            setTitle(editingTodo.title);
            setDeadline(editingTodo.deadline);
            setStatus(editingTodo.status);
        } else {
            setTitle("");
            setDeadline("");
            setStatus("Not Started");
        }
    }, [editingTodo]);

    const submit = (e) => {
        e.preventDefault();
        if (!title || !deadline || !status) {
            alert("All fields are required");
        } else {
            addTodo({ title, deadline, status, sno: editingTodo ? editingTodo.sno : null });
        }
    }

    return (
        <Form onSubmit={submit}>
            <Form.Group className="mb-3" controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDeadline">
                <Form.Label>Deadline</Form.Label>
                <Form.Control type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formStatus">
                <Form.Label>Status</Form.Label>
                <Form.Control as="select" value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option>Not Started</option>
                    <option>In Progress</option>
                    <option>Done</option>
                </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">{editingTodo ? "Update Todo" : "Add Todo"}</Button>
        </Form>
    )
}
