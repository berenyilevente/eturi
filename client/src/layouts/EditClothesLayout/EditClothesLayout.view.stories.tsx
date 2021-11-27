import "../../styles/index.scss";
import { CreateTemplate, meta } from "../../storybook/utils";
import { EditClothesLayout as component } from "./EditClothesLayout.view";
export default meta({
  title: "Layouts/EditClohtesLayout",
  component,
});

const Template = CreateTemplate(component);

export const EditClohtesLayout = Template.bind({});
EditClohtesLayout.args = {};
