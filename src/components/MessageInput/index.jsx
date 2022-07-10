import { useState } from 'react';

import { useAuth } from '@/hooks/useAuth';
import { sendMessage } from '@/services/firebase';

import './styles.css';

export function MessageInput({ roomId }) {
  const { user } = useAuth();
  const [value, setValue] = useState('');

  const handleChange = event => setValue(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();

    sendMessage(roomId, user, value);

    setValue('');
  };

  return (
    <form className="message-input-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a message"
        value={value}
        onChange={handleChange}
        required
        className="message-input"
        minLength={1}
      />

      <button type="submit" disabled={value < 1} className="send-message">
        Send
      </button>
    </form>
  );
}
