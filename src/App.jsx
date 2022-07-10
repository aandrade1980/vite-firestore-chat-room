import { useAuth } from '@/hooks/useAuth';
import { AuthenticatedApp, UnauthenticatedApp } from '@/components';

import './App.css';

function App() {
  const { user } = useAuth();

  return (
    <div className="container">
      <h1>💬 Chat Room</h1>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
