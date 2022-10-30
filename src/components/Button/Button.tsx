import React from 'react';

import classes from './Button.module.css';

interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  color: 'orange' | 'blue' | 'red';
}

export const Button: React.FC<ButtonProps> = ({ color, children, onClick }) => {
  const className = `${classes.button} ${classes[`button_${color}`]}`;

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};