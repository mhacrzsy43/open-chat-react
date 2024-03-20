import { OpenToolMeta } from "@/types/tool/tool";

import { pluginHelpers } from "../../helpers";
import type { ToolStoreState } from "../../initialState";

const isBuiltinTool = (id: string) => (s: ToolStoreState) =>
  pluginHelpers.isCustomPlugin(id, s.installedPlugins);

const metaList = (s: ToolStoreState): OpenToolMeta[] =>
  s.builtinTools.map((t) => ({
    author: "OpenHub",
    identifier: t.identifier,
    meta: t.manifest.meta,
    type: "builtin",
  }));

export const builtinToolSelectors = {
  isBuiltinTool,
  metaList,
};
