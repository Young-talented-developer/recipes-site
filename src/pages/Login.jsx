import './Login.css'
import { useContext, useState } from "react"
import { UserContext } from "../context/UserContext"

function Login() {
  const { setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
  
    setUser({ username }); 
    alert(`התחברת כ-${username}`)
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="שם משתמש"
        value={username}
        onChange={e => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="סיסמה"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <button type="submit">התחבר</button>
    </form>
  );
}

export default Login;
