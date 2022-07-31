import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import "./SelectionView.css";

export interface SelectionViewProps {
  selection: string;
  selectionViewText: string;
  getNewCall: (selection: string) => void;
  toggleFavorites: (
    selection: string,
    favoriteSelection: string
  ) => boolean | undefined;
}

export const SelectionView = ({
  selection,
  selectionViewText,
  getNewCall,
  toggleFavorites,
}: SelectionViewProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const onFavoriteClick = (selection: string, selectionViewText: string) => {
    setIsFavorite(toggleFavorites(selection, selectionViewText)!);
  };

  const onNewCallClick = (selection: string) => {
    getNewCall(selection);
    setIsFavorite(false);
  };

  return (
    <div className={`selection-view ${selection}-background`}>
      <div className="selection-topbar">
        <div
          className="topbar-btn"
          onClick={() => onFavoriteClick(selection, selectionViewText)}
        >
          {isFavorite ? (
            <span className="material-icons icon" data-cy="unfavorite-icon">
              favorite
            </span>
          ) : (
            <span className="material-icons icon" data-cy="favorite-icon">
              favorite_border
            </span>
          )}
        </div>
        <Link to="/" className="link-style">
          <div className="topbar-btn" onClick={() => onNewCallClick(selection)}>
            <span className="material-icons icon">close</span>
          </div>
        </Link>
      </div>
      <div className="selection-content">
        <h2 className="selection-view-text" data-cy="selection-view-text">
          {selectionViewText}
        </h2>
        <Button
          onClick={() => onNewCallClick(selection)}
          label={`Get New ${selection}`}
          data-cy="get-new-button"
        />
      </div>
    </div>
  );
};
