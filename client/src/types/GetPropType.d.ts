import { PropsWithChildren } from "react";

export type GetPropsType<C> = C extends (props: infer P) => any
  ? P
  : PropsWithChildren<Record<string, unknown>>;
