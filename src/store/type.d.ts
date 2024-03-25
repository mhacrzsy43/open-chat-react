import { IChatItemProps } from "react-chat-elements";

/* eslint-disable no-unused-vars */
interface InfoProps {
  userId: string;
  username: string;
  phone: string;
  desc: string;
}

interface MenuProps {
  id: string;
  path: string;
  title: string;
}

/**@name 用户权限  拥有全部权限为超级管理员 [1,2,3]  */
type RolesProps = 1 | 2 | 3;

interface UserProps {
  username: string;
  password: string;
  phone: string;
  roles: RolesProps[];
  token: string;
  userId: string;
}

// 类型声明
export type StateProps = {
  user: UserProps | null;
  friendList: any[] | null;
  currChat: IChatItemProps | null;
  setCurrChat: (currChat: IChatItemProps) => void;
  loading: boolean;
  login: (val: any) => void;
  setUser: (val: string) => void;
  setLoading: (val: boolean) => void;
  getFriendList: () => void;
};
