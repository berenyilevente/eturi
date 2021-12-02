import {
  getClothes,
  getClothesById,
} from "../../redux/clothes/clothes.actions";
import { AppState } from "../../redux/store";
import { FC, useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../../components/LoadingSpinner";
import ProfileLayout from "../../layouts/ProfileLayout";
import CircleImage from "../../components/CircleImage";
import Text from "../../components/Text";
import DividerLine from "../../components/DividerLine";
import ClothesListingLayout from "../../layouts/ClothesListingLayout";
import Card from "../../components/Card";
import Button from "../../components/Button";
import { useHistory } from "react-router";
import pageURLS from "../../resources/constants/pageURLS";

const useProfileScreen = () => {
  const { t } = useTranslation();

  const myClothesTitleText = t("profile.title");
  const editProfileText = t("profile.editProfile");
  const noClothesText = t("profile.noClothes");
  const addNowText = t("profile.addNow");
  const currencyText = t("currency.huf");
  const noDataText = t("general.noData");

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("profile") || "null")
  );
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile") || "null"));
  }, [setUser]);

  const dispatch = useDispatch();
  const history = useHistory();

  const showProfileClothes = useSelector((state: AppState) =>
    user
      ? state.clothes.clothes.filter(
          (item) =>
            item.creator === user?.result?._id ||
            item.creator === user?.result.googleId
        )
      : null
  );
  const { isClothesLoading } = useSelector((state: AppState) => state.clothes);
  useEffect(() => {
    dispatch(getClothes());
  }, [dispatch]);

  const goToShowClothesScreen = useCallback(
    (id) => history.push(pageURLS.GET_CLOTHES_BY_ID + id),
    [history]
  );

  return {
    myClothesTitleText,
    user,
    showProfileClothes,
    isClothesLoading,
    editProfileText,
    currencyText,
    noDataText,
    goToShowClothesScreen,
    noClothesText,
    addNowText,
  };
};

const ProfileScreen: FC = () => {
  const {
    myClothesTitleText,
    user,
    showProfileClothes,
    isClothesLoading,
    editProfileText,
    currencyText,
    noDataText,
    noClothesText,
    addNowText,
    goToShowClothesScreen,
  } = useProfileScreen();

  return (
    <LoadingSpinner isLoading={isClothesLoading}>
      <ProfileLayout
        name={
          <>
            <Text textType="text-large-dark">{user?.result?.name}</Text>
            <Text textType="text-small-dark">
              {
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem doloremque, vitae porro unde debitis voluptas? Provident non cumque ducimus deserunt et rem deleniti, maxime nam vitae, fugit sequi eos reiciendis"
              }
            </Text>
          </>
        }
        editProfileButton={
          <Button
            colorStyle="grey"
            rounded
            buttonSize="normal"
            border="borderSolid"
            transparent
          >
            {editProfileText}
          </Button>
        }
        profileImage={
          <CircleImage
            imageSource={user?.result?.imageUrl}
            text={user?.result.name}
            size="large"
            textSize="text-large-white"
          />
        }
        line={<DividerLine />}
        myClothesTitle={
          <Text textType="text-medium-dark">{myClothesTitleText}</Text>
        }
        myClothesArea={
          showProfileClothes &&
          showProfileClothes.map((myClothesItem) => {
            return (
              <Card backgroundColorStyle="white" shadow key={myClothesItem._id}>
                <ClothesListingLayout
                  image={
                    <img
                      src={myClothesItem.selectedFile}
                      alt="myClothes"
                      onClick={() => goToShowClothesScreen(myClothesItem._id)}
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
          })
        }
      />
    </LoadingSpinner>
  );
};
export default ProfileScreen;
