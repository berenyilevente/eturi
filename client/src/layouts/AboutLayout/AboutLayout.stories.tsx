import "../../styles/index.scss";
import { CreateTemplate, meta } from "../../storybook/utils";
import { AboutLayout as component } from "layouts";
export default meta({
  title: "Layouts/AboutLayout",
  component,
});

const Template = CreateTemplate(component);

export const AboutLayout = Template.bind({});
AboutLayout.args = {};
