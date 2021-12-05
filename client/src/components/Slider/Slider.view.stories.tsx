import "../../styles/index.scss";
import { CreateTemplate, meta } from "../../storybook/utils";
import { Slider as component } from "../../components/Slider/Slider.view";

export default meta({
  title: "Components/Slider",
  component,
});

const Template = CreateTemplate(component);

export const Slider = Template.bind({});
Slider.args = {
  minRange: 1,
  maxRange: 100,
};
