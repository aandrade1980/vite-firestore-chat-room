import { useAuth } from '@/hooks/useAuth';

import './styles.css';

export function UnauthenticatedApp() {
  const { login } = useAuth();

  return (
    <>
      <h2>Log in to join a chat room!</h2>
      <div>
        <button className="login" onClick={login}>
          Login with Google
        </button>
      </div>
    </>
  );
}
