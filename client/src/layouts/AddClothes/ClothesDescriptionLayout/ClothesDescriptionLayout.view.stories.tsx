import "./style.scss";
import { CreateTemplate, meta } from "../../../storybook/utils";
import { ClothesDescriptionLayout as component } from "../../../layouts/AddClothes//ClothesDescriptionLayout/ClothesDescriptionLayout.view";
export default meta({
  title: "Layouts/ClothesDescriptionLayout",
  component,
});

const Template = CreateTemplate(component);

export const ClothesDescriptionLayout = Template.bind({});
ClothesDescriptionLayout.args = {};
