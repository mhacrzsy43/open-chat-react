/* eslint-disable no-unused-vars */

// zustand 采用观察者模式，对组件进行订阅更新，
// 因此不需要在最外层提供一个类似redux的Provider包裹层
import { message } from 'antd';
import create from 'zustand';

import { getFriendList, login } from '@/api/user';

// 数据持久化，会缓存到 storage
// import { persist } from 'zustand/middleware';
// 模拟请求延迟
import { StateProps } from './type';

// 创建 store
const useStore = create<StateProps>((set, get) => ({
  user: null,
  friendList: null,
  loading: false,
  editItem: undefined,
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
  setUser: async (val: any) => {
    set({ user: val });
  },
  setLoading: (val) => set({ loading: val }),
  setEditItem: (params: any) => set({ editItem: params }),
  // 获取列表
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
}));

// 暴露单一实例 useStore
export default useStore;
