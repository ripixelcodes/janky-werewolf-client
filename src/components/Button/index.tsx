import React from 'react';

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<Props> = (props) => {
  return (
    <button onClick={props.onClick} disabled={props.disabled} type={props.type}>
      {props.children}
    </button>
  );
};

export default Button;
