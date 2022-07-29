import * as React from "react";
import "./FavoritesView.css";
import { FavoritesContainer } from "../FavoritesContainer/FavoritesContainer";

export interface FavoritesViewProps {
  favoriteCompliment: string[];
  favoriteAdvice: string[];
}

export function FavoritesView({
  favoriteCompliment,
  favoriteAdvice,
}: FavoritesViewProps) {
  return (
    <div className="favorites-view">
      <FavoritesContainer
        selection="compliment"
        selectionHeading="Favorite Compliments"
        favoriteSelection={favoriteCompliment}
      />
      <FavoritesContainer
        selection="advice"
        selectionHeading="Favorite Advice"
        favoriteSelection={favoriteAdvice}
      />
    </div>
  );
}
