import * as React from "react";
import "./FavoritesContainer.css";

export interface FavoritesContainerProps {
  selection: string;
  selectionHeading: string;
  favoriteSelection: string[];
}

export const FavoritesContainer = ({
  selection,
  selectionHeading,
  favoriteSelection,
}: FavoritesContainerProps) => {
  const favoritesContent = favoriteSelection.map((selection) => {
    return (
      <p>
        {" "}
        <span className="material-icons icon">favorite_border</span>
        {selection}
      </p>
    );
  });
  return (
    <div className={`favorites ${selection}-section`}>
      <h2 className="favorites-heading">{selectionHeading}</h2>
      <div className="favorites-content">{favoritesContent}</div>
    </div>
  );
};
