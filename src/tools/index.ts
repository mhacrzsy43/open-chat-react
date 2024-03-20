import { OpenBuiltinTool } from "@/types/tool";

import { DalleManifest } from "./dalle";

export const builtinTools: OpenBuiltinTool[] = [
  {
    identifier: DalleManifest.identifier,
    manifest: DalleManifest,
    type: "builtin",
  },
];
