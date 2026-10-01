import { useState } from 'react'
import './login.css'

function Login() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2>this is login page</h2>
    <section className="login">
    <div className="container">
    <input type="text" id="un" placeholder='username' />
    <input type="password" id="pw" placeholder='password' />
    <button>Login</button>
    </div>
    </section>
    </>
  );
}

export default Login
