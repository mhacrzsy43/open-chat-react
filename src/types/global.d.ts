import type { OpenCustomStylish, OpenCustomToken } from "@openhub/ui";
import "antd-style";
import { AntdToken } from "antd-style/lib/types/theme";

declare module "antd-style" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface CustomToken extends OpenCustomToken {}
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface CustomStylish extends OpenCustomStylish {}
}

declare module "styled-components" {
  export interface DefaultTheme extends AntdToken, OpenCustomToken {}
}
