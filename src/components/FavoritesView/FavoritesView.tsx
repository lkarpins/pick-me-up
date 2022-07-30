import * as React from "react";
import "./FavoritesView.css";
import { FavoritesContainer } from "../FavoritesContainer/FavoritesContainer";

export interface FavoritesViewProps {
  toggleFavorites: (selection: string, favoriteSelection: string) => void;
  favoriteCompliment: string[];
  favoriteAdvice: string[];
}

export function FavoritesView({
  favoriteCompliment,
  favoriteAdvice,
  toggleFavorites,
}: FavoritesViewProps) {
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
}
