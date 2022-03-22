import { CreateTemplate, meta } from "storybook";
import { Modal as component } from "components";

export default meta({
  title: "Components/Modal",
  component,
});

const Template = CreateTemplate(component);

export const Modal = Template.bind({});
Modal.args = {
  title: "Modal title placeholder",
  children: <div>Hello im content</div>,
};
