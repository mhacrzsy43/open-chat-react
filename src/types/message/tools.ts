import { OpenToolRenderType } from "@/types/tool";

export interface ChatPluginPayload {
  apiName: string;
  arguments: string;
  identifier: string;
  type: OpenToolRenderType;
}
