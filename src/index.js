import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";

import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
