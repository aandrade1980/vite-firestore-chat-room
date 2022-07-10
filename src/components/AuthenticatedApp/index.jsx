import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChatRoom } from '../ChatRoom';
import { Landing } from '../Landing';

export function AuthenticatedApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/room/:id" element={<ChatRoom />} />
      </Routes>
    </BrowserRouter>
  );
}
