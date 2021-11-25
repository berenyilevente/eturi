import { FC, useCallback, useEffect, useState } from "react";
import { Card } from "../../components/Card/Card.view";
import { Text } from "../../components/Text/Text.view";
import { useTranslation } from "react-i18next";
import { AddClothesLayout } from "../../layouts/AddClothes/AddClothesLayout/AddClothesLayout.view";
import { Button } from "../../components/Button/Button.view";
import { Input } from "../../components/Input/Input.view";
import { TextArea } from "../../components/TextArea/TextArea.view";
import { DropdownMenu } from "../../components/DropdownMenu";
import { ClothesDetailsLayout } from "../../layouts/AddClothes/ClothesDetailsLayout/ClothesDetailsLayout.view";
import { ClothesDescriptionLayout } from "../../layouts/AddClothes/ClothesDescriptionLayout/ClothesDescriptionLayout.view";
import { ClothesPriceLayout } from "../../layouts/AddClothes/ClothesPriceLayout/ClothesPriceLayout.view";
import { ClothesImageUploadLayout } from "../../layouts/AddClothes/ClothesImageUploadLayout/ClothesImageUploadLayout.view";
import DividerLine from "../../components/DividerLine";
import { useHistory } from "react-router";
import pageURLS from "../../resources/constants/pageURLS";
import Link from "../../components/Link";
import ModalCarousel from "../../components/ModalCarousel";
import Icon from "../../components/Icon";
import { useOutsideClickHandler } from "../../hooks/useOutsideClickHandler";
import image1Source from "../../public/templateImages/tipsMock1.png";
import image2Source from "../../public/templateImages/tipsMock2.png";
import image3Source from "../../public/templateImages/tipsMock3.png";
import image4Source from "../../public/templateImages/tipsMock4.png";
import image5Source from "../../public/templateImages/tipsMock5.png";
import { useDispatch } from "react-redux";
import { addClothes } from "../../redux/clothes/clothes.actions";

interface IDropdownValues {
  id: number;
  value: string;
  description?: string;
}

const useAddClothesScreen = () => {
  const { t } = useTranslation();
  const { v4: uuidv4 } = require("uuid");
  const history = useHistory();

  const titleText = t("sellClothes.title");
  const uploadPictureText = t("sellClothes.uploadPicture");
  const uploadPictureTipsText = t("sellClothes.uploadPictureTips");
  const clothesNameText = t("sellClothes.clothesName");
  const clothesNamePlaceholderText = t("sellClothes.clothesNamePlaceholder");
  const descriptionText = t("sellClothes.description");
  const descriptionPlaceholderText = t("sellClothes.descriptionPlaceholder");
  const categoryText = t("sellClothes.category");
  const categoryPlaceholderText = t("sellClothes.categoryPlaceholder");
  const brandText = t("sellClothes.brand");
  const brandPlaceholderText = t("sellClothes.brandPlaceholder");
  const conditionText = t("sellClothes.condition");
  const conditionPlaceholderText = t("sellClothes.conditionPlaceholder");
  const priceText = t("sellClothes.price");
  const pricePlaceholderText = t("sellClothes.pricePlaceholder");
  const cancelText = t("sellClothes.cancel");
  const addText = t("sellClothes.add");
  const sizeText = t("sellClothes.size");
  const sizePlaceholderText = t("sellClothes.sizePlaceholder");
  const colourText = t("sellClothes.colour");
  const colourPlaceholderText = t("sellClothes.colourPlaceholder");
  const sizeTableText = t("sellClothes.sizeTable");
  const pictureTipsText = t("sellClothes.pictureTips");

  //category
  const menCategoryText = t("sellClothes.menCategory");
  const womenCategoryText = t("sellClothes.womenCategory");
  const childrenCategoryText = t("sellClothes.childrenCategory");

  //brands
  const nike = t("brands.nike");
  const puma = t("brands.puma");
  const zara = t("brands.zara");
  const adidas = t("brands.adidas");
  const levis = t("brands.levis");
  const HandM = t("brands.HandM");
  const ralphLauren = t("brands.ralphLauren");
  const tommyHilfiger = t("brands.tommyHilfiger");
  const lacoste = t("brands.lacoste");
  const calvinKlein = t("brands.calvinKlein");
  const michaelKors = t("brands.michaelKors");
  const guess = t("brands.guess");
  const noBrand = t("brands.noBrand");

  //sizes
  const extraSmall = t("size.XS");
  const small = t("size.S");
  const medium = t("size.M");
  const large = t("size.L");
  const extraLarge = t("size.XL");
  const xxLarge = t("size.XXL");

  //condition
  const newWithLabel = t("condition.newWithLabel");
  const newWithLabelDescription = t("condition.newWithLabelDescription");
  const newClothes = t("condition.newClothes");
  const newDescription = t("condition.newDescription");
  const veryGood = t("condition.veryGood");
  const veryGoodDescription = t("condition.veryGoodDescription");
  const good = t("condition.good");
  const goodDescription = t("condition.goodDescription");
  const satisfactory = t("condition.satisfactory");
  const satisfactoryDescription = t("condition.satisfactoryDescription");

  //colours
  const blackText = t("colour.black");
  const brownText = t("colour.brown");
  const greyText = t("colour.grey");
  const beigeText = t("colour.beige");
  const pinkText = t("colour.pink");
  const purpleText = t("colour.purple");
  const redText = t("colour.red");
  const yellowText = t("colour.yellow");
  const blueText = t("colour.blue");
  const greenText = t("colour.green");
  const orangeText = t("colour.orange");
  const whiteText = t("colour.white");
  const silverText = t("colour.silver");
  const goldText = t("colour.gold");
  const multiColourText = t("colour.multiColour");
  const khakiText = t("colour.khaki");
  const turquoiseText = t("colour.turquoise");
  const creamText = t("colour.cream");
  const apricotText = t("colour.apricot");
  const lightBlueText = t("colour.lightBlue");
  const darkGreenText = t("colour.darkGreen");

  //tips
  const lightingText = t("tips.titles.lighting");
  const backgroundText = t("tips.titles.background");
  const noFlashText = t("tips.titles.noFlash");
  const manyText = t("tips.titles.many");
  const yourPhotosText = t("tips.titles.yourPhotos");

  const lightingContentText = t("tips.content.lightingContent");
  const backgroundContentText = t("tips.content.backgroundContent");
  const noFlashContentText = t("tips.content.noFlashContent");
  const manyContentText = t("tips.content.manyContent");
  const yourPhotosContentText = t("tips.content.yourPhotosContent");

  const category: IDropdownValues[] = [
    { id: 1, value: menCategoryText },
    { id: 2, value: womenCategoryText },
    { id: 3, value: childrenCategoryText },
  ];

  const brands = [
    { id: 1, value: nike },
    { id: 2, value: puma },
    { id: 3, value: zara },
    { id: 4, value: adidas },
    { id: 5, value: levis },
    { id: 6, value: HandM },
    { id: 7, value: ralphLauren },
    { id: 8, value: tommyHilfiger },
    { id: 9, value: lacoste },
    { id: 10, value: calvinKlein },
    { id: 11, value: michaelKors },
    { id: 12, value: guess },
    { id: 13, value: noBrand },
  ];
  const sizes = [
    { id: 1, value: extraSmall },
    { id: 2, value: small },
    { id: 3, value: medium },
    { id: 4, value: large },
    { id: 5, value: extraLarge },
    { id: 6, value: xxLarge },
  ];

  const conditions = [
    { id: 1, value: newWithLabel, description: newWithLabelDescription },
    { id: 2, value: newClothes, description: newDescription },
    { id: 3, value: veryGood, description: veryGoodDescription },
    { id: 4, value: good, description: goodDescription },
    { id: 5, value: satisfactory, description: satisfactoryDescription },
  ];

  const colours = [
    {
      id: 1,
      value: blackText,
      icon: <Icon iconType="circleFilled" colorStyle="black" />,
    },
    {
      id: 2,
      value: brownText,
      icon: <Icon iconType="circleFilled" colorStyle="brown" />,
    },
    {
      id: 3,
      value: greyText,
      icon: <Icon iconType="circleFilled" colorStyle="grey" />,
    },
    {
      id: 4,
      value: beigeText,
      icon: <Icon iconType="circleFilled" colorStyle="beige" />,
    },
    {
      id: 5,
      value: pinkText,
      icon: <Icon iconType="circleFilled" colorStyle="pink" />,
    },
    {
      id: 6,
      value: purpleText,
      icon: <Icon iconType="circleFilled" colorStyle="purple" />,
    },
    {
      id: 7,
      value: redText,
      icon: <Icon iconType="circleFilled" colorStyle="red" />,
    },
    {
      id: 8,
      value: yellowText,
      icon: <Icon iconType="circleFilled" colorStyle="yellow" />,
    },
    {
      id: 9,
      value: blueText,
      icon: <Icon iconType="circleFilled" colorStyle="blue" />,
    },
    {
      id: 10,
      value: greenText,
      icon: <Icon iconType="circleFilled" colorStyle="green" />,
    },
    {
      id: 11,
      value: orangeText,
      icon: <Icon iconType="circleFilled" colorStyle="orange" />,
    },
    {
      id: 12,
      value: whiteText,
      icon: <Icon iconType="circleFilled" colorStyle="white" />,
    },
    {
      id: 13,
      value: silverText,
      icon: <Icon iconType="circleFilled" colorStyle="silver" />,
    },
    {
      id: 14,
      value: goldText,
      icon: <Icon iconType="circleFilled" colorStyle="gold" />,
    },

    {
      id: 15,
      value: khakiText,
      icon: <Icon iconType="circleFilled" colorStyle="khaki" />,
    },
    {
      id: 16,
      value: turquoiseText,
      icon: <Icon iconType="circleFilled" colorStyle="turquoise" />,
    },
    {
      id: 17,
      value: creamText,
      icon: <Icon iconType="circleFilled" colorStyle="cream" />,
    },
    {
      id: 18,
      value: apricotText,
      icon: <Icon iconType="circleFilled" colorStyle="apricot" />,
    },
    {
      id: 19,
      value: lightBlueText,
      icon: <Icon iconType="circleFilled" colorStyle="lightBlue" />,
    },
    {
      id: 20,
      value: darkGreenText,
      icon: <Icon iconType="circleFilled" colorStyle="darkGreen" />,
    },
    {
      id: 21,
      value: multiColourText,
    },
  ];

  const carouselTitles = [
    lightingText,
    backgroundText,
    noFlashText,
    manyText,
    yourPhotosText,
  ];

  const carouselImages = [
    <img src={image1Source} className="w-100" />,
    <img src={image2Source} className="w-100" />,
    <img src={image3Source} className="w-100" />,
    <img src={image4Source} className="w-100" />,
    <img src={image5Source} className="w-100" />,
  ];

  const carouselContent = [
    <Text textType="text-medium-dark">{lightingContentText}</Text>,
    <Text textType="text-medium-dark">{backgroundContentText}</Text>,
    <Text textType="text-medium-dark">{noFlashContentText}</Text>,
    <Text textType="text-medium-dark">{manyContentText}</Text>,
    <Text textType="text-medium-dark">{yourPhotosContentText}</Text>,
  ];

  const [categoryContent, setCategoryContent] = useState<string>(categoryText);
  const [brandContent, setBrandContent] = useState<string>(brandText);
  const [sizeContent, setSizeContent] = useState<string>(sizeText);
  const [conditionContent, setConditionContent] = useState<string>(
    conditionText
  );
  const [colourContent, setColourContent] = useState<string>(colourText);
  const [price, setPrice] = useState<string>();

  const { visible, setVisible, ref } = useOutsideClickHandler(false);

  const goToHomeScreen = useCallback(() => history.push(pageURLS.HOME), [
    history,
  ]);

  const openTipsModal = useCallback(() => {
    setVisible(true);
  }, [setVisible]);

  const dispatch = useDispatch();

  const onSubmit = useCallback(() => {
    dispatch(
      addClothes({
        category: categoryContent,
        brand: brandContent,
        size: sizeContent,
        condition: conditionContent,
        colour: colourContent,
      })
    );
  }, [dispatch, addClothes]);
  return {
    titleText,
    uploadPictureText,
    uploadPictureTipsText,
    clothesNameText,
    clothesNamePlaceholderText,
    descriptionText,
    descriptionPlaceholderText,
    categoryText,
    categoryPlaceholderText,
    brandText,
    brandPlaceholderText,
    conditionText,
    conditionPlaceholderText,
    priceText,
    pricePlaceholderText,
    cancelText,
    addText,
    category,
    brands,
    conditions,
    sizes,
    sizeText,
    sizePlaceholderText,
    colourText,
    colourPlaceholderText,
    goToHomeScreen,
    sizeTableText,
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
    ref,
    carouselTitles,
    carouselContent,
    carouselImages,
    price,
    setPrice,
    onSubmit,
    dispatch,
  };
};

const AddClothesScreen: FC = () => {
  const {
    titleText,
    uploadPictureText,
    uploadPictureTipsText,
    clothesNameText,
    clothesNamePlaceholderText,
    descriptionText,
    descriptionPlaceholderText,
    categoryText,
    categoryPlaceholderText,
    brandText,
    brandPlaceholderText,
    conditionText,
    conditionPlaceholderText,
    priceText,
    pricePlaceholderText,
    cancelText,
    addText,
    category,
    brands,
    conditions,
    sizes,
    sizeText,
    sizePlaceholderText,
    colourText,
    colourPlaceholderText,
    goToHomeScreen,
    sizeTableText,
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
    ref,
    carouselTitles,
    carouselContent,
    carouselImages,
    price,
    setPrice,
    onSubmit,
    dispatch,
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
              imageUploadArea={<div>{"Image upload area"}</div>}
            />
          </Card>
        }
        descriptionArea={
          <Card backgroundColorStyle="white" shadow>
            <ClothesDescriptionLayout
              name={<Text textType="text-normal-dark">{clothesNameText}</Text>}
              nameInput={
                <Input
                  placeholderText={clothesNamePlaceholderText}
                  onChange={() => {}}
                ></Input>
              }
              line={<DividerLine />}
              description={
                <Text textType="text-normal-dark">{descriptionText}</Text>
              }
              descriptionTextArea={
                <TextArea
                  placeholderText={descriptionPlaceholderText}
                ></TextArea>
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
                <>
                  <DropdownMenu
                    items={sizes}
                    content={sizeContent}
                    addValueToDropdown={true}
                    onSelectItem={(item: IDropdownValues) => {
                      setSizeContent(item.value);
                    }}
                  />
                </>
              }
              line3={<DividerLine />}
              condition={
                <Text textType="text-normal-dark">{conditionText}</Text>
              }
              conditionDropdown={
                <DropdownMenu
                  items={conditions}
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
                  placeholderText={pricePlaceholderText}
                  inputType="number"
                  inputValue={price}
                  onChange={setPrice}
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
            >
              {cancelText}
            </Button>
            <Button
              colorStyle="darkBlue"
              rounded
              buttonSize="normal"
              onClick={() => {
                dispatch(
                  addClothes({
                    category: categoryContent,
                    brand: brandContent,
                    size: sizeContent,
                    condition: conditionContent,
                    colour: colourContent,
                  })
                );
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
        ></ModalCarousel>
      }
    </>
  );
};
export default AddClothesScreen;
