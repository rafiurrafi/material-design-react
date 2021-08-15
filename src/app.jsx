import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./app.css";
import CustomSnackbar from "./components/snackbar";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <CustomSnackbar />
      </div>
    </BrowserRouter>
  );
};

export default App;
