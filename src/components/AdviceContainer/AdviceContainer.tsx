import * as React from "react";
import { Link } from "react-router-dom";
import "./AdviceContainer.css";

export interface AdviceContainerProps {
  advice: string;
}

export const AdviceContainer = ({ advice }: AdviceContainerProps) => {
  return (
    <div className="selection-view advice-background">
      <div className="selection-close">
        <Link to="/" className="link-style">
          <div className="close-btn">
            <span className="material-icons close">close</span>
          </div>
        </Link>
      </div>
      <h2 className="selection-view-heading">{advice}</h2>
    </div>
  );
};
