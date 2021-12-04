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
import { cn } from "@/components/utils";

const useAddClothesScreen = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("profile")!);

  const titleText = t("clothes.title");
  const uploadPictureText = t("clothes.uploadPicture");
  const clothesNameText = t("clothes.clothesName");
  const clothesNamePlaceholderText = t("clothes.clothesNamePlaceholder");
  const descriptionText = t("clothes.description");
  const descriptionPlaceholderText = t("clothes.descriptionPlaceholder");
  const categoryText = t("clothes.category");
  const brandText = t("clothes.brand");
  const conditionText = t("clothes.condition");
  const priceText = t("clothes.price");
  const pricePlaceholderText = t("clothes.pricePlaceholder");
  const cancelText = t("general.cancel");
  const addText = t("clothes.add");
  const sizeText = t("clothes.size");
  const colourText = t("clothes.colour");
  const pictureTipsText = t("clothes.pictureTips");
  const currencyText = t("currency.huf");
  const uploadLabelText = t("images.uploadImageLabel");
  const clothingTypeText = t("clothes.clothingType");

  const [imageData, setImageData] = useState<any>();
  const [nameContent, setNameContent] = useState<string>("");
  const [categoryContent, setCategoryContent] = useState<string>();
  const [clothesTypeContent, setClothesTypeContent] = useState<string>(
    clothingTypeText
  );
  const [brandContent, setBrandContent] = useState<string>();
  const [sizeContent, setSizeContent] = useState<string>();
  const [conditionContent, setConditionContent] = useState<string>();
  const [colourContent, setColourContent] = useState<string>();
  const [descriptionContent, setDescriptionContent] = useState<string>();
  const [price, setPrice] = useState<string>("");
  const { visible, setVisible } = useOutsideClickHandler(false);

  const isInputDataValid = () => {
    let isValid = true;
    if (
      !imageData ||
      !nameContent ||
      !descriptionContent ||
      !categoryContent ||
      !clothesTypeContent ||
      !brandContent ||
      !sizeContent ||
      !conditionContent ||
      !colourContent ||
      !price
    ) {
      isValid = false;
      alert("Fill out all the fields");
    }
    return isValid;
  };

  const goToHomeScreen = useCallback(() => history.push(pageURLS.HOME), [
    history,
  ]);

  const submitClothes = useCallback(() => {
    isInputDataValid() &&
      dispatch(
        addClothes({
          selectedFile: imageData!,
          name: nameContent!,
          description: descriptionContent!,
          category: categoryContent!,
          clothingType: clothesTypeContent!,
          brand: brandContent!,
          size: sizeContent!,
          condition: conditionContent!,
          colour: colourContent!,
          price: price!,
          creator: user?.result?.name,
        })
      ) &&
      goToHomeScreen();
  }, [
    imageData,
    isInputDataValid,
    nameContent,
    descriptionContent,
    categoryContent,
    clothesTypeContent,
    brandContent,
    sizeContent,
    conditionContent,
    colourContent,
    price,
    user?.result?.name,
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
    categories,
    clothingType,
  } = useDropdownBaseData();

  const { isClothesLoading } = useSelector((state: AppState) => state.clothes);

  const openTipsModal = useCallback(() => {
    setVisible(true);
  }, [setVisible]);

  const dispatch = useDispatch();

  const triggerReload = useCallback(() => {
    dispatch(setTriggerReload({ triggerReload: true }));
  }, [dispatch, setTriggerReload]);

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
    uploadLabelText,
    categories,
    clothingType,
    clothesTypeContent,
    setClothesTypeContent,
    submitClothes,
    isInputDataValid,
    clothingTypeText,
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
    uploadLabelText,
    categories,
    clothingType,
    clothesTypeContent,
    setClothesTypeContent,
    submitClothes,
    isInputDataValid,
    clothingTypeText,
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
              previewImages={
                imageData && <img src={imageData} alt="previewImage" />
              }
              imageUploadArea={
                <ImageUploader
                  onImage={(image) => {
                    setImageData(image);
                  }}
                  uploadText={uploadLabelText}
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
                  content={categoryContent || categoryText}
                  addValueToDropdown={true}
                  onSelectItem={(item: IDropdownValues) => {
                    setCategoryContent(item.value);
                  }}
                />
              }
              secondCategoryDropdown={
                <DropdownMenu
                  items={clothingType}
                  content={clothesTypeContent || clothingTypeText}
                  addValueToDropdown={true}
                  onSelectItem={(item: IDropdownValues) => {
                    setClothesTypeContent(item.value);
                  }}
                />
              }
              line1={<DividerLine />}
              brand={<Text textType="text-normal-dark">{brandText}</Text>}
              brandDropdown={
                <DropdownMenu
                  items={brands}
                  content={brandContent || brandText}
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
                  content={sizeContent || sizeText}
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
                  placeholder={conditionText || conditionText}
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
                  content={colourContent || colourText}
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
                submitClothes();
                triggerReload();
              }}
            >
              <Text textType="text-normal-white"> {addText}</Text>
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
