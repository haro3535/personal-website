import { useState, useCallback } from "react";
import { useRouter } from "next/router";
import useSWR from 'swr';
const CryptoJS = require('crypto-js');


export default function Login(){
    
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    // Burada login işlemini yapabilirsiniz
    console.log('Username:', username);
    console.log('Password:', password);
    sendInfo(username,password,router);
    
  }, []);

  return (
    <div className="app-container">
        <div className="login-container">
          <form className="login-form" onSubmit={handleSubmit}>
            <h2>Admin Girişi</h2>
            <div className="form-group">
              <label htmlFor="username">Kullanıcı Adı:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Şifre:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <button type="submit">Giriş Yap</button>
          </form>
      </div>
    </div>
  );
};




function sendInfo(username, password,router){

    const hash = CryptoJS.SHA256(password);
    const encryptedPassword = hash.toString(CryptoJS.enc.Hex);

    fetch('/api/login',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: encryptedPassword,
      }),
    })
    .then((res) => {
      if(res.ok) router.push('/')
    })
    .catch((err) => console.log(err));
}