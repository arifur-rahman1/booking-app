import { Link } from "react-router-dom";

export default function LoginPage (){
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-32">
            <h1 className="text-4xl text-center mb-4">Login</h1>
            <form className="max-w-md mx-auto">
                <input className="p-2" type="email" placeholder='Enter Your Email' />
                <input className="p-2" type="password" placeholder='Enter Your Password' />
                <button className="primary">
                    Login
                </button>
                <div className="text-center p-2 text-gray-500">
                    Are you new here? You can <Link className="text-primary" to={'/register'}>Register here</Link>
                </div>
            </form>
            </div>
        </div>
    )
}