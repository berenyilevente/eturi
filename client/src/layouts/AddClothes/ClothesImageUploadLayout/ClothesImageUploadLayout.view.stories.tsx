import "./style.scss";
import { CreateTemplate, meta } from "../../../storybook/utils";
import { ClothesImageUploadLayout as component } from "../../../layouts/AddClothes//ClothesImageUploadLayout/ClothesImageUploadLayout.view";
export default meta({
  title: "Layouts/ClothesImageUploadLayout",
  component,
});

const Template = CreateTemplate(component);

export const ClothesImageUploadLayout = Template.bind({});
ClothesImageUploadLayout.args = {};
