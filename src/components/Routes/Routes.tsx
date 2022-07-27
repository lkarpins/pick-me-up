import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { SelectionView } from "../SelectionView/SelectionView";
import { AppContainer } from "../AppContainer/AppContainer";

export interface RoutesProps {
  compliment: string;
  advice: string;
}

export const Routes = ({ compliment, advice }: RoutesProps) => {
  return (
    <Switch>
      <Route exact path="/">
        <AppContainer />
      </Route>
      <Route exact path="/compliment">
        <SelectionView
          selection="compliment"
          selectionViewHeading={compliment}
        />
      </Route>
      <Route exact path="/advice">
        <SelectionView 
          selection="advice" 
          selectionViewHeading={advice} 
        />
      </Route>
    </Switch>
  );
};
