import { useHref } from "react-router-dom";

import Button from "../components/Button"
import Counter from "../components/Counter";
import HeaderImage from "../components/header/HeaderImage";


const Header = (props) => {

  console.log(useHref())

  let bgColor = 'bg-gray-400/10';

  if (useHref() == '/products') {
    console.log('products page')
    bgColor = 'bg-sky-300/10'
  }


  return (
    <header className="h-screen flex flex-col gap-8 justify-center items-center relative">
      <p className="text-4xl font-bold uppercase">Welcome to {props.app_title}</p>

      <div className={`flex gap-3 p-5 ${bgColor}`}>
        <Button tw='bg-black border-gray-500'>Subscribe Now</Button>
        <Button tw='bg-sky-600 border-sky-900'>Register</Button>
      </div>

      <HeaderImage />



      {/* <Counter /> */}
    </header>
  )
}

export default Header