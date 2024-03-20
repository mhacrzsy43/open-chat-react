import { ChatMessage } from "@/types/message";
import { OpenSessions, SessionGroupItem } from "@/types/session";
import { GlobalSettings } from "@/types/settings";
import { ChatTopic } from "@/types/topic";

/**
 * 导出方式
 * @enum ['agents', 'sessions', 'singleSession', 'settings', 'all']
 * @enumNames ['agents', 'sessions', 'singleSession', 'settings', 'all']
 */
export type ExportType =
  | "agents"
  | "sessions"
  | "singleSession"
  | "settings"
  | "all";

/**
 * 配置模型映射
 */
export interface ConfigModelMap {
  agents: {
    file: ConfigFileAgents;
    state: ConfigStateAgents;
  };
  all: {
    file: ConfigFileAll;
    state: ConfigStateAll;
  };
  sessions: {
    file: ConfigFileSessions;
    state: ConfigStateSessions;
  };
  settings: {
    file: ConfigFileSettings;
    state: ConfigStateSettings;
  };
  singleSession: {
    file: ConfigFileSingleSession;
    state: ConfigStateSingleSession;
  };
}

// =============   配置数据结构   ============= //

/**
 * 配置状态：会话
 */
export interface ConfigStateSessions {
  messages: ChatMessage[];
  sessionGroups: SessionGroupItem[];
  sessions: OpenSessions;
  topics: ChatTopic[];
}

/**
 * 配置状态：单个会话
 */
export interface ConfigStateSingleSession {
  messages: ChatMessage[];
  sessions: OpenSessions;
  topics: ChatTopic[];
}

/**
 * 配置状态：角色
 */
export interface ConfigStateAgents {
  sessionGroups: SessionGroupItem[];
  sessions: OpenSessions;
}

/**
 * 配置状态：设置
 */
export interface ConfigStateSettings {
  settings: GlobalSettings;
}

/**
 * 配置状态：全部
 */
export interface ConfigStateAll
  extends ConfigStateSessions,
    ConfigStateSettings {}

// =============   配置文件类型   ============= //

/**
 * 配置文件：设置
 */
export interface ConfigFileSettings {
  exportType: "settings";
  state: ConfigStateSettings;
  version: number;
}

/**
 * 配置文件：会话
 */
export interface ConfigFileSessions {
  exportType: "sessions";
  state: ConfigStateSessions;
  version: number;
}

/**
 * 配置文件：单个会话
 */
export interface ConfigFileSingleSession {
  exportType: "sessions";
  state: ConfigStateSingleSession;
  version: number;
}

/**
 * 配置文件：角色
 */
export interface ConfigFileAgents {
  exportType: "agents";
  state: ConfigStateAgents;
  version: number;
}

/**
 * 配置文件：全部
 */
export interface ConfigFileAll {
  exportType: "all";
  state: ConfigStateAll;
  version: number;
}

/**
 * 配置文件
 */
export type ConfigFile =
  | ConfigFileSettings
  | ConfigFileSessions
  | ConfigFileAll
  | ConfigFileAgents;
