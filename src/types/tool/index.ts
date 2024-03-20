import { OpenChatPluginManifest, OpenPluginType } from "@open/chat-plugin-sdk";

import { CustomPluginParams } from "./plugin";
import { OpenToolType } from "./tool";

export interface OpenTool {
  customParams?: CustomPluginParams;
  identifier: string;
  manifest?: OpenChatPluginManifest;
  settings?: any;
  type: OpenToolType;
}

export type OpenToolRenderType = OpenPluginType | "builtin";

export * from "./builtin";
