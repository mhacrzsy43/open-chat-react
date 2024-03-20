import { OpenToolCustomPlugin } from "@/types/tool/plugin";

export interface CustomPluginState {
  newCustomPlugin: Partial<OpenToolCustomPlugin>;
}
export const defaultCustomPlugin: Partial<OpenToolCustomPlugin> = {
  customParams: {
    apiMode: "simple",
    enableSettings: false,
    manifestMode: "url",
  },
  type: "customPlugin",
};

export const initialCustomPluginState: CustomPluginState = {
  newCustomPlugin: defaultCustomPlugin,
};
