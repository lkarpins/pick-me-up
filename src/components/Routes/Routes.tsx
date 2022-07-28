import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { SelectionView } from "../SelectionView/SelectionView";
import { HomeView } from "../HomeView/HomeView";
import { FavoritesView } from "../FavoritesView/FavoritesView";
export interface RoutesProps {
  compliment: string;
  advice: string;
  getNewCall: (selection: string) => void;
}

export const Routes = ({ compliment, advice, getNewCall }: RoutesProps) => {
  return (
    <Switch>
      <Route exact path="/">
        <HomeView getNewCall={getNewCall} />
      </Route>
      <Route exact path="/compliment">
        <SelectionView
          getNewCall={getNewCall}
          selection="compliment"
          selectionViewText={compliment}
        />
      </Route>
      <Route exact path="/advice">
        <SelectionView
          getNewCall={getNewCall}
          selection="advice"
          selectionViewText={advice}
        />
      </Route>
      <Route exact path="/favorites">
        <FavoritesView />
      </Route>
    </Switch>
  );
};
