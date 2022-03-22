import Icon from "../../components/Icon";
import { useTranslation } from "react-i18next";
import image1Source from "../../public/templateImages/tipsMock1.png";
import image2Source from "../../public/templateImages/tipsMock2.png";
import image3Source from "../../public/templateImages/tipsMock3.png";
import image4Source from "../../public/templateImages/tipsMock4.png";
import image5Source from "../../public/templateImages/tipsMock5.png";
import Text from "../../components/Text";
import { ReactNode } from "react";

export interface IDropdownValues {
  id: number;
  value: string;
  description?: string;
  icon?: ReactNode;
}

const useDropdownBaseData = () => {
  const { t } = useTranslation();
  //category
  const menCategoryText = t("clothes.menCategory");
  const womenCategoryText = t("clothes.womenCategory");
  const childrenCategoryText = t("clothes.childrenCategory");
  //clothingType
  const clothesText = t("clothes.clothesCategories.clothes");
  const shoesText = t("clothes.clothesCategories.shoes");
  const bagsText = t("clothes.clothesCategories.bags");
  const accessoriesText = t("clothes.clothesCategories.accessories");
  const jeans = t("clothes.clothesCategories.jeans");
  const coats = t("clothes.clothesCategories.coats");
  const topsTShirts = t("clothes.clothesCategories.topsTShirts");
  const hoodieSweater = t("clothes.clothesCategories.hoodieSweater");
  const shorts = t("clothes.clothesCategories.shorts");
  const pants = t("clothes.clothesCategories.pants");
  const underwear = t("clothes.clothesCategories.underwear");
  const swimwear = t("clothes.clothesCategories.swimwear");
  const sportsEquipment = t("clothes.clothesCategories.sportsEquipment");
  const specialClothing = t("clothes.clothesCategories.specialClothing");
  const skirts = t("clothes.clothesCategories.skirts");
  const leggings = t("clothes.clothesCategories.leggings");
  const other = t("clothes.clothesCategories.other");

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
  const converse = t("brands.converse");
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

  const category = [
    { id: 1, value: menCategoryText },
    { id: 2, value: womenCategoryText },
    { id: 3, value: childrenCategoryText },
  ];

  const clothingType = [
    { id: 1, value: clothesText },
    { id: 2, value: shoesText },
    { id: 3, value: bagsText },
    { id: 4, value: jeans },
    { id: 5, value: coats },
    { id: 6, value: topsTShirts },
    { id: 7, value: hoodieSweater },
    { id: 8, value: shorts },
    { id: 9, value: pants },
    { id: 10, value: underwear },
    { id: 11, value: swimwear },
    { id: 12, value: sportsEquipment },
    { id: 13, value: specialClothing },
    { id: 14, value: skirts },
    { id: 15, value: leggings },
    { id: 16, value: accessoriesText },
    { id: 17, value: other },
  ];

  const categories = category.concat(clothingType);

  const brands: IDropdownValues[] = [
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
    { id: 13, value: converse },
    { id: 14, value: noBrand },
  ];
  const sizes: IDropdownValues[] = [
    { id: 1, value: extraSmall },
    { id: 2, value: small },
    { id: 3, value: medium },
    { id: 4, value: large },
    { id: 5, value: extraLarge },
    { id: 6, value: xxLarge },
  ];

  const conditions: IDropdownValues[] = [
    { id: 1, value: newWithLabel, description: newWithLabelDescription },
    { id: 2, value: newClothes, description: newDescription },
    { id: 3, value: veryGood, description: veryGoodDescription },
    { id: 4, value: good, description: goodDescription },
    { id: 5, value: satisfactory, description: satisfactoryDescription },
  ];

  const colours: IDropdownValues[] = [
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
    <img src={image1Source} alt="" className="w-100" />,
    <img src={image2Source} alt="" className="w-100" />,
    <img src={image3Source} alt="" className="w-100" />,
    <img src={image4Source} alt="" className="w-100" />,
    <img src={image5Source} alt="" className="w-100" />,
  ];

  const carouselContent = [
    <Text textType="text-normal-dark">{lightingContentText}</Text>,
    <Text textType="text-normal-dark">{backgroundContentText}</Text>,
    <Text textType="text-normal-dark">{noFlashContentText}</Text>,
    <Text textType="text-normal-dark">{manyContentText}</Text>,
    <Text textType="text-normal-dark">{yourPhotosContentText}</Text>,
  ];

  return {
    categories,
    brands,
    sizes,
    conditions,
    colours,
    carouselTitles,
    carouselImages,
    carouselContent,
    category,
    clothingType,
  };
};

export default useDropdownBaseData;
