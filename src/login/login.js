import React, { useEffect, useState } from "react"
import "./login.css"

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setEror] = useState(false);
    const [loginInfo, setLoginInfo] = useState([]);
    const [selectedUser, setSelectedUser] = useState({});

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users  => {
            setLoginInfo(users)
            setSelectedUser(users[0])
        })
    })

    const handleLogin = (event) => {
        event.preventDefault();
        if(email === selectedUser.email && password === '123') {
            setIsSuccess(true)
        } else {
            setEror(true)
        }
        console.log(selectedUser);
    }

    const handleUserChange = (event) => {
        const userId = parseInt(event.target.value);
        const user = loginInfo.find(user => user.id === userId);
        setSelectedUser(user);
      };
      
    return(
        <div className="login-page">
            <div className="login-container">
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    <label htmlFor="email" className="form-label">Email</label>
                    <input 
                        id="email"
                        type="email"
                        name="email"
                        className="form-control"
                        onChange={handleEmail}
                        placeholder="please type a email"
                        required
                    />

                    <label htmlFor="password" className="form-label">Password</label>
                    <input 
                        id="password"
                        type="password"
                        className="form-control"
                        name="password"
                        onChange={handlePassword}
                        placeholder="please type a password"
                        required
                    />
                    
                    <button type="submit" className="btn-submit">Login</button>

                    {isSuccess && <div className="success-alert">Succesfully</div>}
                    {isError && <div className="error-alert">Incorrect</div>}

                </form>

                <select onChange={handleUserChange}> 
                    {loginInfo.map(user => (
                            <option 
                                key={user.id} 
                                value={user.id}>
                            {user.name}
                            </option>
                        ))
                    }
                </select>
            </div>
            <ul>
                    {loginInfo.map(loginIn => (
                        <li key={loginIn.id}>{loginIn.email}</li>
                    ))}
                </ul>
        </div>
    )
}

export default Login