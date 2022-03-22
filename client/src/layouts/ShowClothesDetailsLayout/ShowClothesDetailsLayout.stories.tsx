import "../../styles/index.scss";
import { CreateTemplate, meta } from "../../storybook/utils";
import { ShowClothesDetailsLayout as component } from "layouts";
export default meta({
  title: "Layouts/ShowClothesDetailsLayout",
  component,
});

const Template = CreateTemplate(component);

export const ShowClothesDetailsLayout = Template.bind({});
ShowClothesDetailsLayout.args = {};
