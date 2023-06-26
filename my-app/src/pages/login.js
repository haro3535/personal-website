import { useState, useEffect} from "react";
import { useRouter } from "next/router";
import useSWR from 'swr';
const CryptoJS = require('crypto-js');


export default function Login({ admin }){
    
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (admin !== undefined) {
      const parsedInfo = JSON.parse(admin);
      if (parsedInfo.isLogged == true) {
        router.push('http://localhost:3000/admin')
      }
    }
})

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

    fetch('/api/login',{
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
          router.push('http://localhost:3000/admin')
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



export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/check');
  const admin = await res.json();

  return{
      props: {
          admin: admin,
      },
  }
}