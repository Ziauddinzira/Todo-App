import React from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = ({ todos, onDelete, onEdit }) => {
    return (
        <div>
            <h3>Your Todos</h3>
            {todos.length === 0 ? "No Todos to display" : 
                todos.map((todo) => {
                    return <TodoItem todo={todo} key={todo.sno} onDelete={onDelete} onEdit={onEdit} />
                })
            }
        </div>
    )
}
