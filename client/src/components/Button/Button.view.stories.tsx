import "../../styles/index.scss";
import { CreateTemplate, meta } from "../../storybook/utils";
import { Button as component } from "../../components/Button/Button.view";

export default meta({
  title: "Components/Button",
  component,
});

const Template = CreateTemplate(component);

export const Button = Template.bind({});
Button.args = {
  children: "Button",
};
