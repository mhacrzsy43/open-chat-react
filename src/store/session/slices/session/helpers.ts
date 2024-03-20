import { OpenAgentSession, OpenSessions } from "@/types/session";

import { initOpenSession } from "./initialState";

export const getSessionPinned = (session: OpenAgentSession) => session.pinned;

const getSessionById = (
  id: string,
  sessions: OpenSessions
): OpenAgentSession => {
  const session = sessions.find((s) => s.id === id);

  if (!session) return initOpenSession;

  return session;
};

export const sessionHelpers = {
  getSessionById,
  getSessionPinned,
};
