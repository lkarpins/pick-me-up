import * as React from "react";
import { Link } from "react-router-dom";
import "./SelectionView.css";

export interface SelectionViewProps {
  selection: string;
  selectionViewHeading: string;
}

export const SelectionView = ({
  selection,
  selectionViewHeading,
}: SelectionViewProps) => {
  return (
    <div className={`selection-view ${selection}-background`}>
      <div className="selection-topbar">
        <div className="topbar-btn">
          <span className="material-symbols-outlined icon">favorite</span>
        </div>
        <Link to="/" className="link-style">
          <div className="topbar-btn">
            <span className="material-icons icon">close</span>
          </div>
        </Link>
      </div>
      <div>
        <h2 className="selection-view-heading">{selectionViewHeading}</h2>
      </div>
    </div>
  );
};
