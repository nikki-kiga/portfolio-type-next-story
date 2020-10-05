import React from 'react';
import styles from '../../styles/2-components/button.module.scss';

interface Props {
  label: string;
  onClick: () => void;
  id?: string;
  disabled?: boolean;
  level?: string;
}

const Button = ({label, id, onClick, disabled = false, level = 'primary'} : Props) => {
  const levelStyle = level === 'primary' ? styles.primary : styles.secondary;
  return (
    <button className={`${styles.btn} ${levelStyle}`} 
      id={id}
      onClick={!disabled ? onClick : () => {}}>
      {label}
    </button>
  ) 
}

export default Button;
