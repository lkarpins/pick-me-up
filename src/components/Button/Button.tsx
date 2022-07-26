import * as React from "react";
import "./Button.css";

export interface ButtonProps {
  label: string;
}

export const Button = ({ label }: ButtonProps) => {
  return <button className="app-button">{label}</button>;
}
