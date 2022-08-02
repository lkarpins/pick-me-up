import * as React from "react";
import { Link } from "react-router-dom";
import { HasSelection } from "../../types";
import { Button } from "../Button/Button";
import "./SelectionsContainer.css";

export interface SelectionsContainerProps extends HasSelection {
  selectionHeading: string;
  buttonLabel: string;
}

export const SelectionsContainer = ({
  selection,
  selectionHeading,
  buttonLabel,
}: SelectionsContainerProps) => {
  return (
    <div className={`flex-background selections ${selection}-section`} >
      <h2 className="selection-heading" data-cy="selection-heading" tabIndex={0}>
        {selectionHeading}
      </h2>
      <Link to={`/${selection}`}>
        <Button label={buttonLabel} data-cy="app-button" />
      </Link>
    </div>
  );
};
