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
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import pageURLS from "../../resources/constants/pageURLS";
import {
  filterClothesAction,
  getClothes,
  likeClothesAction,
  searchClothesAction,
  setLikeId,
  setTriggerReload,
} from "../../redux/clothes/clothes.actions";
import { AppState } from "../../redux/store";
import Card from "../../components/Card";
import ClothesListingLayout from "../../layouts/ClothesListingLayout";
import LoadingSpinner from "../../components/LoadingSpinner";
import Icon from "../../components/Icon";
import NoSearchResultLayout from "../../layouts/NoSearchResultLayout";
import useForm from "../../hooks/useForm";
import Badge from "../../components/Badge";

const SearchScreen: FC = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
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
  const activeFiltersText = t("searchScreen.activeFilters");

  const [showFilterModal, setShowFilterModal] = useState<boolean>(false);
  const [categoryContent, setCategoryContent] = useState<string>();
  const [clothesTypeContent, setClothesTypeContent] = useState<string>();
  const [brandContent, setBrandContent] = useState<string>();
  const [sizeContent, setSizeContent] = useState<string>();
  const [conditionContent, setConditionContent] = useState<string>();
  const [colourContent, setColourContent] = useState<string>();
  const [priceFrom, setPriceFrom] = useState<string>();
  const [priceTo, setPriceTo] = useState<string>();

  const [showActiveFilters, setShowActiveFilters] = useState(false);

  const [toggleFilter, setToggleFilter] = useState(false);

  const { searchClothesValue, handleChange } = useForm();

  useEffect(() => {
    dispatch(getClothes());
  }, [dispatch]);

  const { clothes, isClothesLoading, likeLoading, likeId } = useSelector(
    (state: AppState) => state.clothes
  );

  const searchClothes = () => {
    if (searchClothesValue.search.trim()) {
      dispatch(searchClothesAction(searchClothesValue.search));
      navigate(`/clothes/search?searchQuery=${searchClothesValue.search}`);
    } else {
      dispatch(getClothes());
      navigate(pageURLS.SEARCH_CLOTHES);
    }
  };
  const { auth, googleAuth, isUserLoggedIn } = useSelector(
    (state: AppState) => state.auth
  );

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
  };

  const goToShowClothesScreen = useCallback(
    (id) => navigate(pageURLS.GET_CLOTHES_BY_ID + id),
    [navigate]
  );

  useEffect(() => {
    filterClothes();
    setToggleFilter(false);
  }, [toggleFilter]);

  const {
    category,
    brands,
    sizes,
    conditions,
    colours,
    clothingType,
  } = useDropdownBaseData();

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
          showActiveFilters &&
          (categoryContent ||
            clothesTypeContent ||
            brandContent ||
            sizeContent ||
            conditionContent ||
            colourContent ||
            priceFrom ||
            priceTo) && (
            <Text textType="text-medium-dark">{activeFiltersText}</Text>
          )
        }
        activeFilters={
          showActiveFilters && (
            <>
              {categoryContent && (
                <Badge
                  content={categoryContent!}
                  onClick={() => {
                    setCategoryContent(undefined);
                    setToggleFilter(true);
                  }}
                />
              )}
              {clothesTypeContent && (
                <Badge
                  content={clothesTypeContent!}
                  onClick={() => {
                    setClothesTypeContent(undefined);
                    setToggleFilter(true);
                  }}
                />
              )}
              {brandContent && (
                <Badge
                  content={brandContent!}
                  onClick={() => {
                    setBrandContent(undefined);
                    setToggleFilter(true);
                  }}
                />
              )}
              {sizeContent && (
                <Badge
                  content={sizeContent!}
                  onClick={() => {
                    setSizeContent(undefined);
                    setToggleFilter(true);
                  }}
                />
              )}
              {conditionContent && (
                <Badge
                  content={conditionContent!}
                  onClick={() => {
                    setConditionContent(undefined);
                    setToggleFilter(true);
                  }}
                />
              )}
              {colourContent && (
                <Badge
                  content={colourContent!}
                  onClick={() => {
                    setColourContent(undefined);
                    setToggleFilter(true);
                  }}
                />
              )}
              {priceFrom && (
                <Badge
                  content={priceFrom!}
                  onClick={() => {
                    setPriceFrom(undefined);
                    setToggleFilter(true);
                  }}
                />
              )}
              {priceTo && (
                <Badge
                  content={priceTo!}
                  onClick={() => {
                    setPriceTo(undefined);
                    setToggleFilter(true);
                  }}
                />
              )}
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
                        auth?.result._id === item.creator ||
                        googleAuth?.result?.googleId === item.creator ? null : (
                          <>
                            {item.likes?.includes(
                              auth?.result._id! || googleAuth?.result?.googleId!
                            )
                              ? isUserLoggedIn && (
                                  <Icon
                                    iconType="heartIconFilled"
                                    cursor
                                    isLoading={
                                      item._id === likeId
                                        ? likeLoading
                                        : undefined
                                    }
                                    onClick={() => {
                                      dispatch(likeClothesAction(item._id!));
                                      dispatch(setLikeId(item._id!));
                                    }}
                                  />
                                )
                              : isUserLoggedIn && (
                                  <Icon
                                    iconType="heartIcon"
                                    cursor
                                    isLoading={
                                      item._id === likeId
                                        ? likeLoading
                                        : undefined
                                    }
                                    onClick={() => {
                                      dispatch(likeClothesAction(item._id!));
                                      dispatch(setLikeId(item._id!));
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
