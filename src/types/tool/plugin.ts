import { OpenChatPluginManifest, Meta } from "@open/chat-plugin-sdk";

import { OpenToolType } from "./tool";

export type PluginManifestMap = Record<string, OpenChatPluginManifest>;

export interface CustomPluginParams {
  apiMode?: "openapi" | "simple";
  enableSettings?: boolean;
  manifestMode?: "local" | "url";
  manifestUrl?: string;
  useProxy?: boolean;
}

export interface OpenToolCustomPlugin {
  customParams?: CustomPluginParams;
  identifier: string;
  manifest?: OpenChatPluginManifest;
  settings?: any;
  type: "customPlugin";
}

export interface InstallPluginMeta {
  author?: string;
  createdAt?: string;
  homepage?: string;
  identifier: string;
  meta?: Meta;
  type: OpenToolType;
}

export interface PluginInstallError {
  cause?: string;
  message: "noManifest" | "fetchError" | "manifestInvalid" | "urlError";
}
