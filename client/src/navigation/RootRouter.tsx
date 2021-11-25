import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainSiteContentScreen from "../screens/MainSiteContentScreen/MainSiteContentScreen";

const RootRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path={"/"} component={MainSiteContentScreen} />
      </Switch>
    </Router>
  );
};

export default RootRouter;
