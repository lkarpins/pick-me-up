import * as React from "react";
import { Button } from "../Button/Button";
import { SelectionsContainer } from "../SelectionsContainer/SelectionsContainer";
import "./AppContainer.css";

export function AppContainer() {
  return (
    <div className="app-container">
      <SelectionsContainer
        selection="compliment"
        selectionHeading="Are you looking for a confidence boost?"
        buttonLabel="Get Compliment"
      />
      <SelectionsContainer
        selection="advice"
        selectionHeading="Are you looking for sage wisdom?"
        buttonLabel="Get Advice"
      />
    </div>
  );
}
