import { AppState } from "../../redux/store";
import pageURLS from "../../resources/constants/pageURLS";
import { FC, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router-dom";
import Card from "../../components/Card";
import ShowClothesLayout from "../../layouts/ShowClothesLayout";
import ShowClothesDetailsLayout from "../../layouts/ShowClothesDetailsLayout";
import React from "react";
import { Text } from "../../components/Text/Text.view";
import { getClothesById } from "../../redux/clothes/clothes.actions";
import LoadingSpinner from "../../components/LoadingSpinner";
import Button from "../../components/Button";
import DividerLine from "../../components/DividerLine";

const useEditClothesScreen = () => {
  const { t } = useTranslation();
  //const queryParams = new URLSearchParams(window.location.search);
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const history = useHistory();

  const currentId = id.slice(3);
  const clothesNameText = t("clothes.clothesName");
  const descriptionText = t("clothes.description");
  const categoryText = t("clothes.category");
  const brandText = t("clothes.brand");
  const conditionText = t("clothes.condition");
  const priceText = t("clothes.price");
  const sizeText = t("clothes.size");
  const colourText = t("clothes.colour");
  const cancelText = t("general.cancel");
  const editText = t("general.edit");
  const noDataText = t("general.noData");
  const backText = t("general.back");
  const currencyText = t("currency.huf");

  const showClothes = useSelector((state: AppState) =>
    currentId
      ? state.clothes.showClothes.find((item) => item._id === currentId)
      : null
  );
  const { isClothesLoading } = useSelector((state: AppState) => state.clothes);

  useEffect(() => {
    dispatch(getClothesById(currentId));
  }, [dispatch]);

  const goToHomeScreen = useCallback(() => history.push(pageURLS.HOME), [
    history,
  ]);
  const goToEditClothesScreen = useCallback(
    (id) => history.push(pageURLS.EDIT_CLOTHES + id),
    [history]
  );

  return {
    showClothes,
    id,
    isClothesLoading,
    cancelText,
    editText,
    clothesNameText,
    descriptionText,
    categoryText,
    brandText,
    conditionText,
    priceText,
    sizeText,
    colourText,
    noDataText,
    goToHomeScreen,
    currentId,
    currencyText,
    backText,
    goToEditClothesScreen,
  };
};

const ShowCLothesScreen: FC = () => {
  const {
    showClothes,
    id,
    isClothesLoading,
    cancelText,
    editText,
    clothesNameText,
    descriptionText,
    categoryText,
    brandText,
    conditionText,
    priceText,
    sizeText,
    colourText,
    noDataText,
    goToHomeScreen,
    currentId,
    currencyText,
    backText,
    goToEditClothesScreen,
  } = useEditClothesScreen();

  return (
    <LoadingSpinner isLoading={isClothesLoading}>
      {showClothes && (
        <ShowClothesLayout
          imageArea={
            <Card backgroundColorStyle="white" shadow>
              <img src={showClothes.selectedFile} />
            </Card>
          }
          detailsArea={
            <Card backgroundColorStyle="white" shadow>
              <ShowClothesDetailsLayout
                brand={
                  <Text textType="text-large-dark">{showClothes.brand}</Text>
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
                  <Text textType="text-normal-dark">
                    {showClothes.category}
                  </Text>
                }
                sizeTitle={<Text textType="text-normal-dark">{sizeText}</Text>}
                size={
                  <Text textType="text-normal-dark">{showClothes.size}</Text>
                }
                conditionTitle={
                  <Text textType="text-normal-dark">{conditionText}</Text>
                }
                condition={
                  <Text textType="text-normal-dark">
                    {showClothes.condition}
                  </Text>
                }
                colourTitle={
                  <Text textType="text-normal-dark">{colourText}</Text>
                }
                colour={
                  <Text textType="text-normal-dark">{showClothes.colour}</Text>
                }
                line2={<DividerLine />}
                priceTitle={
                  <Text textType="text-normal-dark">{priceText}</Text>
                }
                price={
                  <Text textType="text-normal-dark">
                    {showClothes.price + " " + currencyText}
                  </Text>
                }
                buttons={
                  <>
                    <Button
                      colorStyle="darkBlue"
                      transparent
                      buttonTextColor="dark"
                      buttonSize="medium"
                      border="borderNone"
                      onClick={goToHomeScreen}
                    >
                      {backText}
                    </Button>
                    <Button
                      colorStyle="darkBlue"
                      rounded
                      buttonSize="normal"
                      border="borderNone"
                      onClick={() => goToEditClothesScreen(showClothes._id)}
                    >
                      {editText}
                    </Button>
                  </>
                }
              />
            </Card>
          }
        />
      )}
    </LoadingSpinner>
  );
};
export default ShowCLothesScreen;
