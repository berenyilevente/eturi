import "./index.scss";
import { CreateTemplate, meta } from "storybook";
import { Button as component } from "components";

export default meta({
  title: "Components/Button",
  component,
});

const Template = CreateTemplate(component);

export const Button = Template.bind({});
Button.args = {
  children: "Button",
};
