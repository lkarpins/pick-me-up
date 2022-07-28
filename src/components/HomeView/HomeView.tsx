import * as React from "react";
import { Button } from "../Button/Button";
import { SelectionsContainer } from "../SelectionsContainer/SelectionsContainer";
import "./HomeView.css";

export interface HomeViewProps {
  getNewCall: (selection: string) => void;
}

export function HomeView({ getNewCall }: HomeViewProps) {
  return (
    <div className="home-view">
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
