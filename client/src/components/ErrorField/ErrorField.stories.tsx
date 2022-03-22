import { CreateTemplate, meta } from "storybook";
import { ErrorField as component } from "components";

export default meta({
  title: "Components/ErrorField",
  component,
});

const Template = CreateTemplate(component);

export const ErrorField = Template.bind({});
ErrorField.args = {};
