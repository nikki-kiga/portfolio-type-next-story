import styles from '../../styles/2-components/button.module.scss';
import React from 'react';

export interface Props {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export const Button = ({label, onClick, disabled = false} : Props) => {
  return (
    <button className={`btn ${styles.secondary}`}
      onClick={!disabled ? onClick : () => {}}>
      {label}
    </button>
  ) 
}
