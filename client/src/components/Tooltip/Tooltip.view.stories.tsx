import "../../styles/index.scss";
import { CreateTemplate, meta } from "@/storybook/utils";
import { Tooltip as component } from "../../components/Tooltip/Tooltip.view";

export default meta({
  title: "Components/Tooltip",
  component,
});

const Template = CreateTemplate(component);

export const Tooltip = Template.bind({});
Tooltip.args = {};
