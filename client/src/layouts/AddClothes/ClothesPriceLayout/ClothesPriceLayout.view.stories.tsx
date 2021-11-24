import "./style.scss";
import { CreateTemplate, meta } from "../../../storybook/utils";
import { ClothesPriceLayout as component } from "../../../layouts/AddClothes/ClothesPriceLayout/ClothesPriceLayout.view";
export default meta({
  title: "Layouts/ClothesPriceLayout",
  component,
});

const Template = CreateTemplate(component);

export const ClothesPriceLayout = Template.bind({});
ClothesPriceLayout.args = {};
