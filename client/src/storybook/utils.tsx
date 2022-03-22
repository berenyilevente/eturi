import { Meta, Story } from "@storybook/react";

import { PropsWithChildren } from "react";

export type GetPropsType<C> = C extends (props: infer P) => any
  ? P
  : PropsWithChildren<Record<string, unknown>>;

export function CreateTemplate<C extends (props: any) => any>(Component: C) {
  const Template: Story<GetPropsType<C>> = (args) => <Component {...args} />;
  return Template;
}

export function meta(meta: Meta) {
  return meta;
}
