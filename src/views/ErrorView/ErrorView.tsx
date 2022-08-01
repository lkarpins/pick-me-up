import React from "react";
import "./ErrorView.css";

export interface ErrorViewProps {
  error: any;
}

export const ErrorView = ({ error }: ErrorViewProps) => (
  <div role="alert" className="error-view" >
    <h2 className="error-heading" data-cy="error-heading">Something went wrong!</h2>
    <p className="error-message">{error.message}</p>
    <img
      className="error-image"
      src="https://media.giphy.com/media/qrIsXgEdorkI/giphy.gif"
      alt="Tina Belcher says error!"
    />
  </div>
);
