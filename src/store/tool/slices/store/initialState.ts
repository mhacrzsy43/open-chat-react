import { OpenChatPluginMeta } from '@open/chat-plugin-sdk';

export type PluginInstallLoadingMap = Record<string, boolean | undefined>;

export interface PluginStoreState {
  displayMode: 'grid' | 'list';
  listType: 'all' | 'installed';
  pluginInstallLoading: PluginInstallLoadingMap;
  pluginStoreList: OpenChatPluginMeta[];
}

export const initialPluginStoreState: PluginStoreState = {
  displayMode: 'grid',
  listType: 'all',
  pluginInstallLoading: {},
  pluginStoreList: [],
};
