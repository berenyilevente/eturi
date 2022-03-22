import { CreateTemplate, meta } from "storybook";
import { SiteLogo as component } from "components";

export default meta({
  title: "Components/SiteLogo",
  component,
});

const Template = CreateTemplate(component);

export const SiteLogo = Template.bind({});
SiteLogo.args = {
  logoType: "siteLogo",
};
