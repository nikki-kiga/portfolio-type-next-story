import React from 'react';
import Toggle from './Toggle';
import styles from '../styles/2-components/burger.module.scss';

interface Props {
  menuStatus: boolean;
  setMenuStatus: (menuStatus: boolean) => void;
}

const Burger = ({menuStatus, setMenuStatus} : Props) => {
  const onChange = () => setMenuStatus(!menuStatus);
  return (
    <>
      <Toggle 
        onChange={onChange}
        label={'burger'}
        style='burger'
      />
      <label className={styles.burger} htmlFor="burger">
        <span className={`${styles.bar}`}></span>
        <span className={`${styles.bar}`}></span>
        <span className={`${styles.bar}`}></span>
        <span className={`${styles.bar}`}></span>
      </label>
    </>
  )
}

export default Burger;
