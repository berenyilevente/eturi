import { CreateTemplate, meta } from "storybook";
import { ImageUploader as component } from "components";

export default meta({
  title: "Components/ImageUploader",
  component,
});

const Template = CreateTemplate(component);

export const ImageUploader = Template.bind({});
ImageUploader.args = {};
