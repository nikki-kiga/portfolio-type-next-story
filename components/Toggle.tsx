import React from 'react';

interface Props {
  onChange : () => void;
  label?: string;
  checked?: boolean;
}

const Toggle = ({onChange, label = 'toggle', checked}: Props) => {
  return (
  <label>
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
    />
    {label}
  </label>
  )
}

export default Toggle;
