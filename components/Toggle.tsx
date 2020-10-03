import React from 'react';
import styles from '../styles/2-components/toggle.module.scss';

interface Props {
  onChange : () => void;
  label?: string;
  checked?: boolean;
}

const Toggle = ({onChange, label = 'toggle', checked}: Props) => {
  return (
    <input
      className={styles.toggle}
      type="checkbox"
      name={label}
      checked={checked}
      onChange={onChange}
    />
  )
}

export default Toggle;
