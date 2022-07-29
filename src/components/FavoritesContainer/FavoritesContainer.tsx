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
      <p>
        <span
          className="material-icons icon"
          onClick={() => addToFavorites(selection, favSelection)}
        >
          favorite_border
        </span>
        {favSelection}
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
