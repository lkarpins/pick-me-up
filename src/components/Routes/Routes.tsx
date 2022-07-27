import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { SelectionView } from "../SelectionView/SelectionView";
import { AppContainer } from "../AppContainer/AppContainer";

export interface RoutesProps {
  compliment: string;
  advice: string;
  getNewCall: (selection: string) => void;
}

export const Routes = ({ compliment, advice, getNewCall }: RoutesProps) => {
  return (
    <Switch>
      <Route exact path="/">
        <AppContainer getNewCall={getNewCall} />
      </Route>
      <Route exact path="/compliment">
        <SelectionView selection="compliment" selectionViewText={compliment} />
      </Route>
      <Route exact path="/advice">
        <SelectionView selection="advice" selectionViewText={advice} />
      </Route>
    </Switch>
  );
};
