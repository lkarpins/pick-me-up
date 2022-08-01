import * as React from "react";
import { SelectionsContainer } from "../../components/SelectionsContainer/SelectionsContainer";

export function HomeView() {
  return (
    <div className="view">
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
