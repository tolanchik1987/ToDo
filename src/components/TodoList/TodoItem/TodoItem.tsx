import React from 'react';
import { Button } from '../../Button/Button';

import classes from './TodoItem.module.css';

interface TodoItemProps {
  todo: Todo;
  deleteTodo: (id: Todo['id']) => void;
  checkTodo: (id: Todo['id']) => void;
  selectTodoIdForEdit: (id: Todo['id']) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  deleteTodo,
  checkTodo,
  selectTodoIdForEdit
}) => (
  <div className={classes.todo_item_container} style={{ opacity: todo.checked ? 0.8 : 1 }}>
    <div>
      <div
        aria-hidden
        style={{
          opacity: todo.checked ? 0.5 : 1,
          textDecoration: todo.checked ? 'line-through' : 'none'
        }}
        onClick={() => checkTodo(todo.id)}
        className={classes.todo_item_title}
      >
        {todo.name}
      </div>
      <div aria-hidden onClick={() => checkTodo(todo.id)} className={classes.todo_item_description}>
        {todo.description}
      </div>
    </div>
    <div className={classes.todo_item_button_container}>
      <Button color='orange' onClick={() => selectTodoIdForEdit(todo.id)}>
        EDIT
      </Button>
      <Button color='red' onClick={() => deleteTodo(todo.id)}>
        DELETE
      </Button>
    </div>
  </div>
);