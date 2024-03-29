import {
  getClothes,
  likeClothesAction,
  setLikeId,
} from "../../redux/clothes/clothes.actions";
import { AppState } from "../../redux/store";
import { FC, useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  LoadingSpinner,
  Text,
  DividerLine,
  Card,
  Button,
  CircleImage,
  Icon,
  Link,
} from "components";
import { ProfileLayout, ClothesListingLayout, NoClothesLayout } from "layouts";

import { useNavigate } from "react-router";
import pageURLS from "../../resources/constants/pageURLS";

const ProfileScreen: FC = () => {
  const { t } = useTranslation();

  const myClothesTitleText = t("profile.title");
  const likedClothesTitleText = t("profile.likedClothesTitle");
  const noClothesText = t("profile.noClothes");
  const addNowText = t("profile.addNow");
  const currencyText = t("currency.huf");
  const noLikedClothes = t("profile.noLikedClothes");
  const searchNow = t("profile.searchNow");

  const { auth, isUserLoggedIn, googleAuth } = useSelector(
    (state: AppState) => state.auth
  );

  const [showLikedClothes, setShowLikedClothes] = useState(false);
  const [showMyClothes, setShowMyClothes] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getClothes());
  }, [dispatch]);

  const showProfileClothes = useSelector((state: AppState) =>
    auth || googleAuth
      ? state.clothes.clothes.filter(
          (item) =>
            item.creator === auth?.result?._id ||
            item.creator === googleAuth?.result!.googleId
        )
      : null
  );

  const goToSellScreen = useCallback(() => navigate(pageURLS.SELL), [navigate]);
  const goToSearchScreen = useCallback(
    () => navigate(pageURLS.SEARCH_CLOTHES),
    [navigate]
  );

  const likedClothes = useSelector((state: AppState) =>
    state.clothes.clothes.filter((item) =>
      item.likes?.includes(auth?.result._id! || googleAuth?.result?.googleId!)
    )
  );

  const { likeLoading, isClothesLoading, likeId } = useSelector(
    (state: AppState) => state.clothes
  );

  const goToShowClothesScreen = useCallback(
    (id) => navigate(pageURLS.GET_CLOTHES_BY_ID + id),
    [navigate]
  );

  return (
    <LoadingSpinner isLoading={isClothesLoading}>
      <ProfileLayout
        name={
          <>
            <Text textType="text-large-dark">
              {auth?.result.name || googleAuth?.result?.name!}
            </Text>
            <Text textType="text-small-dark">
              {
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem doloremque, vitae porro unde debitis voluptas? Provident non cumque ducimus deserunt et rem deleniti, maxime nam vitae, fugit sequi eos reiciendis"
              }
            </Text>
          </>
        }
        editProfileButton={
          <Icon iconType="settingsIcon" cursor onClick={() => {}} />
        }
        profileImage={
          <CircleImage
            imageSource={googleAuth?.result?.imageUrl}
            text={auth?.result.name || googleAuth?.result?.name!}
            size="large"
            textSize="text-large-white"
          />
        }
        line={<DividerLine />}
        myClothesTitle={
          <Link
            textType="text-medium-dark"
            focus={showMyClothes}
            onClick={() => {
              setShowLikedClothes(false);
              setShowMyClothes(true);
            }}
          >
            {myClothesTitleText}
          </Link>
        }
        likedClothesTitle={
          <Link
            textType="text-medium-dark"
            focus={showLikedClothes}
            onClick={() => {
              setShowLikedClothes(true);
              setShowMyClothes(false);
            }}
          >
            {likedClothesTitleText}
          </Link>
        }
        myClothesArea={
          showLikedClothes
            ? (likedClothes &&
                likedClothes!.length &&
                likedClothes.map((likedClothesItem) => {
                  return (
                    <Card
                      backgroundColorStyle="white"
                      shadow
                      key={likedClothesItem._id}
                    >
                      <ClothesListingLayout
                        image={
                          <img
                            src={likedClothesItem.selectedFile}
                            alt="myClothes"
                            onClick={() =>
                              goToShowClothesScreen(likedClothesItem._id)
                            }
                          />
                        }
                        price={
                          <Text textType="text-normal-dark">
                            {likedClothesItem.price + " " + currencyText}
                          </Text>
                        }
                        size={
                          <Text textType="text-normal-dark">
                            {likedClothesItem.size}
                          </Text>
                        }
                        brand={
                          <Text textType="text-normal-dark">
                            {likedClothesItem.brand}
                          </Text>
                        }
                        heartIcon={
                          <>
                            {likedClothesItem.likes?.includes(
                              auth?.result._id! || googleAuth?.result?.googleId!
                            )
                              ? isUserLoggedIn && (
                                  <Icon
                                    iconType="heartIconFilled"
                                    cursor
                                    isLoading={
                                      likedClothesItem._id === likeId
                                        ? likeLoading
                                        : undefined
                                    }
                                    onClick={() => {
                                      dispatch(
                                        likeClothesAction(likedClothesItem._id!)
                                      );
                                      dispatch(
                                        setLikeId(likedClothesItem._id!)
                                      );
                                    }}
                                  />
                                )
                              : isUserLoggedIn && (
                                  <Icon
                                    iconType="heartIcon"
                                    cursor
                                    isLoading={
                                      likedClothesItem._id === likeId
                                        ? likeLoading
                                        : undefined
                                    }
                                    onClick={() => {
                                      dispatch(
                                        likeClothesAction(likedClothesItem._id!)
                                      );
                                      dispatch(
                                        setLikeId(likedClothesItem._id!)
                                      );
                                    }}
                                  />
                                )}
                          </>
                        }
                      />
                    </Card>
                  );
                })) || (
                <NoClothesLayout
                  icon={<Icon iconType="clothesIcon" />}
                  titleText={
                    <Text textType="text-normal-dark">{noLikedClothes}</Text>
                  }
                  button={
                    <Button
                      colorStyle="grey"
                      rounded
                      buttonSize="normal"
                      border="borderSolid"
                      transparent
                      onClick={goToSearchScreen}
                    >
                      {searchNow}
                    </Button>
                  }
                />
              )
            : (showProfileClothes &&
                showProfileClothes!.length &&
                showProfileClothes!.map((myClothesItem) => {
                  return (
                    <Card
                      backgroundColorStyle="white"
                      shadow
                      key={myClothesItem._id}
                    >
                      <ClothesListingLayout
                        image={
                          <img
                            src={myClothesItem.selectedFile}
                            alt="myClothes"
                            onClick={() =>
                              goToShowClothesScreen(myClothesItem._id)
                            }
                          />
                        }
                        price={
                          <Text textType="text-normal-dark">
                            {myClothesItem.price + " " + currencyText}
                          </Text>
                        }
                        size={
                          <Text textType="text-normal-dark">
                            {myClothesItem.size}
                          </Text>
                        }
                        brand={
                          <Text textType="text-normal-dark">
                            {myClothesItem.brand}
                          </Text>
                        }
                      />
                    </Card>
                  );
                })) || (
                <NoClothesLayout
                  icon={<Icon iconType="clothesIcon" />}
                  titleText={
                    <Text textType="text-normal-dark">{noClothesText}</Text>
                  }
                  button={
                    <Button
                      colorStyle="grey"
                      rounded
                      buttonSize="normal"
                      border="borderSolid"
                      transparent
                      onClick={goToSellScreen}
                    >
                      {addNowText}
                    </Button>
                  }
                />
              )
        }
      />
    </LoadingSpinner>
  );
};
export default ProfileScreen;
