import { FC, useCallback, useState } from "react";
import Card from "../../components/Card";
import Text from "../../components/Text/";
import { useTranslation } from "react-i18next";
import AddClothesLayout from "../../layouts/AddClothes/AddClothesLayout";
import Button from "../../components/Button";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import ImageUploader from "../../components/ImageUploader";
import DropdownMenu from "../../components/DropdownMenu";
import { ClothesDetailsLayout } from "../../layouts/AddClothes/ClothesDetailsLayout/ClothesDetailsLayout.view";
import { ClothesDescriptionLayout } from "../../layouts/AddClothes/ClothesDescriptionLayout/ClothesDescriptionLayout.view";
import { ClothesPriceLayout } from "../../layouts/AddClothes/ClothesPriceLayout/ClothesPriceLayout.view";
import { ClothesImageUploadLayout } from "../../layouts/AddClothes/ClothesImageUploadLayout/ClothesImageUploadLayout.view";
import DividerLine from "../../components/DividerLine";
import { useHistory } from "react-router";
import pageURLS from "../../resources/constants/pageURLS";
import Link from "../../components/Link";
import ModalCarousel from "../../components/ModalCarousel";
import { useOutsideClickHandler } from "../../hooks/useOutsideClickHandler";

import { useDispatch, useSelector } from "react-redux";
import {
  addClothes,
  setTriggerReload,
} from "../../redux/clothes/clothes.actions";
import { AppState } from "@/redux/store";
import {
  IDropdownValues,
  useDropdownBaseData,
} from "../../hooks/useDropdownBaseData";

const useAddClothesScreen = () => {
  const { t } = useTranslation();
  const history = useHistory();

  const titleText = t("clothes.title");
  const uploadPictureText = t("clothes.uploadPicture");
  const uploadPictureTipsText = t("clothes.uploadPictureTips");
  const clothesNameText = t("clothes.clothesName");
  const clothesNamePlaceholderText = t("clothes.clothesNamePlaceholder");
  const descriptionText = t("clothes.description");
  const descriptionPlaceholderText = t("clothes.descriptionPlaceholder");
  const categoryText = t("clothes.category");
  const categoryPlaceholderText = t("clothes.categoryPlaceholder");
  const brandText = t("clothes.brand");
  const brandPlaceholderText = t("clothes.brandPlaceholder");
  const conditionText = t("clothes.condition");
  const conditionPlaceholderText = t("clothes.conditionPlaceholder");
  const priceText = t("clothes.price");
  const pricePlaceholderText = t("clothes.pricePlaceholder");
  const cancelText = t("general.cancel");
  const addText = t("clothes.add");
  const sizeText = t("clothes.size");
  const sizePlaceholderText = t("clothes.sizePlaceholder");
  const colourText = t("clothes.colour");
  const colourPlaceholderText = t("clothes.colourPlaceholder");
  const sizeTableText = t("clothes.sizeTable");
  const pictureTipsText = t("clothes.pictureTips");
  const currencyText = t("currency.huf");

  const [imageData, setImageData] = useState<any>();
  const [nameContent, setNameContent] = useState<string>("");
  const [categoryContent, setCategoryContent] = useState<string>(categoryText);
  const [brandContent, setBrandContent] = useState<string>(brandText);
  const [sizeContent, setSizeContent] = useState<string>(sizeText);
  const [conditionContent, setConditionContent] = useState<string>("");
  const [colourContent, setColourContent] = useState<string>(colourText);
  const [descriptionContent, setDescriptionContent] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const { visible, setVisible } = useOutsideClickHandler(false);

  const goToHomeScreen = useCallback(() => history.push(pageURLS.HOME), [
    history,
  ]);

  const {
    category,
    brands,
    sizes,
    conditions,
    colours,
    carouselTitles,
    carouselImages,
    carouselContent,
  } = useDropdownBaseData();

  const { isClothesLoading } = useSelector((state: AppState) => state.clothes);

  const openTipsModal = useCallback(() => {
    setVisible(true);
  }, [setVisible]);

  const dispatch = useDispatch();

  const triggerReload = useCallback(() => {
    dispatch(setTriggerReload({ triggerReload: true }));
  }, [dispatch, setTriggerReload]);

  const isDataValid = () => {
    let isValid = true;
  };

  const user = JSON.parse(localStorage.getItem("profile")!);

  return {
    titleText,
    uploadPictureText,
    clothesNameText,
    clothesNamePlaceholderText,
    descriptionText,
    descriptionPlaceholderText,
    categoryText,
    brandText,
    conditionText,
    priceText,
    pricePlaceholderText,
    cancelText,
    addText,
    category,
    brands,
    conditions,
    sizes,
    sizeText,
    colourText,
    goToHomeScreen,
    colours,
    pictureTipsText,
    openTipsModal,
    categoryContent,
    setCategoryContent,
    brandContent,
    setBrandContent,
    sizeContent,
    setSizeContent,
    conditionContent,
    setConditionContent,
    colourContent,
    setColourContent,
    visible,
    setVisible,
    carouselTitles,
    carouselContent,
    carouselImages,
    price,
    setPrice,
    dispatch,
    imageData,
    setImageData,
    nameContent,
    setNameContent,
    descriptionContent,
    setDescriptionContent,
    triggerReload,
    isClothesLoading,
    currencyText,
    user,
  };
};

const AddClothesScreen: FC = () => {
  const {
    titleText,
    uploadPictureText,
    clothesNameText,
    clothesNamePlaceholderText,
    descriptionText,
    descriptionPlaceholderText,
    categoryText,
    brandText,
    conditionText,
    priceText,
    pricePlaceholderText,
    cancelText,
    addText,
    category,
    brands,
    conditions,
    sizes,
    sizeText,
    colourText,
    goToHomeScreen,
    colours,
    pictureTipsText,
    openTipsModal,
    categoryContent,
    setCategoryContent,
    brandContent,
    setBrandContent,
    sizeContent,
    setSizeContent,
    conditionContent,
    setConditionContent,
    colourContent,
    setColourContent,
    visible,
    setVisible,
    carouselTitles,
    carouselContent,
    carouselImages,
    price,
    setPrice,
    dispatch,
    imageData,
    setImageData,
    nameContent,
    setNameContent,
    descriptionContent,
    setDescriptionContent,
    triggerReload,
    isClothesLoading,
    currencyText,
    user,
  } = useAddClothesScreen();

  return (
    <>
      <AddClothesLayout
        title={<Text textType="text-large-dark">{titleText}</Text>}
        pictureUploadArea={
          <Card backgroundColorStyle="white" shadow>
            <ClothesImageUploadLayout
              hintText={
                <>
                  <Text textType="text-small-dark" color="lightGrey">
                    {uploadPictureText}
                  </Text>
                  <Link
                    textType="text-small-dark"
                    color={"darkBlue"}
                    onClick={() => openTipsModal()}
                  >
                    {pictureTipsText}
                  </Link>
                </>
              }
              imageUploadArea={
                <ImageUploader
                  onImage={(image) => {
                    setImageData(image);
                  }}
                />
              }
            />
          </Card>
        }
        descriptionArea={
          <Card backgroundColorStyle="white" shadow>
            <ClothesDescriptionLayout
              name={<Text textType="text-normal-dark">{clothesNameText}</Text>}
              nameInput={
                <Input
                  inputValue={nameContent}
                  placeholderText={clothesNamePlaceholderText}
                  onChange={setNameContent}
                />
              }
              line={<DividerLine />}
              description={
                <Text textType="text-normal-dark">{descriptionText}</Text>
              }
              descriptionTextArea={
                <TextArea
                  placeholderText={descriptionPlaceholderText}
                  content={descriptionContent}
                  onChange={setDescriptionContent}
                  size="medium"
                />
              }
            />
          </Card>
        }
        clothesDetailsArea={
          <Card backgroundColorStyle="white" shadow>
            <ClothesDetailsLayout
              category={<Text textType="text-normal-dark">{categoryText}</Text>}
              categoryDropdown={
                <DropdownMenu
                  items={category}
                  content={categoryContent}
                  addValueToDropdown={true}
                  onSelectItem={(item: IDropdownValues) => {
                    setCategoryContent(item.value);
                  }}
                />
              }
              line1={<DividerLine />}
              brand={<Text textType="text-normal-dark">{brandText}</Text>}
              brandDropdown={
                <DropdownMenu
                  items={brands}
                  content={brandContent}
                  addValueToDropdown={true}
                  onSelectItem={(item: IDropdownValues) => {
                    setBrandContent(item.value);
                  }}
                />
              }
              line2={<DividerLine />}
              size={<Text textType="text-normal-dark">{sizeText}</Text>}
              sizeDropdown={
                <DropdownMenu
                  items={sizes}
                  content={sizeContent}
                  addValueToDropdown={true}
                  onSelectItem={(item: IDropdownValues) => {
                    setSizeContent(item.value);
                  }}
                />
              }
              line3={<DividerLine />}
              condition={
                <Text textType="text-normal-dark">{conditionText}</Text>
              }
              conditionDropdown={
                <DropdownMenu
                  items={conditions}
                  placeholder={conditionText}
                  hasDescriptionRow
                  content={conditionContent}
                  addValueToDropdown={true}
                  onSelectItem={(item: IDropdownValues) => {
                    setConditionContent(item.value);
                  }}
                />
              }
              line4={<DividerLine />}
              colour={<Text textType="text-normal-dark">{colourText}</Text>}
              colourDropdown={
                <DropdownMenu
                  items={colours}
                  hasDescriptionRow
                  content={colourContent}
                  addValueToDropdown={true}
                  onSelectItem={(item: IDropdownValues) => {
                    setColourContent(item.value);
                  }}
                />
              }
            />
          </Card>
        }
        priceArea={
          <Card backgroundColorStyle="white" shadow>
            <ClothesPriceLayout
              price={<Text textType="text-normal-dark">{priceText}</Text>}
              priceInput={
                <Input
                  placeholderText={pricePlaceholderText + " " + currencyText}
                  inputType="number"
                  inputValue={price}
                  onChange={setPrice}
                  required={true}
                />
              }
            />
          </Card>
        }
        buttons={
          <>
            <Button
              colorStyle="darkBlue"
              transparent
              buttonTextColor="dark"
              buttonSize="medium"
              onClick={goToHomeScreen}
              border="borderNone"
            >
              {cancelText}
            </Button>
            <Button
              colorStyle="darkBlue"
              rounded
              buttonSize="normal"
              border="borderNone"
              onClick={() => {
                dispatch(
                  addClothes({
                    selectedFile: imageData,
                    name: nameContent,
                    description: descriptionContent,
                    category: categoryContent,
                    brand: brandContent,
                    size: sizeContent,
                    condition: conditionContent,
                    colour: colourContent,
                    price: price,
                    creator: user?.result?.name,
                  })
                );
                triggerReload();
                goToHomeScreen();
              }}
            >
              {addText}
            </Button>
          </>
        }
      />
      {
        <ModalCarousel
          showCarousel={visible}
          closeCarousel={() => setVisible(false)}
          carouselTitle={carouselTitles}
          carouselImages={carouselImages}
          carouselContent={carouselContent}
          carouselWidth={"narrow"}
        />
      }
    </>
  );
};
export default AddClothesScreen;
