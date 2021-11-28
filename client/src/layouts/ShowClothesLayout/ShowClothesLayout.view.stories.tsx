import "../../styles/index.scss";
import { CreateTemplate, meta } from "../../storybook/utils";
import { ShowClothesLayout as component } from "./ShowClothesLayout.view";
export default meta({
  title: "Layouts/ShowClothesLayout",
  component,
});

const Template = CreateTemplate(component);

export const ShowClothesLayout = Template.bind({});
ShowClothesLayout.args = {};
