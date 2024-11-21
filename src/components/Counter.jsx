// React
import { useState } from 'react'

// Components
import Button from './Button'

// Icons
import { FaArrowRotateRight } from "react-icons/fa6";


const Counter = () => {

    let [counter, setCounter] = useState(0);

    // const update = (n) => {

    //     n === 0 ? setCounter(0) : setCounter(counter + n)
    // }

    const nums = [5, 10, 15, 20, 30];

    return (
        <div className="flex gap-10">

            {/* Increase Buttons */}
            <div className="flex flex-col gap-4">
                {
                    nums.map((num) =>
                        <button onClick={() => setCounter(counter + num)} className='px-5 border-2 py-2 rounded-xl shadow-md  cursor-pointer hover:brightness-50 bg-green-600 text-green-950 text-3xl'>
                            + {num}
                        </button>
                    )
                }
            </div>

            {/* Main Buttons and Counter */}
            <div className='flex flex-col gap-8 py-3 justify-center items-center'>
                <div className='flex gap-8 py-3 justify-center items-center'>
                    <button onClick={() => setCounter(counter + 1)} className='px-5 border-2 py-2 rounded-xl shadow-md  cursor-pointer hover:brightness-50 bg-green-600 text-green-950 text-3xl'>+</button>
                    <span className='text-3xl'>{counter}</span>
                    <button onClick={() => setCounter(counter - 1)} className='px-5 border-2 py-2 rounded-xl shadow-md cursor-pointer hover:brightness-50 bg-red-600 text-red-950 text-3xl'>-</button>
                </div>
                <button onClick={() => setCounter(0)} className='px-5 border-2 py-2 rounded-xl shadow-md cursor-pointer hover:brightness-50 bg-sky-600 text-sky-950 text-3xl'>
                    <FaArrowRotateRight size={50} color='#fff' className='rotate-90 hover:rotate-180 transition-all ' />
                </button>
            </div>

            {/* Decreasae Buttons */}
            <div className="flex flex-col gap-4">
                {
                    nums.map((num) =>
                        <button onClick={() => setCounter(counter - num)} className='px-5 border-2 py-2 rounded-xl shadow-md  cursor-pointer hover:brightness-50 bg-red-600 text-red-950 text-3xl'>
                            - {num}
                        </button>
                    )
                }
            </div>
        </div>
    )
}


export default Counter
