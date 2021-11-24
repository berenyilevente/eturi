import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainSiteContentScreen from "../screens/MainSiteContentScreen/MainSiteContentScreen";
import AddClothesScreen from "../screens/AddClothesScreen/AddClothesScreen";

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
