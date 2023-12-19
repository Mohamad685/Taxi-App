import React, { useState, useEffect } from 'react';
import { sendRequest } from "../../request";

const ChatBox = ({ senderId, receiverId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await sendRequest({
            route: `messages/${senderId}/${receiverId}`,
          });

        setMessages(response.data.messages);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, [senderId, receiverId]);

  const sendMessage = async (content) => {
    try {
      const response = await sendRequest({
        route: "sendMessage",
        body: {
          sender_id: senderId,
          receiver_id: receiverId,
          content: content,
        },
        method: "POST",
      });

      setMessages([...messages, response.data.message]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      sendMessage(newMessage);
      setNewMessage('');
    }
  };

  return (
    <div>
      <div className="message-box">
        {messages.map(message => (
          <div key={message.id}>
            <p>{message.content}</p>
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;

