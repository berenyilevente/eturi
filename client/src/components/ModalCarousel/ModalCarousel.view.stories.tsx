import "../../styles/index.scss";
import { CreateTemplate, meta } from "../../storybook/utils";
import { ModalCarousel as component } from "../../components/ModalCarousel/ModalCarousel.view";

export default meta({
  title: "Components/ModalCarousel",
  component,
});

const Template = CreateTemplate(component);

export const ModalCarousel = Template.bind({});
ModalCarousel.args = {
  carouselTitle: ["Title1", "Title2"],
  carouselContent: [<div>{"Content1"}</div>, <div>{"Content2"}</div>],
};
