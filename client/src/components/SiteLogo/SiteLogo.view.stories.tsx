import "@/styles/index.scss";
import { CreateTemplate, meta } from "@/storybook/utils";
import { SiteLogo as component } from "@/components/SiteLogo/SiteLogo.view";

export default meta({
  title: "Components/SiteLogo",
  component,
});

const Template = CreateTemplate(component);

export const SiteLogo = Template.bind({});
SiteLogo.args = {
  logoType: "siteLogo",
};
