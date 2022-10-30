import React from 'react';

import { Button } from '../Button/Button';

import classes from './TodoPanel.module.css';

const DEFAULT_TODO = { name: '', description: '' };

interface AddTodoPanelProps {
  mode: 'add';
  addTodo: ({ name, description }: Omit<Todo, 'id' | 'checked'>) => void;
}

interface EditTodoPanelProps {
  mode: 'edit';
  editTodo: Omit<Todo, 'id' | 'checked'>;
  changeTodo: ({ name, description }: Omit<Todo, 'id' | 'checked'>) => void;
}

type TodoPanelProps = AddTodoPanelProps | EditTodoPanelProps;

export const TodoPanel: React.FC<TodoPanelProps> = (props) => {
  const isEdit = props.mode === 'edit';
  const [todo, setTodo] = React.useState(isEdit ? props.editTodo : DEFAULT_TODO);

  const onClick = () => {
    if (isEdit) {
      return props.changeTodo(todo);
    }
    props.addTodo(todo);
    setTodo(DEFAULT_TODO);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  return (
    <div className={classes.todo_panel_container}>
      <div className={classes.fields_container}>
        <div className={classes.field_container}>
          <label htmlFor='name'>
            <div>Задание</div>
            <input autoComplete='off' id='name' value={todo.name} onChange={onChange} name='name' placeholder='Whats need to be done?'/>
          </label>
        </div>
        <div className={classes.field_container}>
          <label htmlFor='description'>
            <div>Описание</div>
            <input
              autoComplete='off'
              id='description'
              value={todo.description}
              onChange={onChange}
              name='description'
            />
          </label>
        </div>
      </div>
      <div className={classes.button_container}>
        {!isEdit && (
          <Button color='blue' onClick={onClick}>
            Добавить
          </Button>
        )}
        {isEdit && (
          <Button color='orange' onClick={onClick}>
            Изминить
          </Button>
        )}
      </div>
    </div>
  );
};