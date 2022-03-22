import { CreateTemplate, meta } from "storybook";
import { LoadingSpinner as component } from "components";

export default meta({
  title: "Components/LoadingSpinner",
  component,
});

const Template = CreateTemplate(component);

export const LoadingSpinner = Template.bind({});
LoadingSpinner.args = {};
