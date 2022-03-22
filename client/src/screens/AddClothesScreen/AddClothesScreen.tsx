import { FC, useCallback, useState } from "react";
import {
  Card,
  Text,
  Button,
  Input,
  TextArea,
  ImageUploader,
  DropdownMenu,
  DividerLine,
  Link,
  ModalCarousel,
} from "components";
import { useTranslation } from "react-i18next";
import AddClothesLayout from "../../layouts/AddClothes/AddClothesLayout";
import { ClothesDetailsLayout } from "../../layouts/AddClothes/ClothesDetailsLayout/ClothesDetailsLayout.view";
import { ClothesDescriptionLayout } from "../../layouts/AddClothes/ClothesDescriptionLayout/ClothesDescriptionLayout.view";
import { ClothesPriceLayout } from "../../layouts/AddClothes/ClothesPriceLayout/ClothesPriceLayout.view";
import { ClothesImageUploadLayout } from "../../layouts/AddClothes/ClothesImageUploadLayout/ClothesImageUploadLayout.view";
import { useNavigate } from "react-router";
import pageURLS from "../../resources/constants/pageURLS";
import { useOutsideClickHandler, useDropdownBaseData } from "hooks";
import { useDispatch, useSelector } from "react-redux";
import {
  addClothes,
  setTriggerReload,
} from "../../redux/clothes/clothes.actions";
import { IDropdownValues } from "../../hooks/useDropdownBaseData";
import useForm from "../../hooks/useForm";
import { AppState } from "../../redux/store";

const AddClothesScreen: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { auth, googleAuth } = useSelector((state: AppState) => state.auth);

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
  const [categoryContent, setCategoryContent] = useState<string>();
  const [clothesTypeContent, setClothesTypeContent] = useState<string>(
    clothingTypeText
  );
  const [brandContent, setBrandContent] = useState<string>();
  const [sizeContent, setSizeContent] = useState<string>();
  const [conditionContent, setConditionContent] = useState<string>();
  const [colourContent, setColourContent] = useState<string>();
  const [descriptionContent, setDescriptionContent] = useState<string>();
  const { visible, setVisible } = useOutsideClickHandler(false);
  const { addClothesValues, handleChange } = useForm();

  const isInputDataValid = () => {
    let isValid = true;
    if (
      !imageData ||
      !addClothesValues.name ||
      !descriptionContent ||
      !categoryContent ||
      !clothesTypeContent ||
      !brandContent ||
      !sizeContent ||
      !conditionContent ||
      !colourContent ||
      !addClothesValues.price
    ) {
      isValid = false;
      alert("Fill out all the fields");
    }
    return isValid;
  };

  const goToHomeScreen = useCallback(() => navigate(pageURLS.HOME), [navigate]);

  const submitClothes = () => {
    isInputDataValid() &&
      dispatch(
        addClothes({
          selectedFile: imageData!,
          name: addClothesValues.name!,
          description: descriptionContent!,
          category: categoryContent!,
          clothingType: clothesTypeContent!,
          brand: brandContent!,
          size: sizeContent!,
          condition: conditionContent!,
          colour: colourContent!,
          price: addClothesValues.price!,
          creator: auth?.result?._id || googleAuth?.result?.googleId,
        })
      ) &&
      goToHomeScreen();
  };

  const {
    category,
    brands,
    sizes,
    conditions,
    colours,
    carouselTitles,
    carouselImages,
    carouselContent,
    clothingType,
  } = useDropdownBaseData();

  const openTipsModal = useCallback(() => {
    setVisible(true);
  }, [setVisible]);

  const dispatch = useDispatch();

  const triggerReload = useCallback(() => {
    dispatch(setTriggerReload({ triggerReload: true }));
  }, [dispatch]);

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
                  inputValue={addClothesValues.name}
                  placeholderText={clothesNamePlaceholderText}
                  onChange={handleChange}
                  name="name"
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
                  hasDescriptionRow
                  content={conditionContent || conditionText}
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
                  inputValue={addClothesValues.price}
                  onChange={handleChange}
                  required={true}
                  name="price"
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
          carouselWidth={"normal"}
        />
      }
    </>
  );
};
export default AddClothesScreen;
