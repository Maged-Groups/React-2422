import { useRef } from "react"

// components
import Button from "../../components/Button"

// Toast
import { toast } from 'react-toastify'

// redux
import { useDispatch } from "react-redux";
import { rdxLogin } from "../../redux/userSlice";
import { rdxShowModal } from "../../redux/settingSlice";

const Login = () => {

    const dispatch = useDispatch();

    const refUsername = useRef();
    const refPassword = useRef();

    const handle_login = () => {

        console.log(refUsername)
        console.log(refPassword)

        const username = refUsername.current.value
        const password = refPassword.current.value
        console.log(username)
        console.log(password)

        if (username == '' || password == '')
            return toast.error('Username and password are required!')

        // Login with API
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        })
            .then(res => {
                if (res.status === 400) {
                    return toast.error('Invalid credentials')
                }

                return res.json()
            })
            .then(
                data => {
                    if (data) {

                        console.log(data)
                        dispatch(rdxLogin(data));
                        dispatch(rdxShowModal(null))
                    }
                }
            )
    }


    return (
        <div className="bg-gray-50  text-gray-950 rounded-md overflow-hidden">
            <div className="relative bg-gray-400 px-4 text-center text-3xl uppercase font-bold ">
                <h2 className="py-4">Login</h2>
            </div>

            <div className="p-8">
                <div className="mb-5 flex text-sm">
                    <label className="bg-gray-300 px-3 flex items-center" htmlFor="username">Username</label>
                    <input ref={refUsername} type="text" id="username" className="border-b-2 outline-none p-2 w-full" />
                </div>

                <div className="mb-5 flex text-sm">
                    <label className="bg-gray-300 px-3 flex items-center" htmlFor="password">Password</label>
                    <input ref={refPassword} type="password" id="password" className="border-b-2 outline-none p-2 w-full" />
                </div>

                <div className="text-end">
                    <Button onClick={handle_login} tw='text-white bg-green-700'>Login</Button>
                </div>
            </div>
            <div className=""></div>
        </div>
    )
}

export default Login