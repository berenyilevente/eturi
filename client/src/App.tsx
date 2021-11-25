import "./styles/index.scss";
import "../src/i18next";
import { BrowserRouter as Router } from "react-router-dom";
import RootRouter from "./navigation/RootRouter";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <RootRouter />
      </Provider>
    </Router>
  );
}

export default App;
