import "../../styles/index.scss";
import { CreateTemplate, meta } from "../../storybook/utils";
import { NoSearchResultLayout as component } from "layouts";
export default meta({
  title: "Layouts/NoSearchResultLayout",
  component,
});

const Template = CreateTemplate(component);

export const NoSearchResultLayout = Template.bind({});
NoSearchResultLayout.args = {};
