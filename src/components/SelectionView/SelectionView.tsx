import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import "./SelectionView.css";

export interface SelectionViewProps {
  selection: string;
  selectionViewText: string;
  getNewCall: (selection: string) => void;
}

export const SelectionView = ({
  selection,
  selectionViewText,
  getNewCall,
}: SelectionViewProps) => {
  return (
    <div className={`selection-view ${selection}-background`}>
      <div className="selection-topbar">
        <div className="topbar-btn">
          <span className="material-icons icon">favorite_border</span>
        </div>
        <Link to="/" className="link-style">
          <div className="topbar-btn" onClick={() => getNewCall(selection)}>
            <span className="material-icons icon">close</span>
          </div>
        </Link>
      </div>
      <div className="selection-content">
        <h2 className="selection-view-text">{selectionViewText}</h2>
        <Button
          onClick={() => getNewCall(selection)}
          label={`Get New ${selection}`}
        />
      </div>
    </div>
  );
};
