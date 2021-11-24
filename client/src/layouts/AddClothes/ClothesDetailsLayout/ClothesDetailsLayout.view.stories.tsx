import "./style.scss";
import { CreateTemplate, meta } from "../../../storybook/utils";
import { ClothesDetailsLayout as component } from "../../../layouts/AddClothes//ClothesDetailsLayout/ClothesDetailsLayout.view";
export default meta({
  title: "Layouts/ClothesDetailsLayout",
  component,
});

const Template = CreateTemplate(component);

export const ClothesDetailsLayout = Template.bind({});
ClothesDetailsLayout.args = {};
