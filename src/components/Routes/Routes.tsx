import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { SelectionView } from "../../views/SelectionView/SelectionView";
import { HomeView } from "../../views/HomeView/HomeView";
import { FavoritesView } from "../../views/FavoritesView/FavoritesView";
import { ErrorView } from "../../views/ErrorView/ErrorView";
import {
  HasFavoritesArrays,
  HasGetNewCall,
  HasToggleFavorites,
} from "../../types";

export interface RoutesProps
  extends HasToggleFavorites,
    HasGetNewCall,
    HasFavoritesArrays {
  compliment: string;
  advice: string;
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
      <Route exact path="*">
        <ErrorView error={new Error("This path doesn't exist!")} />
      </Route>
    </Switch>
  );
};
