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
import DividerLine from "../../components/DividerLine";

const useHomeContentScreen = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const history = useHistory();

  const { triggerReload } = useSelector((state: AppState) => state.clothes);

  useEffect(() => {
    dispatch(getClothes());
  }, [dispatch, triggerReload]);

  const currencyText = t("currency.huf");

  const { clothes, isClothesLoading, likeLoading } = useSelector(
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
    likeLoading,
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
    likeLoading,
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
                  likeLoading ? (
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    />
                  ) : (
                    <>
                      {item.isLiked ? (
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
                      )}
                    </>
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
