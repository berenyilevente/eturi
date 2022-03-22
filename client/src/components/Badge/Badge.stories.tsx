import { CreateTemplate, meta } from "storybook";
import { Badge as component } from "components";

export default meta({
  title: "Components/Badge",
  component,
});

const Template = CreateTemplate(component);

export const Badge = Template.bind({});
Badge.args = {};
