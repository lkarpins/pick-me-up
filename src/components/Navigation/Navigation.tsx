import * as React from "react";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import "./Navigation.css";

export interface NavigationProps {
  label: string;
}

export const Navigation = ({ label }: NavigationProps) => {
  return (
    <nav>
      <Link to="/" className="link-style">
        <h1 className="logo">PickMeUp</h1>
      </Link>
      <Link to="/favorites">
        <Button label="See Favorites" />
      </Link>
    </nav>
  );
};
