import { OpenTool } from "@/types/tool";

export type PluginsSettings = Record<string, any>;

export interface PluginState {
  installedPlugins: OpenTool[];
  loadingInstallPlugins: boolean;
  pluginsSettings: PluginsSettings;
}

export const initialPluginState: PluginState = {
  installedPlugins: [],
  loadingInstallPlugins: true,
  pluginsSettings: {},
};
