import React from 'react';
import styles from '../../styles/2-components/button.module.scss';

interface Props {
  onClick: () => void;
  id: string;
  style: string;
  extraStyle?: string;
  label?: string;
  disabled?: boolean;
  level?: string;
  children?: any;
}

const Button = ({label, id, onClick, style, extraStyle = '', disabled = false, level = 'primary', children} : Props) => {
  const levelStyle = level === 'primary' ? styles.primary : styles.secondary;
  return (
    <button className={`${styles.btn} ${levelStyle} ${styles[style]} ${styles[extraStyle]}`} 
      id={id}
      onClick={!disabled ? onClick : () => {}}>
      {children}
      {label}
    </button>
  ) 
}

export default Button;
