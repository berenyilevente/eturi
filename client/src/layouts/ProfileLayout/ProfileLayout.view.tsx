import "../../layouts/ProfileLayout/style.scss";
import { FC, ReactNode } from "react";
import { cn, CreateScopeCSS } from "../../components/utils";

const scope = CreateScopeCSS("layouts-profile-layout");
const profileContentClass = scope.and("profileContent");
const imageClass = scope.and("imageClass");
const descriptionClass = scope.and("descriptionClass");
const editButtonClass = scope.and("editButtonClass");
const lineClass = scope.and("lineClass");
const clothesTitleClass = scope.and("clothesTitleClass");
const clothesClass = scope.and("clothesClass");
const noClothesTextClass = scope.and("noClothesText");
const addClothesButtonClass = scope.and("addClothesButton");

interface Props {
  profileImage?: ReactNode;
  name?: ReactNode;
  line?: ReactNode;
  myClothesTitle?: ReactNode;
  myClothesArea?: ReactNode;
  editProfileButton?: ReactNode;
  noClothesText?: ReactNode;
  addClothesButton?: ReactNode;
}

export const ProfileLayout: FC<Props> = ({
  profileImage,
  name,
  line,
  myClothesTitle,
  myClothesArea,
  editProfileButton,
  noClothesText,
  addClothesButton,
}) => (
  <div className={scope}>
    <div className={profileContentClass}>
      <div className={imageClass}>{profileImage}</div>
      <div className={descriptionClass}>{name}</div>
      <div className={editButtonClass}>{editProfileButton}</div>
      <div className={lineClass}>{line}</div>
    </div>
    <div className={clothesTitleClass}>{myClothesTitle}</div>{" "}
    <div>{noClothesText}</div>
    <div>{addClothesButton}</div>
    <div className={clothesClass}>{myClothesArea}</div>
  </div>
);
