import "@/styles/index.scss";
import { CreateTemplate, meta } from "storybook";
import { HeaderLayout as component } from "../../layouts/HeaderLayout/HeaderLayout.view";
export default meta({
  title: "Layouts/HeaderLayout",
  component,
});

const Template = CreateTemplate(component);

export const HeaderLayout = Template.bind({});
HeaderLayout.args = {};
