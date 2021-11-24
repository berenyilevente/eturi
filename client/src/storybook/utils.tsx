import { Meta, Story } from "@storybook/react";
import { GetPropsType } from "@/types/GetPropType";

export function CreateTemplate<C extends (props: any) => any>(Component: C) {
  const Template: Story<GetPropsType<C>> = (args) => <Component {...args} />;
  return Template;
}

export function meta(meta: Meta) {
  return meta;
}
