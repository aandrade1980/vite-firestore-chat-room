import { Link, useParams } from 'react-router-dom';

import { chatRooms } from '@/data/chatRooms';

import { MessageInput } from '../MessageInput';

import './styles.css';
import { MessageList } from '../MessageList';

export function ChatRoom() {
  const params = useParams();

  const room = chatRooms.find(room => room.id === params.id);

  if (!room) {
    // TODO: redirect to 404
  }
  return (
    <>
      <h2>{room.title}</h2>
      <div>
        <Link to="/">⬅️ Back to all rooms</Link>
      </div>
      <div className="messages-container">
        <MessageList roomId={room.id} />
        <MessageInput roomId={room.id} />
      </div>
    </>
  );
}
