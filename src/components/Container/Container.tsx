import * as React from "react";
import { Button } from "../Button/Button";
import "./Container.css";
export interface ContainerProps {
  compliment: string;
  advice: string;
}

export function Container({ compliment, advice }: ContainerProps) {
  return (
    <div className="app-container">
      <div className="selections compliment-section">
        <h2>{compliment}</h2>
        <Button label="Get Compliment" />
      </div>
      <div className="selections advice-section">
        <h2>{advice}</h2>
        <Button label="Get Advice" />
      </div>
    </div>
  );
}
