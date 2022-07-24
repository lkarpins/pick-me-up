import * as React from "react";
import { Button } from "../Button/Button";
import "./SelectionsContainer.css";
export interface SelectionsContainerProps {
  selection: string;
  selectionHeading: string;
  buttonLabel: string;
}

export function SelectionsContainer({
  selection,
  selectionHeading,
  buttonLabel,
}: SelectionsContainerProps) {
  return (
    <div className={`selections ${selection}-section`}>
      <h2 className="selection-heading">{selectionHeading}</h2>
      <Button label={buttonLabel} />
    </div>
  );
}
