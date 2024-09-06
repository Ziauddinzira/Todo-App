import React from 'react';
import { Card, Button } from 'react-bootstrap';

export const TodoItem = ({ todo, onDelete, onEdit }) => {
    const getStatusColor = (status) => {
        switch (status) {
            case 'Done':
                return 'success';
            case 'In Progress':
                return 'warning';
            case 'Not Started':
                return 'danger';
            default:
                return 'secondary';
        }
    }

    return (
        <Card className="my-3">
            <Card.Body>
                <Card.Title>{todo.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Deadline: {todo.deadline}</Card.Subtitle>
                <Card.Text>
                    <span className={`badge bg-${getStatusColor(todo.status)}`}>{todo.status}</span>
                </Card.Text>
                <Button variant="danger" onClick={() => onDelete(todo)}>Delete</Button>
                <Button variant="warning" className="mx-2" onClick={() => onEdit(todo)}>Edit</Button>
            </Card.Body>
        </Card>
    )
}
