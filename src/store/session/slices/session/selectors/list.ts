import { INBOX_SESSION_ID } from "@/const/session";
import { sessionHelpers } from "@/store/session/slices/session/helpers";
import { MetaData } from "@/types/meta";
import {
  CustomSessionGroup,
  OpenAgentSession,
  OpenSessions,
} from "@/types/session";

import { SessionStore } from "../../../store";
import { initOpenSession } from "../initialState";

const defaultSessions = (s: SessionStore): OpenSessions => s.defaultSessions;
const pinnedSessions = (s: SessionStore): OpenSessions => s.pinnedSessions;
const customSessionGroups = (s: SessionStore): CustomSessionGroup[] =>
  s.customSessionGroups;

const allSessions = (s: SessionStore): OpenSessions => s.sessions;

const searchSessions = (s: SessionStore): OpenSessions => s.searchSessions;

const getSessionById =
  (id: string) =>
  (s: SessionStore): OpenAgentSession =>
    sessionHelpers.getSessionById(id, allSessions(s));

const getSessionMetaById =
  (id: string) =>
  (s: SessionStore): MetaData => {
    const session = getSessionById(id)(s);

    if (!session) return {};
    return session.meta;
  };

const currentSession = (s: SessionStore): OpenAgentSession | undefined => {
  if (!s.activeId) return;

  return allSessions(s).find((i) => i.id === s.activeId);
};

const currentSessionSafe = (s: SessionStore): OpenAgentSession => {
  return currentSession(s) || initOpenSession;
};

const hasCustomAgents = (s: SessionStore) => defaultSessions(s).length > 0;

const isInboxSession = (s: SessionStore) => s.activeId === INBOX_SESSION_ID;

const isSessionListInit = (s: SessionStore) => s.isSessionsFirstFetchFinished;

// use to judge whether a session is fully activated
const isSomeSessionActive = (s: SessionStore) =>
  !!s.activeId && isSessionListInit(s);

export const sessionSelectors = {
  currentSession,
  currentSessionSafe,
  customSessionGroups,
  defaultSessions,
  getSessionById,
  getSessionMetaById,
  hasCustomAgents,
  isInboxSession,
  isSessionListInit,
  isSomeSessionActive,
  pinnedSessions,
  searchSessions,
};
