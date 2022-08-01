import * as React from "react";
import { Button } from "../Button/Button";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav>
      <Link to="/" className="link-style" data-cy="logo">
        <h1 className="logo">PickMeUp</h1>
      </Link>
      {location.pathname !== "/favorites" ? (
        <Link to="/favorites">
          <Button label="See Favorites" />
        </Link>
      ) : (
        <Link to="/" data-cy="home-button">
          <Button label="Back Home" />
        </Link>
      )}
    </nav>
  );
};
