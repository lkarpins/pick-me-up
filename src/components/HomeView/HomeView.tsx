import * as React from "react";
import { Button } from "../Button/Button";
import { SelectionsContainer } from "../SelectionsContainer/SelectionsContainer";
import "./HomeView.css";

export interface HomeViewProps {}

export function HomeView({}: HomeViewProps) {
  return (
    <div className="home-view">
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
