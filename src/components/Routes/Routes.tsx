import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { SelectionView } from "../SelectionView/SelectionView";
import { HomeView } from "../HomeView/HomeView";
import { FavoritesView } from "../FavoritesView/FavoritesView";

export interface RoutesProps {
  compliment: string;
  advice: string;
  getNewCall: (selection: string) => void;
  toggleFavorites: (selection: string, favoriteSelection: string) => boolean | undefined;
  favoriteCompliment: string[];
  favoriteAdvice: string[];
}

export const Routes = ({
  compliment,
  advice,
  getNewCall,
  toggleFavorites,
  favoriteCompliment,
  favoriteAdvice,
}: RoutesProps) => {
  return (
    <Switch>
      <Route exact path="/">
        <HomeView />
      </Route>
      <Route exact path="/compliment">
        <SelectionView
          getNewCall={getNewCall}
          selection="compliment"
          selectionViewText={compliment}
          toggleFavorites={toggleFavorites}
        />
      </Route>
      <Route exact path="/advice">
        <SelectionView
          getNewCall={getNewCall}
          selection="advice"
          selectionViewText={advice}
          toggleFavorites={toggleFavorites}
        />
      </Route>
      <Route exact path="/favorites">
        <FavoritesView
          favoriteCompliment={favoriteCompliment}
          favoriteAdvice={favoriteAdvice}
          toggleFavorites={toggleFavorites}
        />
      </Route>
    </Switch>
  );
};
