import { CreateTemplate, meta } from "storybook";
import { TextArea as component } from "components";

export default meta({
  title: "Components/TextArea",
  component,
});

const Template = CreateTemplate(component);

export const TextArea = Template.bind({});
TextArea.args = {};
