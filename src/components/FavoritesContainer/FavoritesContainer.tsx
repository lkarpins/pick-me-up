import React from "react";
import { HasSelection, HasToggleFavorites } from "../../types";
import "./FavoritesContainer.css";

export interface FavoritesContainerProps
  extends HasSelection,
    HasToggleFavorites {
  selectionHeading: string;
  favoriteSelection: string[];
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
            className="material-icons icon favorite-view-heart"
            data-cy="favorite-icon"
            onClick={() => toggleFavorites(selection, favSelection)}
          >
            favorite
          </span>
          <p className="favorite-text with-heart">{favSelection}</p>
        </div>
      );
    }
  );

  return (
      <div
        className={`flex-background favorites ${selection}-section`}
        data-cy={`${selection}-section`}
      >
        <div className="favorites-card">
          <h2 className="favorites-heading">{selectionHeading}</h2>
          <div className="favorites-content">
            {favoriteSelection.length > 0 ? (
              favoritesContent
            ) : (
              <p className="favorite-text">No Favorites Saved</p>
            )}
          </div>
        </div>
      </div>
  );
};
