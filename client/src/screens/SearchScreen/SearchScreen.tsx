import { FC, useCallback, useEffect, useState } from "react";
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
import { useHistory, useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import pageURLS from "../../resources/constants/pageURLS";
import {
  filterClothesAction,
  getClothes,
  likeClothesAction,
  searchClothesAction,
  setTriggerReload,
} from "../../redux/clothes/clothes.actions";
import { AppState } from "../../redux/store";
import Card from "../../components/Card";
import ClothesListingLayout from "../../layouts/ClothesListingLayout";
import LoadingSpinner from "../../components/LoadingSpinner";
import Icon from "../../components/Icon";
import NoSearchResultLayout from "../../layouts/NoSearchResultLayout";
import useForm from "../../hooks/useForm";

const useSearchScreen = () => {
  const { t } = useTranslation();
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const history = useHistory();
  const query = useQuery();
  const dispatch = useDispatch();
  const currencyText = t("currency.huf");
  const noSearchResult = t("searchScreen.noSearchResult");

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
  const activeFiltersText = t("searchScreen.activeFilters");

  const [showFilterModal, setShowFilterModal] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");
  const [categoryContent, setCategoryContent] = useState<string>();
  const [clothesTypeContent, setClothesTypeContent] = useState<string>();
  const [brandContent, setBrandContent] = useState<string>();
  const [sizeContent, setSizeContent] = useState<string>();
  const [conditionContent, setConditionContent] = useState<string>();
  const [colourContent, setColourContent] = useState<string>();
  const [priceFrom, setPriceFrom] = useState<string>();
  const [priceTo, setPriceTo] = useState<string>();
  const [showActiveFilters, setShowActiveFilters] = useState(false);

  const searchQuery = query.get("searchQuery");

  const { searchClothesValue, handleChange } = useForm();

  useEffect(() => {
    dispatch(getClothes());
  }, [dispatch]);

  const { clothes, isClothesLoading, likeLoading } = useSelector(
    (state: AppState) => state.clothes
  );

  const searchClothes = () => {
    if (searchClothesValue.search.trim()) {
      dispatch(searchClothesAction(searchClothesValue.search));
      history.push(`/clothes/search?searchQuery=${searchClothesValue.search}`);
    } else {
      dispatch(getClothes());
      history.push(pageURLS.SEARCH_CLOTHES);
    }
  };

  const resetFilters = () => {
    setCategoryContent(undefined);
    setClothesTypeContent(undefined);
    setBrandContent(undefined);
    setSizeContent(undefined);
    setConditionContent(undefined);
    setColourContent(undefined);
    setPriceFrom(undefined);
    setPriceTo(undefined);
    setShowActiveFilters(false);
    dispatch(getClothes());
  };

  const filterClothes = () => {
    dispatch(
      filterClothesAction({
        category: categoryContent!,
        clothingType: clothesTypeContent!,
        brand: brandContent!,
        size: sizeContent!,
        condition: conditionContent!,
        colour: colourContent!,
        price: priceFrom!,
      })
    );

    setShowFilterModal(false);
    setShowActiveFilters(true);
    //dispatch filter action
  };

  const goToShowClothesScreen = useCallback(
    (id) => history.push(pageURLS.GET_CLOTHES_BY_ID + id),
    [history]
  );

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
    activeFiltersText,
    showActiveFilters,
    setShowActiveFilters,
    searchClothes,
    clothes,
    dispatch,
    goToShowClothesScreen,
    currencyText,
    isClothesLoading,
    likeLoading,
    noSearchResult,
    filterClothes,
    resetFilters,
    searchClothesValue,
    handleChange,
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
    activeFiltersText,
    showActiveFilters,
    setShowActiveFilters,
    searchClothes,
    clothes,
    dispatch,
    goToShowClothesScreen,
    currencyText,
    isClothesLoading,
    likeLoading,
    noSearchResult,
    filterClothes,
    resetFilters,
    searchClothesValue,
    handleChange,
  } = useSearchScreen();

  return (
    <>
      <SearchLayout
        searchTitle={<Text textType="text-large-dark">{searchTitle}</Text>}
        searchField={
          <Input
            placeholderText={searchField}
            onChange={handleChange}
            inputValue={searchClothesValue.search}
            name="search"
            onEnterKeyPressed={() => {
              searchClothes();
            }}
          />
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
            onClick={() => searchClothes()}
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
            onClick={() => {
              setShowFilterModal(true);
              setShowActiveFilters(false);
            }}
          >
            {filterText}
          </Button>
        }
        activeFiltersTitle={
          showActiveFilters && (
            <Text textType="text-medium-dark">{activeFiltersText}</Text>
          )
        }
        activeFilters={
          showActiveFilters && (
            <>
              <div className="p-2">{categoryContent}</div>
              <div className="p-2">{clothesTypeContent}</div>
              <div className="p-2">{brandContent}</div>
              <div className="p-2">{sizeContent}</div>
              <div className="p-2">{conditionContent}</div>
              <div className="p-2">{colourContent}</div>
              <div className="p-2">{priceFrom}</div>
              <div className="p-2">{priceTo}</div>
            </>
          )
        }
        clothesListing={
          !isClothesLoading && clothes.length
            ? clothes.map((item) => {
                return (
                  <Card backgroundColorStyle="white" shadow key={item._id}>
                    <ClothesListingLayout
                      image={
                        <img
                          alt="homeImages"
                          src={item.selectedFile}
                          onClick={() => {
                            goToShowClothesScreen(item._id);
                            dispatch(setTriggerReload({ triggerReload: true }));
                          }}
                        />
                      }
                      price={
                        <Text textType="text-normal-dark">
                          {item.price + " " + currencyText}
                        </Text>
                      }
                      size={
                        <Text textType="text-normal-dark">{item.size}</Text>
                      }
                      brand={
                        <Text textType="text-normal-dark">{item.brand}</Text>
                      }
                      heartIcon={
                        likeLoading ? (
                          <span
                            className="spinner-border spinner-border-sm"
                            role="status"
                            aria-hidden="true"
                          />
                        ) : (
                          <>
                            {item.isLiked ? (
                              <Icon
                                iconType="heartIconFilled"
                                cursor
                                onClick={() =>
                                  dispatch(likeClothesAction(item._id!))
                                }
                              />
                            ) : (
                              <Icon
                                iconType="heartIcon"
                                cursor
                                onClick={() => {
                                  dispatch(likeClothesAction(item._id!));
                                }}
                              />
                            )}
                          </>
                        )
                      }
                    />
                  </Card>
                );
              })
            : !isClothesLoading && (
                <NoSearchResultLayout
                  noResultText={
                    <Text textType="text-normal-dark">{noSearchResult}</Text>
                  }
                  icon={<Icon iconType="clothesIcon" />}
                />
              )
        }
        loadingPlaceholder={<LoadingSpinner isLoading={isClothesLoading} />}
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
                onChange={handleChange}
                inputValue={searchClothesValue.priceFrom}
                name="priceFrom"
              />
            }
            priceTo={
              <Input
                placeholderText={"To"}
                inputType="number"
                onChange={handleChange}
                inputValue={searchClothesValue.priceTo}
                name="priceTo"
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
                onClick={() => filterClothes()}
              >
                <Text textType="text-normal-white">{filterText}</Text>
              </Button>
            }
            resetButton={
              <Button
                border="borderNone"
                buttonSize="normal"
                transparent
                onClick={() => resetFilters()}
              >
                <Text textType="text-normal-dark">{"Reset"}</Text>
              </Button>
            }
          />
        </Modal>
      }
    </>
  );
};
export default SearchScreen;
