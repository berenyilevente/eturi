import "../../styles/index.scss";
import { CreateTemplate, meta } from "storybook";
import { LanguageSelector as component } from "components";

export default meta({
  title: "Components/LanguageSelector",
  component,
});

const Template = CreateTemplate(component);

export const LanguageSelector = Template.bind({});
LanguageSelector.args = {};
