import styles from '../../styles/2-components/button.module.scss';
import React from 'react';
import { useTheme } from '../../providers/ThemeProvider';

export interface Props {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  level?: string;
}

export const Button = ({label, onClick, disabled = false, level = 'primary'} : Props) => {
  const {theme} = useTheme()
  const levelClass = level === 'primary' ? styles.primary : styles.secondary;

  return (
    <button className={`${styles.btn} ${theme} ${levelClass}`}
      onClick={!disabled ? onClick : () => {}}>
      {label}
    </button>
  ) 
}
