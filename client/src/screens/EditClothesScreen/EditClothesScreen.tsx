import { AppState } from "../../redux/store";
import pageURLS from "../../resources/constants/pageURLS";
import { FC, useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../../components/Card";
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
import ImageUploader from "../../components/ImageUploader";
import useForm from "../../hooks/useForm";

const EditClothesScreen: FC = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentId = id!.slice(3);
  const clothesNameText = t("clothes.clothesName");
  const descriptionText = t("clothes.description");
  const categoryText = t("clothes.category");
  const brandText = t("clothes.brand");
  const conditionText = t("clothes.condition");
  const priceText = t("clothes.price");
  const sizeText = t("clothes.size");
  const colourText = t("clothes.colour");
  const cancelText = t("general.cancel");
  const clothesNamePlaceholderText = t("clothes.clothesNamePlaceholder");
  const currencyText = t("currency.huf");
  const saveText = t("general.save");
  const deleteText = t("general.delete");
  const confirmDeleteText = t("deleteClothes.confirmationText");
  const editPhotosText = t("images.editImage");

  const showClothes = useSelector((state: AppState) =>
    currentId
      ? state.clothes.showClothes.find((item) => item._id === currentId)
      : null
  );
  const { isClothesLoading } = useSelector((state: AppState) => state.clothes);
  const { editClothesValue, handleChange } = useForm();

  useEffect(() => {
    dispatch(getClothesById(currentId));
  }, [dispatch, currentId]);

  const goToShowClothesScreen = useCallback(
    (id) => navigate(pageURLS.GET_CLOTHES_BY_ID + id),
    [navigate]
  );

  const [imageData, setImageData] = useState<any>();
  const [categoryContent, setCategoryContent] = useState<string>();
  const [clothesType, setClothesType] = useState<string>();
  const [brandContent, setBrandContent] = useState<string>();
  const [sizeContent, setSizeContent] = useState<string>();
  const [conditionContent, setConditionContent] = useState<string>();
  const [colourContent, setColourContent] = useState<string>();
  const [descriptionContent, setDescriptionContent] = useState<string>("");

  const [openModal, setOpenModal] = useState<boolean>(false);

  const goToHomeScreen = useCallback(() => navigate(pageURLS.HOME), [navigate]);

  useEffect(() => {
    setBrandContent(showClothes!.brand);
    setDescriptionContent(showClothes!.description!);
    setCategoryContent(showClothes!.category);
    setClothesType(showClothes!.clothingType!);
    setSizeContent(showClothes!.size);
    setConditionContent(showClothes!.condition);
    setColourContent(showClothes!.colour);
    setImageData(showClothes!.selectedFile);
  }, [showClothes]);

  const triggerReload = useCallback(() => {
    dispatch(setTriggerReload({ triggerReload: true }));
  }, [dispatch]);

  const isInputDataValid = () => {
    let isValid = true;
    if (
      !imageData ||
      !editClothesValue.name ||
      !descriptionContent ||
      !categoryContent ||
      !clothesType ||
      !brandContent ||
      !sizeContent ||
      !conditionContent ||
      !colourContent ||
      !editClothesValue.price
    ) {
      isValid = false;
      alert("Fill out all the fields");
    }
    return isValid;
  };

  const patchClothes = () => {
    isInputDataValid() &&
      dispatch(
        updateClothesAction(showClothes!._id!, {
          name: editClothesValue.name!,
          selectedFile: imageData!,
          description: descriptionContent!,
          category: categoryContent!,
          clothingType: clothesType!,
          brand: brandContent!,
          size: sizeContent!,
          condition: conditionContent!,
          colour: colourContent!,
          price: editClothesValue.price,
        })
      ) &&
      goToShowClothesScreen(showClothes!._id);
  };

  const {
    category,
    clothingType,
    brands,
    sizes,
    conditions,
    colours,
  } = useDropdownBaseData();

  return (
    <LoadingSpinner>
      {showClothes && (
        <Card backgroundColorStyle="white" shadow>
          <ShowClothesDetailsLayout
            imageArea={
              <>
                <img
                  src={imageData || showClothes.selectedFile}
                  alt="previewImage"
                />
                <ImageUploader
                  onImage={(image) => {
                    setImageData(image);
                  }}
                  uploadText={editPhotosText}
                />
              </>
            }
            brand={<Text textType="text-normal-dark">{brandText}</Text>}
            nameTitle={
              <Text textType="text-normal-dark">{clothesNameText}</Text>
            }
            name={
              <Input
                inputValue={editClothesValue.name}
                placeholderText={showClothes.name || clothesNamePlaceholderText}
                name="name"
                onChange={handleChange}
              />
            }
            descriptionTitle={
              <Text textType="text-normal-dark">{descriptionText}</Text>
            }
            description={
              <TextArea
                placeholderText={showClothes!.description!}
                content={descriptionContent}
                onChange={setDescriptionContent}
                size="medium"
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
            clothingType={
              <DropdownMenu
                items={clothingType}
                content={clothesType || showClothes.category}
                addValueToDropdown={true}
                onSelectItem={(item: IDropdownValues) => {
                  setClothesType(item.value);
                }}
              />
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
            colourTitle={<Text textType="text-normal-dark">{colourText}</Text>}
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
            priceTitle={<Text textType="text-normal-dark">{priceText}</Text>}
            price={
              <Input
                placeholderText={showClothes.price + " " + currencyText}
                inputType="number"
                inputValue={editClothesValue.price}
                onChange={handleChange}
                name="price"
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
                  onClick={() => {
                    goToShowClothesScreen(showClothes._id);
                    dispatch(setTriggerReload({ triggerReload: false }));
                  }}
                >
                  {cancelText}
                </Button>
                <Button
                  colorStyle="darkBlue"
                  rounded
                  buttonSize="normal"
                  border="borderNone"
                  isLoading={isClothesLoading}
                  onClick={() => {
                    patchClothes();
                    triggerReload();
                  }}
                >
                  <Text textType="text-small-white"> {saveText}</Text>
                </Button>
              </>
            }
          />
        </Card>
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
              <Text textType="text-normal-white">{deleteText}</Text>
            </Button>
          </div>
        </Modal>
      }
    </LoadingSpinner>
  );
};
export default EditClothesScreen;
