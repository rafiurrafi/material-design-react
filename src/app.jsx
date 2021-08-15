import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./app.css";
import ButtonVariants from "./components/buttonVariants";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <ButtonVariants />
      </div>
    </BrowserRouter>
  );
};

export default App;
