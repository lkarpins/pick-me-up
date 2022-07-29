import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import "./SelectionsContainer.css";

export interface SelectionsContainerProps {
  selection: string;
  selectionHeading: string;
  buttonLabel: string;
}

export const SelectionsContainer = ({
  selection,
  selectionHeading,
  buttonLabel,
}: SelectionsContainerProps) => {
  return (
    <div className={`selections ${selection}-section`}>
      <h2 className="selection-heading">{selectionHeading}</h2>
      <Link to={`/${selection}`}>
        <Button label={buttonLabel} />
      </Link>
    </div>
  );
};
