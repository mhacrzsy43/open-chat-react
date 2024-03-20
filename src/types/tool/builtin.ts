import { OpenChatPluginApi, Meta } from "@open/chat-plugin-sdk";
import { ReactNode } from "react";

export interface BuiltinToolManifest {
  api: OpenChatPluginApi[];

  /**
   * Plugin name
   */
  identifier: string;
  /**
   * metadata
   * @desc Meta data of the plugin
   */
  meta: Meta;
  systemRole: string;
  /**
   * plugin runtime type
   * @default default
   */
  type?: "builtin";
}

export interface OpenBuiltinTool {
  identifier: string;
  manifest: BuiltinToolManifest;
  type: "builtin";
}

export interface BuiltinRenderProps<Result = any> {
  content: Result;
  identifier?: string;
  messageId: string;
}

export type BuiltinRender = <T = any>(
  props: BuiltinRenderProps<T>
) => ReactNode;
