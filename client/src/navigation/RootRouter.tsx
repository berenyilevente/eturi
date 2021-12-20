import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import MainHeaderScreen from "../screens/MainHeaderScreen/MainHeaderScreen";
import IntroScreen from "../screens/IntroScreen/IntroScreen";
import FooterScreen from "../screens/FooterScreen/FooterScreen";
import AddClothesScreen from "../screens/AddClothesScreen/AddClothesScreen";
import SearchScreen from "../screens/SearchScreen/SearchScreen";
import AboutScreen from "../screens/AboutScreen/AboutScreen";
import HomeContentScreen from "../screens/HomeContentScreen/HomeContentScreen";
import ShowCLothesScreen from "../screens/ShowClothesScreen/ShowClothesScreen";
import pageURLS from "../resources/constants/pageURLS";
import EditClothesScreen from "../screens/EditClothesScreen/EditClothesScreen";
import AuthScreen from "../screens/AuthScreen/AuthScreen";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import { useSelector } from "react-redux";
import { AppState } from "@/redux/store";

const RootRouter = () => {
  const { isUserLoggedIn } = useSelector((state: AppState) => state.auth);

  return (
    <MainLayout
      header={<MainHeaderScreen />}
      intro={
        <Routes>
          <Route path={pageURLS.CLOTHES} element={<IntroScreen />} />
        </Routes>
      }
      primaryContent={
        <Routes>
          <Route
            path={pageURLS.HOME}
            element={<Navigate replace to={pageURLS.CLOTHES} />}
          />
          <Route path={pageURLS.CLOTHES} element={<HomeContentScreen />} />
        </Routes>
      }
      authContent={
        <Routes>
          <Route
            path={pageURLS.AUTH}
            element={
              !isUserLoggedIn ? (
                <AuthScreen />
              ) : (
                <Navigate replace to={pageURLS.HOME} />
              )
            }
          />
          <Route path={pageURLS.LOGIN} element={<LoginScreen />} />
        </Routes>
      }
      secondaryContent={
        <Routes>
          <Route path={pageURLS.SELL} element={<AddClothesScreen />} />
          <Route path={pageURLS.ABOUT} element={<AboutScreen />} />
          <Route path={pageURLS.SEARCH_CLOTHES} element={<SearchScreen />} />
          <Route
            path={pageURLS.GET_CLOTHES_BY_ID}
            element={<ShowCLothesScreen />}
          />
          <Route path={pageURLS.EDIT_CLOTHES} element={<EditClothesScreen />} />
          <Route path={pageURLS.PROFILE} element={<ProfileScreen />} />
        </Routes>
      }
      footer={<FooterScreen />}
    />
  );
};

export default RootRouter;
