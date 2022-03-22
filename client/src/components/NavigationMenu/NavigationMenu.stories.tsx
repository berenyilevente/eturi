import { CreateTemplate, meta } from "storybook";
import { NavigationMenu as component } from "components";

export default meta({
  title: "Components/NavigationMenu",
  component,
});

const Template = CreateTemplate(component);

export const NavigationMenu = Template.bind({});
NavigationMenu.args = {};
