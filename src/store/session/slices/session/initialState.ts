import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import { DEFAULT_AGENT_META } from "@/const/meta";
import { DEFAULT_AGENT_CONFIG } from "@/const/settings";
import {
  CustomSessionGroup,
  OpenAgentSession,
  OpenSessionType,
} from "@/types/session";

export const initOpenSession: OpenAgentSession = {
  config: DEFAULT_AGENT_CONFIG,
  createdAt: Date.now(),
  id: "",
  meta: DEFAULT_AGENT_META,
  type: OpenSessionType.Agent,
  updatedAt: Date.now(),
};

export interface SessionState {
  /**
   * @title 当前活动的会话
   * @description 当前正在编辑或查看的会话
   */
  activeId: string;
  customSessionGroups: CustomSessionGroup[];
  defaultSessions: OpenAgentSession[];
  isMobile?: boolean;
  isSearching: boolean;
  isSessionsFirstFetchFinished: boolean;
  pinnedSessions: OpenAgentSession[];
  /**
   * 后续看看是否可以将 router 部分的逻辑移出去
   * @deprecated
   */
  router?: AppRouterInstance;
  searchKeywords: string;
  searchSessions: OpenAgentSession[];
  /**
   * it means defaultSessions
   */
  sessions: OpenAgentSession[];
}

export const initialSessionState: SessionState = {
  activeId: "inbox",
  customSessionGroups: [],
  defaultSessions: [],
  isMobile: false,
  isSearching: false,
  isSessionsFirstFetchFinished: false,
  pinnedSessions: [],
  searchKeywords: "",
  searchSessions: [],
  sessions: [],
};
