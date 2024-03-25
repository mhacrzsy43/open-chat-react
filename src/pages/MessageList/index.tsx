import React, { useCallback, useEffect, useRef, useState } from 'react'

import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import MessageList from '../../components/MessageList/MessageList'
import { token } from '../../utils/common'
import useStore from '@/store'
import useWebSocket, { ReadyState } from 'react-use-websocket'

let clearRef = () => {}
function MessageListExample() {
  const messageListReferance = useRef()
  const inputReferance = useRef()
  const {currChat, user} =  useStore((state) => ({ ...state }));

  const socketUrl= `ws://localhost:8081/user/sendUserMsg?userId=${user?.userId}`
  const [messageHistory, setMessageHistory] = useState<any[]>([]);
  const [text, setText] = useState('')
  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

  const getTextMessage = (message: any) => {
     const textMessage= {
      type: 'text',
      id: String(Math.random()),
      position: token() >= 1 ? 'right' : 'left',
      text: message.content,
      focus: true,
      date: +new Date(),
      dateString: 'now',
      forwarded: true,
      replyButton: true,
      removeButton: true,
      status: 'received',
      statusTitle: token() >= 5 ? 'Desktop' : 'Mobile',
      notch: true,
      copiableDate: true,
      retracted: false,
      forwardedMessageText: 'Forwarded',
      className: '',
    }
    return textMessage
  }

  useEffect(() => {
    console.log(lastMessage, "最后一条消息=====")
    if (lastMessage !== null) {
      const message : any = JSON.parse(lastMessage.data)
      const textMessage = getTextMessage(message) 
      setMessageHistory((prev) => prev.concat(textMessage));
    }
  }, [lastMessage]);


  const handleClickSendMessage = useCallback((text) => {
    if(readyState == ReadyState.OPEN){
      const message = {
        fromId: user?.userId + "",
        targetId: currChat?.id + "",
        content: text,
        type: 1
      }
      const content = JSON.stringify(message)
      sendMessage(content)
      setText('')
      const textMessage = getTextMessage(message)
      setMessageHistory((prev) => prev.concat(textMessage));
    }
  }, [readyState, user, currChat]);

  return (
    <div style={{height: '100%', position: 'relative'}}>
      <MessageList
        className='message-list'
        referance={messageListReferance}
        dataSource={messageHistory}
        lockable={true}
        downButton={true}
        downButtonBadge={10}
        sendMessagePreview={true}
      />

      <div
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          margin: '0 auto 1rem auto',
          width: '60%',
        }}
      >
        <Input
          className='rce-example-input'
          placeholder='Write your message here.'
          defaultValue=''
          multiline={true}
          maxlength={300}
          onMaxLengthExceed={() => console.log('onMaxLengthExceed')}
          referance={inputReferance}
          clear={(clear: any) => (clearRef = clear)}
          maxHeight={50}
          value={text}
          onChange={(e: any)=>setText(e.target.value)}
          onKeyPress={(e: any) => {
            if (e.shiftKey && e.charCode === 13) {
              return true
            }
            if (e.charCode === 13) {
              clearRef()
              handleClickSendMessage(text)
            }
          }}
          rightButtons={<Button text='Submit' onClick={() => handleClickSendMessage(text)} />}
        />
      </div>
    </div>
  )
}

export default MessageListExample
