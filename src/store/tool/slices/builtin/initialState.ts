import { OpenBuiltinTool } from "@/types/tool";

import { builtinTools } from "../../../../tools";

export interface BuiltinToolState {
  builtinToolLoading: Record<string, boolean>;
  builtinTools: OpenBuiltinTool[];
}

export const initialBuiltinToolState: BuiltinToolState = {
  builtinToolLoading: {},
  builtinTools,
};
