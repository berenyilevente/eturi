import "@/styles/index.scss";
import { CreateTemplate, meta } from "../../storybook/utils";
import { MainLayout as component } from "layouts";

export default meta({
  title: "Layouts/MainLayout",
  component,
});

const Template = CreateTemplate(component);

export const MainLayout = Template.bind({});
MainLayout.args = {};
