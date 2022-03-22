import "../../styles/index.scss";
import { CreateTemplate, meta } from "storybook";
import { Tooltip as component } from "components";

export default meta({
  title: "Components/Tooltip",
  component,
});

const Template = CreateTemplate(component);

export const Tooltip = Template.bind({});
Tooltip.args = {};
