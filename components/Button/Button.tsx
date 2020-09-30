import styles from '../../styles/2-components/button.module.scss';
import React from 'react';
// import { useTheme } from '../../providers/ThemeProvider';

export interface Props {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  level?: string;
}

export const Button = ({label, onClick, disabled = false, level = 'primary'} : Props) => {
  const levelStyle = level === 'primary' ? styles.primary : styles.secondary;
  // const themeStyle = theme === 'dark' ? styles['dark-theme'] : styles['light-theme'];
  return (
    <button className={`${styles.btn} ${levelStyle}`}
      onClick={!disabled ? onClick : () => {}}>
      {label}
    </button>
  ) 
}
