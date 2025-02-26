import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const AppWrapper: React.FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  );
};

export default AppWrapper;
