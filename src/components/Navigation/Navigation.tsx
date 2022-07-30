import * as React from "react";
import { Button } from "../Button/Button";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

export interface NavigationProps {
  label: string;
}

export const Navigation = ({ label }: NavigationProps) => {
  const location = useLocation()
  console.log("location", location);
  
  return (
    <nav>
      <Link to="/" className="link-style">
        <h1 className="logo">PickMeUp</h1>
      </Link>
      {location.pathname !== "/favorites" && <Link to="/favorites">
        <Button label="See Favorites" />
      </Link>}
      
    </nav>
  );
};
