import * as React from "react";
import "./FavoritesView.css";
import { FavoritesContainer } from "../../components/FavoritesContainer/FavoritesContainer";
import { HasFavoritesArrays, HasToggleFavorites } from "../../types";

export interface FavoritesViewProps
  extends HasToggleFavorites,
    HasFavoritesArrays {}

export const FavoritesView = ({
  favoriteCompliment,
  favoriteAdvice,
  toggleFavorites,
}: FavoritesViewProps) => {
  return (
    <div className="favorites-view">
      <FavoritesContainer
        selection="compliment"
        selectionHeading="Favorite Compliments"
        favoriteSelection={favoriteCompliment}
        toggleFavorites={toggleFavorites}
      />
      <FavoritesContainer
        selection="advice"
        selectionHeading="Favorite Advice"
        favoriteSelection={favoriteAdvice}
        toggleFavorites={toggleFavorites}
      />
    </div>
  );
};
