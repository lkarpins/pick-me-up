import * as React from "react";
import "./Button.css";

export interface ButtonProps {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className="app-button">
      {label}
    </button>
  );
};
