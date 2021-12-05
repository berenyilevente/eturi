import { FC, useState } from "react";
import SearchLayout from "../../layouts/SearchLayout";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useTranslation } from "react-i18next";
import DividerLine from "../../components/DividerLine";
import Text from "../../components/Text";
import DropdownMenu from "../../components/DropdownMenu";
import Modal from "../../components/Modal";
import { useDropdownBaseData } from "../../hooks/useDropdownBaseData";
import Slider from "../../components/Slider";
import FilterClothesModalLayout from "../../layouts/FilterClothesModalLayout";

const useSearchScreen = () => {
  const { t } = useTranslation();
  const searchText = t("searchScreen.search");
  const searchTitle = t("searchScreen.searchTitle");
  const filterText = t("searchScreen.filter");
  const searchField = t("searchScreen.searchField");
  const filterModalTitle = t("searchScreen.filterModalTitle");
  const priceText = t("searchScreen.price");
  const cancelText = t("general.cancel");
  const sizeText = t("clothes.size");
  const colourText = t("clothes.colour");
  const categoryText = t("clothes.category");
  const brandText = t("clothes.brand");
  const conditionText = t("clothes.condition");
  const clothingTypeText = t("clothes.clothingType");
  const fromText = t("clothes.from");
  const toText = t("clothes.to");

  const [showFilterModal, setShowFilterModal] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");
  const [categoryContent, setCategoryContent] = useState<string>();
  const [clothesTypeContent, setClothesTypeContent] = useState<string>();
  const [brandContent, setBrandContent] = useState<string>();
  const [sizeContent, setSizeContent] = useState<string>();
  const [conditionContent, setConditionContent] = useState<string>();
  const [colourContent, setColourContent] = useState<string>();
  const [priceFrom, setPriceFrom] = useState<string>("");
  const [priceTo, setPriceTo] = useState<string>("");

  const {
    category,
    brands,
    sizes,
    conditions,
    colours,
    clothingType,
  } = useDropdownBaseData();

  return {
    searchText,
    searchTitle,
    searchField,
    filterText,
    showFilterModal,
    setShowFilterModal,
    filterModalTitle,
    category,
    brands,
    sizes,
    conditions,
    colours,
    clothingType,
    priceText,
    cancelText,
    searchInput,
    setSearchInput,
    categoryContent,
    setCategoryContent,
    clothesTypeContent,
    setClothesTypeContent,
    brandContent,
    setBrandContent,
    sizeContent,
    setSizeContent,
    conditionContent,
    setConditionContent,
    colourContent,
    setColourContent,
    priceFrom,
    setPriceFrom,
    priceTo,
    setPriceTo,
    sizeText,
    colourText,
    categoryText,
    brandText,
    conditionText,
    clothingTypeText,
    fromText,
    toText,
  };
};

const SearchScreen: FC = () => {
  const {
    searchText,
    searchTitle,
    searchField,
    filterText,
    showFilterModal,
    setShowFilterModal,
    filterModalTitle,
    category,
    brands,
    sizes,
    conditions,
    colours,
    clothingType,
    priceText,
    cancelText,
    searchInput,
    setSearchInput,
    categoryContent,
    setCategoryContent,
    clothesTypeContent,
    setClothesTypeContent,
    brandContent,
    setBrandContent,
    sizeContent,
    setSizeContent,
    conditionContent,
    setConditionContent,
    colourContent,
    setColourContent,
    priceFrom,
    setPriceFrom,
    priceTo,
    setPriceTo,
    sizeText,
    colourText,
    categoryText,
    brandText,
    conditionText,
    clothingTypeText,
    fromText,
    toText,
  } = useSearchScreen();

  return (
    <>
      <SearchLayout
        searchTitle={<Text textType="text-large-dark">{searchTitle}</Text>}
        searchField={
          <Input
            placeholderText={searchField}
            onChange={setSearchInput}
            inputValue={searchInput}
            onEnterKeyPressed={() => {
              console.log(searchInput);
            }}
          ></Input>
        }
        searchButton={
          <Button
            colorStyle="grey"
            rounded
            buttonSize="medium"
            border="borderSolid"
            transparent
            hasIconLeft
            iconType="searchIcon"
            onClick={() => console.log(searchInput)}
          >
            {searchText}
          </Button>
        }
        line={<DividerLine />}
        filterButton={
          <Button
            colorStyle="grey"
            rounded
            buttonSize="medium"
            border="borderSolid"
            transparent
            hasIconLeft
            iconType="filterIcon"
            onClick={() => setShowFilterModal(true)}
          >
            {filterText}
          </Button>
        }
      />
      {
        <Modal
          showModal={showFilterModal}
          closeModal={() => setShowFilterModal(false)}
          modalWidth="normal"
          title={filterModalTitle}
        >
          <FilterClothesModalLayout
            categoryDropDown={
              <DropdownMenu
                items={category}
                content={categoryContent || categoryText}
                addValueToDropdown={true}
                onSelectItem={(item) => {
                  setCategoryContent(item.value);
                }}
              />
            }
            clothingTypeDropDown={
              <DropdownMenu
                items={clothingType}
                content={clothesTypeContent || clothingTypeText}
                addValueToDropdown={true}
                onSelectItem={(item) => {
                  setClothesTypeContent(item.value);
                }}
              />
            }
            brandsDropDown={
              <DropdownMenu
                items={brands}
                content={brandContent || brandText}
                addValueToDropdown={true}
                onSelectItem={(item) => {
                  setBrandContent(item.value);
                }}
              />
            }
            sizesDropDown={
              <DropdownMenu
                items={sizes}
                content={sizeContent || sizeText}
                addValueToDropdown={true}
                onSelectItem={(item) => {
                  setSizeContent(item.value);
                }}
              />
            }
            conditionsDropDown={
              <DropdownMenu
                items={conditions}
                content={conditionContent || conditionText}
                addValueToDropdown={true}
                onSelectItem={(item) => {
                  setConditionContent(item.value);
                }}
              />
            }
            coloursDropDown={
              <DropdownMenu
                items={colours}
                addValueToDropdown={true}
                content={colourContent || colourText}
                onSelectItem={(item) => {
                  setColourContent(item.value);
                }}
              />
            }
            priceRangeTitle={
              <Text textType="text-normal-dark">{priceText}</Text>
            }
            priceFrom={
              <Input
                placeholderText={"From"}
                inputType="number"
                onChange={setSearchInput}
                inputValue={searchInput}
              />
            }
            priceTo={
              <Input
                placeholderText={"To"}
                inputType="number"
                onChange={setSearchInput}
                inputValue={searchInput}
              />
            }
            priceRangeSlider={
              <Slider minRange={1} maxRange={100000} hasTwoValues></Slider>
            }
            cancelButton={
              <Button
                colorStyle="darkBlue"
                border="borderNone"
                transparent
                buttonSize="normal"
                onClick={() => setShowFilterModal(false)}
              >
                <Text textType="text-normal-dark">{cancelText}</Text>
              </Button>
            }
            filterButton={
              <Button
                colorStyle="darkBlue"
                border="borderNone"
                buttonSize="normal"
                onClick={() => {}}
              >
                <Text textType="text-normal-white">{filterText}</Text>
              </Button>
            }
          />
        </Modal>
      }
    </>
  );
};
export default SearchScreen;
