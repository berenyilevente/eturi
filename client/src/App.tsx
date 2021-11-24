import "./styles/index.scss";
import { BrowserRouter as Router } from "react-router-dom";
import RootRouter from "./navigation/RootRouter";
import "../src/i18next";

function App() {
  return (
    <Router>
      <RootRouter />
    </Router>
  );
}

export default App;
