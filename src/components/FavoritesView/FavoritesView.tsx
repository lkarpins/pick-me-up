import * as React from "react";
import "./FavoritesView.css";
import { FavoritesContainer } from "../FavoritesContainer/FavoritesContainer";

export interface FavoritesViewProps {
  addToFavorites: (selection: string, favoriteSelection: string) => void;
  favoriteCompliment: string[];
  favoriteAdvice: string[];
}

export function FavoritesView({
  favoriteCompliment,
  favoriteAdvice,
  addToFavorites,
}: FavoritesViewProps) {
  return (
    <div className="favorites-view">
      <FavoritesContainer
        selection="compliment"
        selectionHeading="Favorite Compliments"
        favoriteSelection={favoriteCompliment}
        addToFavorites={addToFavorites}
      />
      <FavoritesContainer
        selection="advice"
        selectionHeading="Favorite Advice"
        favoriteSelection={favoriteAdvice}
        addToFavorites={addToFavorites}
      />
    </div>
  );
}
