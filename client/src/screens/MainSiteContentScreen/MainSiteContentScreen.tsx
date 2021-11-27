import MainLayout from "../../layouts/MainLayout";
import MainHeaderScreen from "../MainHeaderScreen/MainHeaderScreen";
import IntroScreen from "../IntroScreen/IntroScreen";
import FooterScreen from "../FooterScreen/FooterScreen";
import { Route, Switch, useParams } from "react-router-dom";
import AddClothesScreen from "../../screens/AddClothesScreen/AddClothesScreen";
import SearchScreen from "../../screens/SearchScreen/SearchScreen";
import AboutScreen from "../../screens/AboutScreen/AboutScreen";
import HomeContentScreen from "../../screens/HomeContentScreen/HomeContentScreen";
import EditClothesScreen from "../../screens/EditClothesScreen/EditClothesScreen";
import pageURLS from "../../resources/constants/pageURLS";

const MainSiteContentScreen = () => {
  {
    return (
      <MainLayout
        header={<MainHeaderScreen />}
        intro={
          <Switch>
            <Route exact path={pageURLS.HOME} component={IntroScreen} />
          </Switch>
        }
        siteContent={
          <Switch>
            <Route exact path={pageURLS.HOME} component={HomeContentScreen} />
            <Route exact path={pageURLS.SELL} component={AddClothesScreen} />
            <Route exact path={pageURLS.SEARCH} component={SearchScreen} />
            <Route exact path={pageURLS.ABOUT} component={AboutScreen} />
            <Route path={pageURLS.EDIT_CLOTHES} component={EditClothesScreen} />
            <Route
              exact
              path={pageURLS.PROFILE}
              component={MainSiteContentScreen}
            />
          </Switch>
        }
        footer={<FooterScreen />}
      />
    );
  }
};

export default MainSiteContentScreen;
