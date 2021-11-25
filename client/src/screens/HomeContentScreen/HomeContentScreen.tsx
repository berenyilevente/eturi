import { getClothes } from "../../redux/clothes/clothes.actions";
import { AppState } from "../../redux/store";
import { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const useHomeContentScreen = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClothes());
    console.log(clothes);
  }, [dispatch]);

  const { clothes, isLoading } = useSelector(
    (state: AppState) => state.clothes
  );
  return { clothes };
};

const HomeContentScreen: FC = () => {
  const { clothes } = useHomeContentScreen();

  return <>{clothes.map((item) => item.brand)}</>;
};
export default HomeContentScreen;
