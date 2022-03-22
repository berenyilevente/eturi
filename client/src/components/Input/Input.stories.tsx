import { CreateTemplate, meta } from "storybook";
import { Input as component } from "components";

export default meta({
  title: "Components/Input",
  component,
});

const Template = CreateTemplate(component);

export const Input = Template.bind({});
Input.args = {
  placeholderText: "Please input something",
  errorTextValue: "provide a valid input",
};
