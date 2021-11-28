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
  };
};

const EditClothesScreen: FC = () => {
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
  } = useEditClothesScreen();

  return (
    <LoadingSpinner isLoading={isClothesLoading}>
      {showClothes && (
        <ShowClothesLayout
          imageArea={
            <Card backgroundColorStyle="white" shadow rounded>
              <img src={showClothes.selectedFile} />
            </Card>
          }
          detailsArea={
            <Card backgroundColorStyle="white" shadow rounded>
              <ShowClothesDetailsLayout
                brand={
                  <Text textType="text-large-dark">{showClothes.brand}</Text>
                }
                nameTitle={clothesNameText}
                name={
                  <Text textType="text-medium-dark">
                    {showClothes.name || noDataText}
                  </Text>
                }
                descriptionTitle={descriptionText}
                description={
                  <Text textType="text-medium-dark">
                    {showClothes.description || noDataText}
                  </Text>
                }
                categoryTitle={
                  <Text textType="text-medium-dark">{categoryText}</Text>
                }
                category={
                  <Text textType="text-medium-dark">
                    {showClothes.category}
                  </Text>
                }
                sizeTitle={<Text textType="text-medium-dark">{sizeText}</Text>}
                size={
                  <Text textType="text-medium-dark">{showClothes.size}</Text>
                }
                conditionTitle={
                  <Text textType="text-medium-dark">{conditionText}</Text>
                }
                condition={
                  <Text textType="text-medium-dark">
                    {showClothes.condition}
                  </Text>
                }
                colourTitle={
                  <Text textType="text-medium-dark">{colourText}</Text>
                }
                colour={
                  <Text textType="text-medium-dark">{showClothes.colour}</Text>
                }
                priceTitle={
                  <Text textType="text-medium-dark">{priceText}</Text>
                }
                price={
                  <Text textType="text-medium-dark">{showClothes.price}</Text>
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
                      {cancelText}
                    </Button>
                    <Button
                      colorStyle="darkBlue"
                      rounded
                      buttonSize="normal"
                      border="borderNone"
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
export default EditClothesScreen;
