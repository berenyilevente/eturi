import {
  getClothes,
  getClothesById,
  likeClothesAction,
  setTriggerReload,
} from "../../redux/clothes/clothes.actions";
import { AppState } from "../../redux/store";
import { FC, useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { HomeContentLayout } from "../../layouts/HomeContentLayout/HomeContentLayout.view";
import { ClothesListingLayout } from "../../layouts/ClothesListingLayout/ClothesListingLayout.view";
import Card from "../../components/Card";
import { Text } from "../../components/Text/Text.view";
import LoadingSpinner from "../../components/LoadingSpinner";
import { useHistory } from "react-router";
import pageURLS from "../../resources/constants/pageURLS";
import Icon from "../../components/Icon";

const useHomeContentScreen = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const history = useHistory();

  const { triggerReload } = useSelector((state: AppState) => state.clothes);

  useEffect(() => {
    triggerReload && dispatch(getClothes());
    dispatch(setTriggerReload({ triggerReload: false }));
  }, [dispatch]);

  const currencyText = t("currency.huf");

  const { clothes, isClothesLoading } = useSelector(
    (state: AppState) => state.clothes
  );

  const goToShowClothesScreen = useCallback(
    (id) => history.push(pageURLS.GET_CLOTHES_BY_ID + id),
    [history]
  );

  const [heartFill, setHeartFill] = useState<boolean>(false);

  return {
    clothes,
    isClothesLoading,
    currencyText,
    goToShowClothesScreen,
    heartFill,
    setHeartFill,
    dispatch,
  };
};

const HomeContentScreen: FC = () => {
  const {
    clothes,
    isClothesLoading,
    currencyText,
    goToShowClothesScreen,
    heartFill,
    setHeartFill,
    dispatch,
  } = useHomeContentScreen();

  return (
    <LoadingSpinner isLoading={isClothesLoading}>
      <HomeContentLayout
        contentCard={clothes.map((item) => {
          return (
            <Card backgroundColorStyle="white" shadow key={item._id}>
              <ClothesListingLayout
                image={
                  <img
                    alt="homeImages"
                    src={item.selectedFile}
                    onClick={() => goToShowClothesScreen(item._id)}
                  />
                }
                price={
                  <Text textType="text-normal-dark">
                    {item.price + " " + currencyText}
                  </Text>
                }
                size={<Text textType="text-medium-dark">{item.size}</Text>}
                brand={<Text textType="text-medium-dark">{item.brand}</Text>}
                heartIcon={
                  item.isLiked ? (
                    <Icon
                      iconType="heartIconFilled"
                      cursor
                      onClick={() => dispatch(likeClothesAction(item._id!))}
                    />
                  ) : (
                    <Icon
                      iconType="heartIcon"
                      cursor
                      onClick={() => {
                        dispatch(likeClothesAction(item._id!));
                      }}
                    />
                  )
                }
              />
            </Card>
          );
        })}
      />
    </LoadingSpinner>
  );
};
export default HomeContentScreen;
