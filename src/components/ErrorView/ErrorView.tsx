import React from "react";
import "./ErrorView.css";

export interface ErrorViewProps {
  error: any;
}

export const ErrorView = ({ error }: ErrorViewProps) => (
  <div role="alert" className="error-view">
    <h2>Something went wrong!</h2>
    <pre style={{ color: "red" }}>{error.message}</pre>
    <img
      src="https://media.giphy.com/media/qrIsXgEdorkI/giphy.gif"
      alt="Tina Belcher says error!"
    />
  </div>
);
