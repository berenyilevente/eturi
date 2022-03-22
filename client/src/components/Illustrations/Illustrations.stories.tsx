import { CreateTemplate, meta } from "storybook";
import { Illustrations as component } from "components";

export default meta({
  title: "Components/Illustrations",
  component,
});

const Template = CreateTemplate(component);

export const Illustrations = Template.bind({});
Illustrations.args = {};
