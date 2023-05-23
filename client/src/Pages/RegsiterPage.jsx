import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

export default function RegisterPage (){
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    async function registerUser(ev){
        ev.preventDefault();

      try {
        await axios.post('/register',{
            name,
            email,
            password
        });
        alert('Registraition Completed. Now you can log in')
      } catch (error) {
        alert('Try with other Email')
      }

    }

    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-32">
            <h1 className="text-4xl text-center mb-4">Register</h1>
            <form className="max-w-md mx-auto" onSubmit={registerUser}>
                <input className="p-2" type="text" placeholder='Enter Your Name' 
                value={name}
                onChange={ev=>setName(ev.target.value)}
                />
                <input className="p-2" type="email" placeholder='Enter Your Email'
                value={email} 
                onChange={ev=>setEmail(ev.target.value)}
                />
                <input className="p-2" type="password" placeholder='Enter Your Password'
                value={password}
                onChange={ev=>setPassword(ev.target.value)}
                />
                <button className="primary">
                    Register
                </button>
                <div className="text-center p-2 text-gray-500">
                    Already have accoutn? <Link className="text-primary" to={'/login'}>Login here</Link>
                </div>
            </form>
            </div>
        </div>
    )
}