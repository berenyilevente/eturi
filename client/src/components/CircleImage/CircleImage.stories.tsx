import "./index.scss";
import { CreateTemplate, meta } from "../../storybook/utils";
import { CircleImage as component } from "components";

export default meta({
  title: "Components/CircleImage",
  component,
});

const Template = CreateTemplate(component);

export const CircleImage = Template.bind({});
CircleImage.args = {
  text: "image1Source",
  size: "large",
};
