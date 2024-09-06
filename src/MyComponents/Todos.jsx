import React from 'react';

export const Todos = ({ todos, onDelete, setEditingTodo }) => {
    return (
        <div className="container">
            <h3>Your Todos</h3>
            {todos.length === 0 ? "No Todos to display" : 
                todos.map((todo) => {
                    return (
                        <div className="todo-item" key={todo.sno}>
                            <h5>{todo.title}</h5>
                            <p>{todo.desc}</p>
                            <button className="btn btn-sm btn-danger" onClick={() => onDelete(todo)}>Delete</button>
                            <button className="btn btn-sm btn-warning" onClick={() => setEditingTodo(todo)}>Edit</button>
                        </div>
                    );
                })
            }
        </div>
    )
}
