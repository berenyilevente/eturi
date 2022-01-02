import MainLayout from "../../layouts/MainLayout";
import MainHeaderScreen from "../MainHeaderScreen/MainHeaderScreen";
import IntroScreen from "../IntroScreen/IntroScreen";
import FooterScreen from "../FooterScreen/FooterScreen";
import { Navigate, Route, Routes } from "react-router-dom";
import AddClothesScreen from "../../screens/AddClothesScreen/AddClothesScreen";
import SearchScreen from "../../screens/SearchScreen/SearchScreen";
import AboutScreen from "../../screens/AboutScreen/AboutScreen";
import HomeContentScreen from "../../screens/HomeContentScreen/HomeContentScreen";
import ShowCLothesScreen from "../ShowClothesScreen/ShowClothesScreen";
import pageURLS from "../../resources/constants/pageURLS";
import EditClothesScreen from "../EditClothesScreen/EditClothesScreen";
import AuthScreen from "../AuthScreen/AuthScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import LoginScreen from "../LoginScreen/LoginScreen";
import { useSelector } from "react-redux";
import { AppState } from "@/redux/store";

const MainSiteContentScreen = () => {
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
            element={<Navigate to={pageURLS.CLOTHES} />}
          />
          <Route path={pageURLS.CLOTHES} element={<HomeContentScreen />} />
        </Routes>
      }
      authContent={
        <Routes>
          <Route
            path={pageURLS.AUTH}
            element={
              !isUserLoggedIn ? <AuthScreen /> : <Navigate to={pageURLS.HOME} />
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

export default MainSiteContentScreen;
