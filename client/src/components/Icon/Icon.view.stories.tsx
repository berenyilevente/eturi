import "@/styles/index.scss";
import { CreateTemplate, meta } from "@/storybook/utils";
import { Icon as component } from "@/components/Icon/Icon.view";
import { Meta } from "@storybook/react";

export default meta({
  title: "Components/Icon",
  component,
}) as Meta;

const Template = CreateTemplate(component);

export const Icon = Template.bind({});
Icon.args = {
  iconType: "alertIcon",
};
