import { AppState } from "../../redux/store";
import pageURLS from "../../resources/constants/pageURLS";
import { FC, useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import Card from "../../components/Card";
import ShowClothesLayout from "../../layouts/ShowClothesLayout";
import ShowClothesDetailsLayout from "../../layouts/ShowClothesDetailsLayout";
import Text from "../../components/Text";
import {
  deleteClothesAction,
  getClothesById,
  setTriggerReload,
  updateClothesAction,
} from "../../redux/clothes/clothes.actions";
import LoadingSpinner from "../../components/LoadingSpinner";
import Button from "../../components/Button";
import DropdownMenu from "../../components/DropdownMenu";
import {
  IDropdownValues,
  useDropdownBaseData,
} from "../../hooks/useDropdownBaseData";
import Input from "../../components/Input";
import DividerLine from "../../components/DividerLine";
import TextArea from "../../components/TextArea";
import Modal from "../../components/Modal";

const useEditClothesScreen = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const history = useHistory();

  const currentId = id.slice(3);
  const clothesNameText = t("clothes.clothesName");
  const descriptionText = t("clothes.description");
  const categoryText = t("clothes.category");
  const brandText = t("clothes.brand");
  const conditionText = t("clothes.condition");
  const priceText = t("clothes.price");
  const sizeText = t("clothes.size");
  const colourText = t("clothes.colour");
  const cancelText = t("general.cancel");
  const editText = t("general.edit");
  const noDataText = t("general.noData");
  const clothesNamePlaceholderText = t("clothes.clothesNamePlaceholder");
  const descriptionPlaceholderText = t("clothes.descriptionPlaceholder");
  const pricePlaceholderText = t("clothes.pricePlaceholder");
  const currencyText = t("currency.huf");
  const saveText = t("general.save");
  const deleteText = t("general.delete");
  const confirmDeleteText = t("deleteClothes.confirmationText");

  const showClothes = useSelector((state: AppState) =>
    currentId
      ? state.clothes.showClothes.find((item) => item._id === currentId)
      : null
  );
  const { isClothesLoading } = useSelector((state: AppState) => state.clothes);

  useEffect(() => {
    dispatch(getClothesById(currentId));
  }, [dispatch]);

  const goToShowClothesScreen = useCallback(
    (id) => history.push(pageURLS.GET_CLOTHES_BY_ID + id),
    [history]
  );

  const [nameContent, setNameContent] = useState<string>();
  const [categoryContent, setCategoryContent] = useState<string>("");
  const [brandContent, setBrandContent] = useState<string>("");
  const [sizeContent, setSizeContent] = useState<string>("");
  const [conditionContent, setConditionContent] = useState<string>("");
  const [colourContent, setColourContent] = useState<string>("");
  const [descriptionContent, setDescriptionContent] = useState<string>("");
  const [price, setPrice] = useState<string>("");

  const [openModal, setOpenModal] = useState<boolean>(false);

  const goToHomeScreen = useCallback(() => history.push(pageURLS.HOME), [
    history,
  ]);

  const triggerReload = useCallback(() => {
    dispatch(setTriggerReload({ triggerReload: true }));
  }, [dispatch]);

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

  return {
    showClothes,
    id,
    isClothesLoading,
    cancelText,
    editText,
    clothesNameText,
    descriptionText,
    categoryText,
    brandText,
    conditionText,
    priceText,
    sizeText,
    colourText,
    noDataText,
    goToShowClothesScreen,
    currentId,
    category,
    brands,
    sizes,
    conditions,
    colours,
    carouselTitles,
    carouselImages,
    carouselContent,
    nameContent,
    setNameContent,
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
    descriptionContent,
    setDescriptionContent,
    price,
    setPrice,
    clothesNamePlaceholderText,
    descriptionPlaceholderText,
    pricePlaceholderText,
    currencyText,
    saveText,
    dispatch,
    triggerReload,
    deleteText,
    openModal,
    setOpenModal,
    confirmDeleteText,
    goToHomeScreen,
  };
};

const EditClothesScreen: FC = () => {
  const {
    showClothes,
    id,
    isClothesLoading,
    cancelText,
    editText,
    clothesNameText,
    descriptionText,
    categoryText,
    brandText,
    conditionText,
    priceText,
    sizeText,
    colourText,
    noDataText,
    goToShowClothesScreen,
    currentId,
    category,
    brands,
    sizes,
    conditions,
    colours,
    carouselTitles,
    carouselImages,
    carouselContent,
    nameContent,
    setNameContent,
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
    descriptionContent,
    setDescriptionContent,
    price,
    setPrice,
    clothesNamePlaceholderText,
    descriptionPlaceholderText,
    pricePlaceholderText,
    currencyText,
    saveText,
    dispatch,
    triggerReload,
    deleteText,
    openModal,
    setOpenModal,
    confirmDeleteText,
    goToHomeScreen,
  } = useEditClothesScreen();

  return (
    <>
      {showClothes && (
        <ShowClothesLayout
          imageArea={
            <Card backgroundColorStyle="white" shadow>
              <img src={showClothes.selectedFile} />
            </Card>
          }
          detailsArea={
            <Card backgroundColorStyle="white" shadow>
              <ShowClothesDetailsLayout
                nameTitle={
                  <Text textType="text-normal-dark">{clothesNameText}</Text>
                }
                name={
                  <Input
                    inputValue={nameContent}
                    placeholderText={
                      showClothes.name || clothesNamePlaceholderText
                    }
                    onChange={setNameContent}
                  />
                }
                descriptionTitle={
                  <Text textType="text-normal-dark">{descriptionText}</Text>
                }
                description={
                  <TextArea
                    placeholderText={descriptionPlaceholderText}
                    content={descriptionContent}
                    onChange={setDescriptionContent}
                    size="small"
                  />
                }
                line1={<DividerLine />}
                categoryTitle={
                  <Text textType="text-normal-dark">{categoryText}</Text>
                }
                category={
                  <DropdownMenu
                    items={category}
                    content={categoryContent || showClothes.category}
                    addValueToDropdown={true}
                    onSelectItem={(item: IDropdownValues) => {
                      setCategoryContent(item.value);
                    }}
                  />
                }
                editBrandTitle={
                  <Text textType="text-normal-dark">{brandText}</Text>
                }
                editBrand={
                  <DropdownMenu
                    items={brands}
                    content={brandContent || showClothes.brand}
                    addValueToDropdown={true}
                    onSelectItem={(item: IDropdownValues) => {
                      setBrandContent(item.value);
                    }}
                  />
                }
                sizeTitle={<Text textType="text-normal-dark">{sizeText}</Text>}
                size={
                  <DropdownMenu
                    items={sizes}
                    content={sizeContent || showClothes.size}
                    addValueToDropdown={true}
                    onSelectItem={(item: IDropdownValues) => {
                      setSizeContent(item.value);
                    }}
                  />
                }
                conditionTitle={
                  <Text textType="text-normal-dark">{conditionText}</Text>
                }
                condition={
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
                colourTitle={
                  <Text textType="text-normal-dark">{colourText}</Text>
                }
                colour={
                  <DropdownMenu
                    items={colours}
                    hasDescriptionRow
                    content={colourContent || showClothes.colour}
                    addValueToDropdown={true}
                    onSelectItem={(item: IDropdownValues) => {
                      setColourContent(item.value);
                    }}
                  />
                }
                line2={<DividerLine />}
                priceTitle={
                  <Text textType="text-normal-dark">{priceText}</Text>
                }
                price={
                  <Input
                    placeholderText={showClothes.price + " " + currencyText}
                    inputType="number"
                    inputValue={price}
                    onChange={setPrice}
                    required={true}
                  />
                }
                deleteButton={
                  <Button
                    colorStyle="darkBlue"
                    transparent
                    buttonTextColor="dark"
                    buttonSize="medium"
                    border="borderNone"
                    onClick={() => setOpenModal(true)}
                    hasIconLeft
                    iconType="trashIcon"
                  >
                    <Text textType="text-normal-dark">{deleteText}</Text>
                  </Button>
                }
                buttons={
                  <>
                    <Button
                      colorStyle="darkBlue"
                      transparent
                      buttonTextColor="dark"
                      buttonSize="medium"
                      border="borderNone"
                      onClick={() => goToShowClothesScreen(showClothes._id)}
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
                          updateClothesAction(showClothes._id!, {
                            name: nameContent!,
                            description: descriptionContent,
                            category: categoryContent,
                            brand: brandContent,
                            size: sizeContent,
                            condition: conditionContent,
                            colour: colourContent,
                            price: price,
                          })
                        );
                        triggerReload();
                        goToShowClothesScreen(showClothes._id);
                      }}
                    >
                      {saveText}
                    </Button>
                  </>
                }
              />
            </Card>
          }
        />
      )}
      {
        <Modal
          title={confirmDeleteText}
          showModal={openModal}
          closeModal={() => setOpenModal(false)}
          modalWidth="narrow"
        >
          <div className="d-flex justify-content-around pt-3">
            <Button
              colorStyle="darkBlue"
              transparent
              buttonTextColor="dark"
              buttonSize="medium"
              border="borderNone"
              onClick={() => setOpenModal(false)}
            >
              {cancelText}
            </Button>
            <Button
              colorStyle="darkBlue"
              rounded
              buttonSize="normal"
              border="borderNone"
              onClick={() => {
                dispatch(deleteClothesAction(showClothes!._id!));
                triggerReload();
                goToHomeScreen();
              }}
            >
              {deleteText}
            </Button>
          </div>
        </Modal>
      }
    </>
  );
};
export default EditClothesScreen;
