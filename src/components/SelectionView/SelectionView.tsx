import * as React from "react";
import { Link } from "react-router-dom";
import "./SelectionView.css";

export interface SelectionViewProps {
  selection: string;
  selectionViewHeading: string;
}

export const SelectionView = ({ selection, selectionViewHeading }: SelectionViewProps) => {
  return (
    <div className={`selection-view ${selection}-background`}>
      <div className="selection-close">
        <Link to="/" className="link-style">
          <div className="close-btn">
            <span className="material-icons close">close</span>
          </div>
        </Link>
      </div>
      <h2 className="selection-view-heading">{selectionViewHeading}</h2>
    </div>
  );
};
