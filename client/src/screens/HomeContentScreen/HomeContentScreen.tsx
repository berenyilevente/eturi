import { getClothes } from "../../redux/clothes/clothes.actions";
import { AppState } from "../../redux/store";
import { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { HomeContentLayout } from "../../layouts/HomeContentLayout/HomeContentLayout.view";
import { ClothesListingLayout } from "../../layouts/ClothesListingLayout/ClothesListingLayout.view";
import Card from "../../components/Card";
import { Text } from "../../components/Text/Text.view";
import LoadingSpinner from "../../components/LoadingSpinner";

const useHomeContentScreen = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const currencyText = t("currency.huf");

  useEffect(() => {
    dispatch(getClothes());
  }, [dispatch]);

  const { clothes, isLoading } = useSelector(
    (state: AppState) => state.clothes
  );
  return { clothes, isLoading, currencyText };
};

const HomeContentScreen: FC = () => {
  const { clothes, isLoading, currencyText } = useHomeContentScreen();

  return (
    <LoadingSpinner isLoading={isLoading}>
      <HomeContentLayout
        contentCard={clothes.map((item) => {
          return (
            <Card backgroundColorStyle="white" shadow rounded>
              <ClothesListingLayout
                image={
                  <img key={item.id} alt="homeImges" src={item.selectedFile} />
                }
                price={
                  <Text textType="text-normal-dark">
                    {item.price + " " + currencyText}
                  </Text>
                }
                size={<Text textType="text-medium-dark">{item.size}</Text>}
                brand={<Text textType="text-medium-dark">{item.brand}</Text>}
              />
            </Card>
          );
        })}
      />
    </LoadingSpinner>
  );
};
export default HomeContentScreen;
