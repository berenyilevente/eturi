import "./style.scss";
import { CreateTemplate, meta } from "../../../storybook/utils";
import { AddClothesLayout as component } from "layouts";
export default meta({
  title: "Layouts/AddClothesLayout",
  component,
});

const Template = CreateTemplate(component);

export const AddClothesLayout = Template.bind({});
AddClothesLayout.args = {};
