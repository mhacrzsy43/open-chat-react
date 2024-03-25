import cls from './index.module.less';

import Identicon from 'identicon.js';
import loremIpsum from 'lorem-ipsum';
import React, { useEffect, useState } from 'react';

import ChatList from '../ChatList/ChatList';
import { IChatItemProps } from '../type';
import useStore from '@/store';


function ChatListExample() {
  const photo = (size: number) => {
    return new Identicon(String(Math.random()) + String(Math.random()), {
      margin: 0,
      size: size || 20,
    }).toString();
  };

  const {friendList, getFriendList, currChat, setCurrChat} =  useStore((state) => ({ ...state }));

  const [chatListAray, setChatListAray] = useState<IChatItemProps[]>([]);

  useEffect(()=>{
      getFriendList()
  },[])

  useEffect(() => {
    const friends = friendList?.map((item: any)=>{
      return {
        id: item.userId,
        name: item.name,
        avatar: `data:image/png;base64,${photo(20)}`,
        avatarFlexible: true,
        statusColor: 'lightgreen',
        statusColorType:
          Math.floor((Math.random() * 100) % 2) === 1 ? 'encircle' : undefined,
        alt: loremIpsum({ count: 2, units: 'words' }),
        title: item.name, 
        date: new Date(),
        subtitle: loremIpsum({ count: 1, units: 'sentences' }),
        unread: Math.floor((Math.random() * 10) % 3),
        muted: Math.floor((Math.random() * 10) % 2) === 1,
        showMute: Math.floor((Math.random() * 10) % 2) === 1,
        showVideoCall: Math.floor((Math.random() * 10) % 2) === 1,
      }
    })
    if(friends?.length! > 0){
      setChatListAray(friends!);
      if(!currChat?.id){
        setCurrChat(friends![0])
      }

    }
  }, [friendList]);

  return (
    <div className={cls['chat-list']}>
      <ChatList
        dataSource={chatListAray}
        onClickMute={({ ...props }) => {
          alert('come on')
          console.log(props)
        }}
        onClickVideoCall={({ ...props }) => console.log(props)}
        id={''}
        lazyLoadingImage={''}
        onDragEnter={(e: React.DragEventHandler, id: number) =>
          console.log(e, id, 'onDragEnter')
        }
        onDragLeave={(e: React.DragEventHandler, id: number) =>
          console.log(e, id, 'onDragLeave')
        }
        onDrop={(e: React.DragEventHandler, id: number) => console.log(e, id, 'onDrop')}
        onDragComponent={() => (
          <div className="on-drag-mlist">{loremIpsum({ count: 4, units: 'words' })}</div>
        )}
        onClick={({...props})=>{
          setCurrChat({...props})
        }}
      />
    </div>
  );
}

export default ChatListExample;
