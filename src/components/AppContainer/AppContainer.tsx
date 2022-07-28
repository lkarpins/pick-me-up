import * as React from "react";
import { Button } from "../Button/Button";
import { SelectionsContainer } from "../SelectionsContainer/SelectionsContainer";
import "./AppContainer.css";

export interface AppContainerProps {
  getNewCall: (selection: string) => void;
}

export function AppContainer({ getNewCall }: AppContainerProps) {
  return (
    <div className="app-container">
      <SelectionsContainer
        getNewCall={getNewCall}
        selection="compliment"
        selectionHeading="Are you looking for a confidence boost?"
        buttonLabel="Get Compliment"
      />
      <SelectionsContainer
        getNewCall={getNewCall}
        selection="advice"
        selectionHeading="Are you looking for sage wisdom?"
        buttonLabel="Get Advice"
      />
    </div>
  );
}
