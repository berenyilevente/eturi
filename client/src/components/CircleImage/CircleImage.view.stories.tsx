import "../../styles/index.scss";
import { CreateTemplate, meta } from "../../storybook/utils";
import { CircleImage as component } from "../../components/CircleImage/CircleImage.view";
import image1Source from "../../public/templateImages/tipsMock1.png";

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
