import { MetaData } from "@/types/meta";

export type OpenToolType = "builtin" | "customPlugin" | "plugin";

export interface OpenToolMeta {
  author?: string;
  identifier: string;
  meta: MetaData;
  type: OpenToolType;
}
