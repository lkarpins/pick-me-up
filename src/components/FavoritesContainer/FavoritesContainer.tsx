import React from "react";
import "./FavoritesContainer.css";

export interface FavoritesContainerProps {
  selection: string;
  selectionHeading: string;
  favoriteSelection: string[];
  toggleFavorites: (selection: string, favoriteSelection: string) => void;
}



export const FavoritesContainer = ({
  selection,
  selectionHeading,
  favoriteSelection,
  toggleFavorites,
}: FavoritesContainerProps) => {
  const favoritesContent = favoriteSelection.map(
    (favSelection: string, index) => {
      return (
        <div className="favorite-item" key={index}>
          <span
            className="material-icons icon"
            data-cy="favorite-icon"
            onClick={() => toggleFavorites(selection, favSelection)}
          >
            favorite
          </span>
          <p className="favorite-text">{favSelection}</p>
        </div>
      );
    }
  );
  return (
    <div
      className={`favorites ${selection}-section`}
      data-cy={`${selection}-section`}
    >
      <h2 className="favorites-heading">{selectionHeading}</h2>
      <div className="favorites-content">
        {favoriteSelection.length > 0 ? (
          favoritesContent
        ) : (
          <p className="favorite-text">No Favorites Saved</p>
        )}
      </div>
    </div>
  );
};
