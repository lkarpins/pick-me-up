import * as React from "react";
import "./FavoritesContainer.css";

export interface FavoritesContainerProps {
  selection: string;
  selectionHeading: string;
  favoriteSelection: string[];
  addToFavorites: (selection: string, favoriteSelection: string) => void;
}

export const FavoritesContainer = ({
  selection,
  selectionHeading,
  favoriteSelection,
  addToFavorites,
}: FavoritesContainerProps) => {
  const favoritesContent = favoriteSelection.map((favSelection) => {
    return (
      <div className="favorite-item">
        <span
          className="material-icons icon"
          onClick={() => addToFavorites(selection, favSelection)}
        >
          favorite
        </span>
        <p className="favorite-text">{favSelection}</p>
      </div>
    );
  });
  return (
    <div className={`favorites ${selection}-section`}>
      <h2 className="favorites-heading">{selectionHeading}</h2>
      <div className="favorites-content">{favoritesContent}</div>
    </div>
  );
};
