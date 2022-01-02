import { AppState } from "../../redux/store";
import pageURLS from "../../resources/constants/pageURLS";
import { FC, useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../../components/Card";
import ShowClothesDetailsLayout from "../../layouts/ShowClothesDetailsLayout";
import { Text } from "../../components/Text/Text.view";
import {
  getClothesById,
  setTriggerReload,
} from "../../redux/clothes/clothes.actions";
import LoadingSpinner from "../../components/LoadingSpinner";
import Button from "../../components/Button";
import DividerLine from "../../components/DividerLine";
import Icon from "../../components/Icon";
import dayjs from "dayjs";

const ShowCLothesScreen: FC = () => {
  const { t } = useTranslation();
  //const queryParams = new URLSearchParams(window.location.search);
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("profile")!)
  );

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")!));
  }, [setUser]);

  const currentId = id!.slice(3);
  const clothesNameText = t("clothes.clothesName");
  const descriptionText = t("clothes.description");
  const categoryText = t("clothes.category");
  const conditionText = t("clothes.condition");
  const priceText = t("clothes.price");
  const sizeText = t("clothes.size");
  const colourText = t("clothes.colour");
  const editText = t("general.edit");
  const noDataText = t("general.noData");
  const backText = t("general.back");
  const currencyText = t("currency.huf");
  const homeText = t("header.home");
  const dateFormat = t("general.dateFormat");
  const createdAtText = t("general.createdAt");

  const showClothes = useSelector((state: AppState) =>
    currentId
      ? state.clothes.showClothes.find((item) => item._id === currentId)
      : null
  );
  
  const { isClothesLoading } = useSelector((state: AppState) => state.clothes);

  useEffect(() => {
    dispatch(getClothesById(currentId));
  }, [dispatch, currentId]);

  const goToHomeScreen = useCallback(() => navigate(pageURLS.HOME), [navigate]);

  const goToEditClothesScreen = useCallback(
    (id) => navigate(pageURLS.EDIT_CLOTHES + id),
    [navigate]
  );

  return (
    <LoadingSpinner isLoading={isClothesLoading}>
      {showClothes && (
        <Card backgroundColorStyle="white" shadow>
          <ShowClothesDetailsLayout
            imageArea={
              <img src={showClothes.selectedFile} alt="showClothesImages" />
            }
            brand={<Text textType="text-large-dark">{showClothes.brand}</Text>}
            likeIcon={
              showClothes!.likes!.length ? (
                <>
                  <Icon iconType="heartIconFilled" />
                  <div>{showClothes.likes?.length}</div>
                </>
              ) : (
                <>
                  <Icon iconType="heartIcon" />
                  <div>{showClothes.likes?.length}</div>
                </>
              )
            }
            nameTitle={
              <Text textType="text-normal-dark">{clothesNameText}</Text>
            }
            name={
              <Text textType="text-normal-dark">
                {showClothes.name || noDataText}
              </Text>
            }
            descriptionTitle={
              <Text textType="text-normal-dark">{descriptionText}</Text>
            }
            description={
              <Text textType="text-normal-dark">
                {showClothes.description || noDataText}
              </Text>
            }
            line1={<DividerLine />}
            categoryTitle={
              <Text textType="text-normal-dark">{categoryText}</Text>
            }
            category={
              <Text textType="text-normal-dark">{showClothes.category}</Text>
            }
            clothingType={
              <Text textType="text-normal-dark">
                {showClothes.clothingType}
              </Text>
            }
            sizeTitle={<Text textType="text-normal-dark">{sizeText}</Text>}
            size={<Text textType="text-normal-dark">{showClothes.size}</Text>}
            conditionTitle={
              <Text textType="text-normal-dark">{conditionText}</Text>
            }
            condition={
              <Text textType="text-normal-dark">{showClothes.condition}</Text>
            }
            colourTitle={<Text textType="text-normal-dark">{colourText}</Text>}
            colour={
              <Text textType="text-normal-dark">{showClothes.colour}</Text>
            }
            line2={<DividerLine />}
            priceTitle={<Text textType="text-normal-dark">{priceText}</Text>}
            price={
              <Text textType="text-normal-dark">
                {showClothes.price + " " + currencyText}
              </Text>
            }
            createdAtTitle={
              <Text textType="text-normal-dark">{createdAtText}</Text>
            }
            createdAt={
              <Text textType="text-normal-dark">
                {dayjs(showClothes.createdAt).format(dateFormat)}
              </Text>
            }
            buttons={
              <>
                {user?.result?.googleId === showClothes.creator ||
                user?.result?._id === showClothes?.creator ? (
                  <>
                    <Button
                      buttonSize="medium"
                      border="borderNone"
                      hasIconLeft
                      iconType="arrowLeft"
                      iconColor="dark"
                      transparent
                      onClick={() => {
                        navigate(-1);
                        dispatch(setTriggerReload({ triggerReload: true }));
                      }}
                    >
                      <Text textType="text-small-dark">{backText}</Text>
                    </Button>
                    <Button
                      colorStyle="darkBlue"
                      transparent
                      buttonTextColor="dark"
                      buttonSize="medium"
                      border="borderNone"
                      hasIconLeft
                      onClick={() => {
                        goToHomeScreen();
                        dispatch(setTriggerReload({ triggerReload: true }));
                      }}
                    >
                      {homeText}
                    </Button>
                    <Button
                      colorStyle="darkBlue"
                      rounded
                      buttonSize="normal"
                      border="borderNone"
                      onClick={() => goToEditClothesScreen(showClothes._id)}
                    >
                      <Text textType="text-small-white"> {editText}</Text>
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      buttonSize="medium"
                      border="borderNone"
                      hasIconLeft
                      iconType="arrowLeft"
                      iconColor="dark"
                      transparent
                      onClick={() => {
                        navigate(-1);
                        dispatch(setTriggerReload({ triggerReload: true }));
                      }}
                    >
                      <Text textType="text-small-dark">{backText}</Text>
                    </Button>
                    <Button
                      colorStyle="darkBlue"
                      buttonTextColor="dark"
                      buttonSize="medium"
                      border="borderNone"
                      onClick={() => {
                        goToHomeScreen();
                        dispatch(setTriggerReload({ triggerReload: true }));
                      }}
                    >
                      <Text textType="text-small-white">{homeText}</Text>
                    </Button>
                  </>
                )}
              </>
            }
          />
        </Card>
      )}
    </LoadingSpinner>
  );
};
export default ShowCLothesScreen;
