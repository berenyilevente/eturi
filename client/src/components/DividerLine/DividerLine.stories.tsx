import { CreateTemplate, meta } from "storybook";
import { DividerLine as component } from "components";

export default meta({
  title: "Components/DividerLine",
  component,
});

const Template = CreateTemplate(component);

export const DividerLine = Template.bind({});
DividerLine.args = {};
