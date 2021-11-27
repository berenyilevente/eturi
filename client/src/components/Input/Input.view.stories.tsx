import "@/styles/index.scss";
import { CreateTemplate, meta } from "@/storybook/utils";
import { Input as component } from "@/components/Input/Input.view";

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
