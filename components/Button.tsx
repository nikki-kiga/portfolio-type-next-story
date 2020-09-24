export interface Props {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export const Button = ({label, onClick, disabled = false} : Props) => {
  return (
    <button className={`Button`}
      onClick={!disabled ? onClick : () => {}}>
      {label}
    </button>
  ) 
}
