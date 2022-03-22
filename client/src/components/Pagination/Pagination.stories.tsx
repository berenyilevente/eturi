import { CreateTemplate, meta } from "storybook";
import { Pagination as component } from "components";

export default meta({
  title: "Components/Pagination",
  component,
});

const Template = CreateTemplate(component);

export const Pagination = Template.bind({});
Pagination.args = {};
