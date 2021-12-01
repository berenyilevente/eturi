import MainLayout from "../../layouts/MainLayout";
import MainHeaderScreen from "../MainHeaderScreen/MainHeaderScreen";
import IntroScreen from "../IntroScreen/IntroScreen";
import FooterScreen from "../FooterScreen/FooterScreen";
import { Route, Switch } from "react-router-dom";
import AddClothesScreen from "../../screens/AddClothesScreen/AddClothesScreen";
import SearchScreen from "../../screens/SearchScreen/SearchScreen";
import AboutScreen from "../../screens/AboutScreen/AboutScreen";
import HomeContentScreen from "../../screens/HomeContentScreen/HomeContentScreen";
import ShowCLothesScreen from "../ShowClothesScreen/ShowClothesScreen";
import pageURLS from "../../resources/constants/pageURLS";
import EditClothesScreen from "../EditClothesScreen/EditClothesScreen";
import AuthScreen from "../AuthScreen/AuthScreen";

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
            <Route
              path={pageURLS.GET_CLOTHES_BY_ID}
              component={ShowCLothesScreen}
            />
            <Route
              exact
              path={pageURLS.EDIT_CLOTHES}
              component={EditClothesScreen}
            />
            <Route exact path={pageURLS.PROFILE} />
          </Switch>
        }
        authContent={
          <Switch>
            <Route exact path={pageURLS.AUTH} component={AuthScreen} />
          </Switch>
        }
        footer={<FooterScreen />}
      />
    );
  }
};

export default MainSiteContentScreen;
