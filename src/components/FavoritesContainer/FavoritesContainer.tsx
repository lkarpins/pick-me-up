import * as React from "react";
import "./FavoritesContainer.css";

export interface FavoritesContainerProps {
  selection: string;
  selectionHeading: string;
}

export const FavoritesContainer = ({
  selection,
  selectionHeading,
}: FavoritesContainerProps) => {
  return (
    <div className={`favorites ${selection}-section`}>
      <div className="favorites-content">
        <h2 className="favorites-heading">{selectionHeading}</h2>
      </div>
    </div>
  );
};
