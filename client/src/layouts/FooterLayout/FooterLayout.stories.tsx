import "@/styles/index.scss";
import { CreateTemplate, meta } from "storybook";
import { FooterLayout as component } from "layouts";
export default meta({
  title: "Layouts/FooterLayout",
  component,
});

const Template = CreateTemplate(component);

export const FooterLayout = Template.bind({});
FooterLayout.args = {};
