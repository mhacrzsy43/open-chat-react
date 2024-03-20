import { OpenAgentConfig } from "@/types/agent";

import { BaseDataModel, MetaData } from "./meta";

export enum OpenSessionType {
  Agent = "agent",
  Group = "group",
}

export type SessionGroupId = SessionDefaultGroup | string;

export enum SessionDefaultGroup {
  Default = "default",
  Pinned = "pinned",
}

export interface SessionGroupItem {
  createdAt: number;
  id: string;
  name: string;
  sort?: number;
  updatedAt: number;
}

export type SessionGroups = SessionGroupItem[];

/**
 * Open Agent
 */
export interface OpenAgentSession extends BaseDataModel {
  config: OpenAgentConfig;
  group?: SessionGroupId;
  pinned?: boolean;
  type: OpenSessionType.Agent;
}

export interface OpenAgentSettings {
  /**
   * 语言模型角色设定
   */
  config: OpenAgentConfig;
  meta: MetaData;
}

export type OpenSessions = OpenAgentSession[];

export interface CustomSessionGroup {
  children: OpenSessions;
  id: SessionGroupId;
  name: string;
}

export interface ChatSessionList {
  all: OpenSessions;
  customGroup: CustomSessionGroup[];
  default: OpenSessions;
  pinned: OpenSessions;
}
