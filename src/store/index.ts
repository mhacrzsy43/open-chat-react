// 引入必要的库和中间件
import create from 'zustand';
import { persist } from 'zustand/middleware';
import { message } from 'antd';

// 引入API函数
import { getFriendList, login } from '@/api/user';

import { IChatItemProps } from 'react-chat-elements';
import { StateProps } from './type';

// 使用persist中间件创建store
const useStore = create<StateProps>(persist(
  // 设置函数
  (set, get) => ({
    user: null,
    friendList: null,
    loading: false,
    currChat: null,

    // 登录操作
    login: async (val) => {
      get().setLoading(true);
      const res = await login(val);
      get().setLoading(false);
      console.log('login:', res);
      if (res.code === 0) {
        set({ user: res.data });
        localStorage.setItem('token', res.data.token);
      } else {
        message.error(res.message);
      }
    },

    // 设置用户信息
    setUser: (val) => {
      set({ user: val });
    },

    // 设置加载状态
    setLoading: (val) => set({ loading: val }),

    // 获取好友列表
    getFriendList: async () => {
      get().setLoading(true);
      const res = await getFriendList();
      get().setLoading(false);
      console.log('friendList:', res);
      if (res.code === 0) {
        set({ friendList: res.rows });
      } else {
        message.error(res.message);
      }
    },

    // 设置当前聊天
    setCurrChat: (currChat: IChatItemProps) => {
      set({currChat: currChat})
    },
  }),
  {
    name: 'chat-app-store', // 在localStorage中用于保存数据的key
    getStorage: () => localStorage, // 指定使用localStorage
  }
));

export default useStore;
