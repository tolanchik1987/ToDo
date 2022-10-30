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
		<div className={classes.conteiner_loop_checkbox}>
      <div  className={classes.loop_checkbox}><img className={ todo.checked ? classes.visible_img : classes.none_img} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Light_green_check.svg/600px-Light_green_check.svg.png" alt=""/></div>
      <div
        aria-hidden
        style={{
          opacity: todo.checked ? 0.5 : 1,
          textDecoration: todo.checked ? 'line-through' : 'none',
        }}
        onClick={() => checkTodo(todo.id)}
        className={classes.todo_item_title}
      >
        {todo.name}
      </div>
		</div>
      <div aria-hidden onClick={() => checkTodo(todo.id)} className={classes.todo_item_description}>
        {todo.description}
      </div>
    </div>
    <div className={classes.todo_item_button_container}>
      <Button color='orange' onClick={() => selectTodoIdForEdit(todo.id)}>
        Изменить
      </Button>
      <Button color='red' onClick={() => deleteTodo(todo.id)}>
        Удалить
      </Button>
    </div>
  </div>
);