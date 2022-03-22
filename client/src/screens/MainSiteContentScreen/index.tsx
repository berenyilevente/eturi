import { MainLayout } from "layouts";
import { Navigate, Route, Routes } from "react-router-dom";
import pageURLS from "../../resources/constants/pageURLS";
import {
  UserVerificationScreen,
  AboutScreen,
  HomeContentScreen,
  ShowClothesScreen,
  EditClothesScreen,
  AuthScreen,
  ProfileScreen,
  LoginScreen,
  EmailRedirectScreen,
  SearchScreen,
  AddClothesScreen,
  FooterScreen,
  IntroScreen,
  MainHeaderScreen,
} from "screens";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { FC } from "react";

const MainSiteContentScreen: FC = () => {
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
          <Route
            path={pageURLS.VERIFY_USER}
            element={<UserVerificationScreen />}
          />
          <Route
            path={pageURLS.EMAIL_REDIRECT}
            element={<EmailRedirectScreen />}
          />
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
            element={<ShowClothesScreen />}
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
