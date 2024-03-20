import { DEFAULT_AGENT_META, DEFAULT_INBOX_AVATAR } from "@/const/meta";
import { DEFAULT_AGENT_CONFIG } from "@/const/settings";
import { OpenAgentSession, OpenSessionType } from "@/types/session";
import { merge } from "@/utils/merge";

export const INBOX_SESSION_ID = "inbox";

export const DEFAULT_AGENT_LOBE_SESSION: OpenAgentSession = {
  config: DEFAULT_AGENT_CONFIG,
  createdAt: Date.now(),
  id: "",
  meta: DEFAULT_AGENT_META,
  type: OpenSessionType.Agent,
  updatedAt: Date.now(),
};

export const DEFAULT_INBOX_SESSION: OpenAgentSession = merge(
  DEFAULT_AGENT_LOBE_SESSION,
  {
    id: "inbox",
    meta: {
      avatar: DEFAULT_INBOX_AVATAR,
    },
  }
);
