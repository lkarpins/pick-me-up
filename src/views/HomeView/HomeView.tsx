import * as React from "react";
import { SelectionsContainer } from "../../components/SelectionsContainer/SelectionsContainer";
import "./HomeView.css";

export function HomeView() {
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
