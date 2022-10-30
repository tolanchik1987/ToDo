import React from 'react';

import classes from './Header.module.css';

interface HeaderProps {
  todoCount: number;
}

export const Header: React.FC<HeaderProps> = ({ todoCount }) => (
  <div className={classes.header_container}>
    <h1 className={classes.header_title}>
      Todo list <b>{todoCount}</b> task(s)
    </h1>
  </div>
);