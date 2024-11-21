import Button from "../../components/Button"

const Register = () => {
    return (
        <div className="bg-gray-50  text-gray-950 rounded-md overflow-hidden">
            <div className="relative bg-gray-400 px-4 text-center text-3xl uppercase font-bold ">
                <h2 className="py-4">Register</h2>
            </div>

            <div className="p-8">
                <div className="mb-5 flex text-sm">
                    <label className="bg-gray-300 px-3 flex items-center" htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" className="border-b-2 outline-none p-2 w-full" />
                </div>

                <div className="mb-5 flex text-sm">
                    <label className="bg-gray-300 px-3 flex items-center" htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" className="border-b-2 outline-none p-2 w-full" />
                </div>

                <div className="mb-5 flex text-sm">
                    <label className="bg-gray-300 px-3 flex items-center" htmlFor="mobile">Mobile</label>
                    <input type="text" id="mobile" className="border-b-2 outline-none p-2 w-full" />
                </div>

                <div className="mb-5 flex text-sm">
                    <label className="bg-gray-300 px-3 flex items-center" htmlFor="email">Email</label>
                    <input type="email" id="email" className="border-b-2 outline-none p-2 w-full" />
                </div>

                <div className="mb-5 flex text-sm">
                    <label className="bg-gray-300 px-3 flex items-center" htmlFor="password">Password</label>
                    <input type="password" id="password" className="border-b-2 outline-none p-2 w-full" />
                </div>

                <div className="mb-5 flex text-sm">
                    <label className="bg-gray-300 px-3 flex items-center" htmlFor="password_confirmation">Confirm Password</label>
                    <input type="password" id="password_confirmation" className="border-b-2 outline-none p-2 w-full" />
                </div>

                <div className="text-end">
                    <Button tw='text-white bg-green-700'>Register</Button>
                </div>

            </div>
            <div className=""></div>
        </div>
    )
}

export default Register