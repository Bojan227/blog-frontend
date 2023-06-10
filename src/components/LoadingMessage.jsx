import React from "react";
import "./styles/spinner.css";

export default function LoadingMessage() {
  return (
    <div className="loading-message">
      <h2>
        "due to using vercel's free tier, you may experience a lengthy cold
        start load at first (few seconds to a minute)"
      </h2>
    </div>
  );
}
