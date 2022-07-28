import * as React from "react";
import "./FavoritesView.css";
import { FavoritesContainer } from "../FavoritesContainer/FavoritesContainer";

export interface FavoritesViewProps {}

export function FavoritesView({}: FavoritesViewProps) {
  return (
    <div className="favorites-view">
      <FavoritesContainer
        selection="compliment"
        selectionHeading="Favorite Compliments"
      />
      <FavoritesContainer
        selection="advice"
        selectionHeading="Favorite Advice"
      />
    </div>
  );
}
