import "../../styles/index.scss";
import { CreateTemplate, meta } from "../../storybook/utils";
import { HomeContentLayout as component } from "layouts";
export default meta({
  title: "Layouts/HomeContentLayout",
  component,
});

const Template = CreateTemplate(component);

export const HomeContentLayout = Template.bind({});
HomeContentLayout.args = {};
