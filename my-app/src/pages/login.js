import { useState, useEffect} from "react";
import { useRouter } from "next/router";
import useSWR from 'swr';
const CryptoJS = require('crypto-js');
import { parseCookies, destroyCookie } from 'nookies';



export default function Login(){
    
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();


  useEffect(() => {

        const { admin } = parseCookies();
        if (admin || admin === 'true') {
            router.push('/admin');
        }
  },[])

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const hash = CryptoJS.SHA256(password);
    const encryptedPassword = hash.toString(CryptoJS.enc.Hex);

    fetch(`${process.env.URL}/api/login`,{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: encryptedPassword,
      }),
    })
    .then((res) => {
      
      res.json().then((succeed) => {
        if (succeed) {
          router.push(`${process.env.URL}/admin`)
          console.log('resokey')
        }
        else console.log('its not okey')
      })
    })
    .catch((err) => console.log(err));
  };

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
                onChange={handleUsernameChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Şifre:</label>
              <input
                type="password"
                id="password"
                onChange={handlePasswordChange}
              />
            </div>
            <button type="submit">Giriş Yap</button>
          </form>
      </div>
    </div>
  );
};
