import "../../styles/index.scss";
import { CreateTemplate, meta } from "storybook";
import { Link as component } from "components";

export default meta({
  title: "Components/Link",
  component,
});

const Template = CreateTemplate(component);

export const Link = Template.bind({});
Link.args = {};
