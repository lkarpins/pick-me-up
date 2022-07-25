import * as React from "react";
import "./Button.css";

export interface ButtonProps {
  label: string;
}

export function Button({ label }: ButtonProps) {
  return <button className="app-button">{label}</button>;
}
