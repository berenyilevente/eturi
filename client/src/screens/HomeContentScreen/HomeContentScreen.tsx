import {
  getClothes,
  likeClothesAction,
  setLikeId,
  setTriggerReload,
} from "../../redux/clothes/clothes.actions";
import { AppState } from "../../redux/store";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { HomeContentLayout } from "../../layouts/HomeContentLayout/HomeContentLayout.view";
import { ClothesListingLayout } from "../../layouts/ClothesListingLayout/ClothesListingLayout.view";
import Card from "../../components/Card";
import { Text } from "../../components/Text/Text.view";
import LoadingSpinner from "../../components/LoadingSpinner";
import { useNavigate, useLocation } from "react-router-dom";
import pageURLS from "../../resources/constants/pageURLS";
import Icon from "../../components/Icon";
import Pagination from "../../components/Pagination";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const HomeContentScreen: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const query = useQuery();

  //React router is going to read the url and check if we have the specified parameter
  const page = query.get("page")!;

  const currencyText = t("currency.huf");

  const { clothes, isClothesLoading, likeLoading, likeId } = useSelector(
    (state: AppState) => state.clothes
  );

  useEffect(() => {
    dispatch(getClothes());
  }, [dispatch]);

  const { isUserLoggedIn, auth, googleAuth } = useSelector(
    (state: AppState) => state.auth
  );

  const goToShowClothesScreen = useCallback(
    (id) => navigate(pageURLS.GET_CLOTHES_BY_ID + id),
    [navigate]
  );

  //basic frontend pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [clothesPerPage] = useState(6);

  const indexOfLastClothesItem = currentPage * clothesPerPage;
  const indexOfFirstClothesItem = indexOfLastClothesItem - clothesPerPage;
  const currentClothes = clothes.slice(
    indexOfFirstClothesItem,
    indexOfLastClothesItem
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <LoadingSpinner isLoading={isClothesLoading}>
      <HomeContentLayout
        contentCard={currentClothes!.map((item) => {
          return (
            <Card backgroundColorStyle="white" shadow key={item._id}>
              <ClothesListingLayout
                image={
                  <img
                    alt="homeImages"
                    src={item.selectedFile}
                    onClick={() => {
                      goToShowClothesScreen(item._id);
                      dispatch(setTriggerReload({ triggerReload: true }));
                    }}
                  />
                }
                price={
                  <Text textType="text-normal-dark">
                    {item.price + " " + currencyText}
                  </Text>
                }
                size={<Text textType="text-normal-dark">{item.size}</Text>}
                brand={<Text textType="text-normal-dark">{item.brand}</Text>}
                heartIcon={
                  auth?.result._id === item.creator ||
                  googleAuth?.result?.googleId === item.creator ? null : (
                    <>
                      {item.likes?.includes(
                        auth?.result._id! || googleAuth?.result?.googleId!
                      )
                        ? isUserLoggedIn && (
                            <Icon
                              iconType="heartIconFilled"
                              cursor
                              isLoading={
                                item._id === likeId ? likeLoading : undefined
                              }
                              onClick={() => {
                                dispatch(likeClothesAction(item._id!));
                                dispatch(setLikeId(item._id!));
                              }}
                            />
                          )
                        : isUserLoggedIn && (
                            <Icon
                              iconType="heartIcon"
                              cursor
                              isLoading={
                                item._id === likeId ? likeLoading : undefined
                              }
                              onClick={() => {
                                dispatch(likeClothesAction(item._id!));
                                dispatch(setLikeId(item._id!));
                              }}
                            />
                          )}
                    </>
                  )
                }
              />
            </Card>
          );
        })}
      />
      <Pagination
        page={page}
        clothesPerPage={clothesPerPage}
        totalClothes={clothes.length}
        paginate={paginate}
      />
    </LoadingSpinner>
  );
};
export default HomeContentScreen;
