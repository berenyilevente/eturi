import "../../styles/index.scss";
import { CreateTemplate, meta } from "../../storybook/utils";
import { IntroLayout as component } from "../../layouts/IntroLayout/IntroLayout.view";
export default meta({
  title: "Layouts/IntroLayout",
  component,
});

const Template = CreateTemplate(component);

export const IntroLayout = Template.bind({});
IntroLayout.args = {};
