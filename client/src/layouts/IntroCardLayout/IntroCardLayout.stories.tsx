import "../../styles/index.scss";
import { CreateTemplate, meta } from "../../storybook/utils";
import { IntroCardLayout as component } from "layouts";
export default meta({
  title: "Layouts/IntroCardLayout",
  component,
});

const Template = CreateTemplate(component);

export const IntroCardLayout = Template.bind({});
IntroCardLayout.args = {};
