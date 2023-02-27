import { Link } from "react-router-dom";

export default function RegisterPage (){
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-32">
            <h1 className="text-4xl text-center mb-4">Register</h1>
            <form className="max-w-md mx-auto">
                <input type="text" placeholder='Enter Your Name' />
                <input type="email" placeholder='Enter Your Email' />
                <input type="password" placeholder='Enter Your Password' />
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