import React from 'react';
import styles from '../styles/2-components/toggle.module.scss';

interface Props {
  onChange: () => void;
  style: string;
  label?: string;
  checked?: boolean;
}

const Toggle = ({ onChange, style, label = 'toggle', checked }: Props) => {
  return (
    <input
      className={styles[style]}
      type="checkbox"
      id={label}
      name={label}
      checked={checked}
      onChange={onChange}
    />
  );
};

export default Toggle;
