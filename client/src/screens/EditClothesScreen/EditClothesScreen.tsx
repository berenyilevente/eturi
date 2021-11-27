import { AppState } from "@/redux/store";
import pageURLS from "../../resources/constants/pageURLS";
import { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import Card from "../../components/Card";
import EditClothesLayout from "../../layouts/EditClothesLayout";
import React from "react";
import { Text } from "../../components/Text/Text.view";

const useEditClothesScreen = () => {
  const { t } = useTranslation();
  //const queryParams = new URLSearchParams(window.location.search);
  const { id } = useParams<{ id: string }>();

  const { clothes, isClothesLoading } = useSelector(
    (state: AppState) => state.clothes
  );
  useEffect(() => {
    console.log(id.slice(3));
    console.log(clothes.find((item) => item._id === id)?.brand);
  }, []);
  return { clothes, id };
};

const EditClothesScreen: FC = () => {
  const { clothes, id } = useEditClothesScreen();

  return (
    <>
      {clothes.map((item) => {
        return (
          item._id === id.slice(3) && (
            <EditClothesLayout
              key={item._id}
              imageArea={
                <Card backgroundColorStyle="white" shadow rounded>
                  <img src={item.selectedFile}></img>{" "}
                </Card>
              }
              detailsArea={
                <Card backgroundColorStyle="white" shadow rounded>
                  <Text textType="text-large-dark">{item.brand}</Text>
                </Card>
              }
            />
          )
        );
      })}
    </>
  );
};
export default EditClothesScreen;
