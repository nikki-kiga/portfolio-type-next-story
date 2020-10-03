import styles from '../../styles/2-components/button.module.scss';

interface Props {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  level?: string;
}

export const Button = ({label, onClick, disabled = false, level = 'primary'} : Props) => {
  const levelStyle = level === 'primary' ? styles.primary : styles.secondary;
  return (
    <button className={`${styles.btn} ${levelStyle}`}
      onClick={!disabled ? onClick : () => {}}>
      {label}
    </button>
  ) 
}
