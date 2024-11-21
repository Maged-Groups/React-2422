// Components
import { BsCart } from "react-icons/bs"
import Button from "../components/Button"

// React router DOM
import { Link } from "react-router-dom"


// Redux
import { useDispatch, useSelector } from 'react-redux'
import { rdxShowModal } from "../redux/settingSlice"
import { rdxLogout } from "../redux/userSlice"

const TopNav = () => {
  const dispatch = useDispatch();

  const { cartItems, firstName, cartIds, image, loggedin } = useSelector(store => {
    return {
      cartItems: store.cartSlice.cartItems,
      cartIds: store.cartSlice.cartIds,
      loggedin: store.userSlice.loggedin,
      firstName: store.userSlice.user?.firstName,
      image: store.userSlice.user?.image,
    }
  });

  // count the total items (NOT) products
  let itemsCount = 0;
  cartItems.forEach(prod => itemsCount += prod.count);

  console.log(cartItems)
  console.log(cartIds)


  return (
    <nav className="bg-gray-950 p-3 flex justify-between items-start sticky top-0 z-50">
      <div>Logo</div>

      {/* Links */}
      <div className="flex flex-col md:flex-row gap-3">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/services">Services</Link>
      </div>

      {/* Icons */}

      <div className="flex gap-4">
        {/* Cart */}
        <div className="relative">
          <BsCart size={28} />
          <div className="w-6 h-6 rounded-full bg-sky-700 text-white text-xs absolute top-0 left-4 flex justify-center items-center">{itemsCount}</div>
        </div>
      </div>

      {/* Auth */}
      <div className="flex gap-3">

        {
          image && <img src={image} className="w-6 h-6 rounded-full" />
        }
        <span>Welcome {firstName}</span>

        {
          loggedin
            ? <Button title='Logout' onClick={() => dispatch(rdxLogout())} tw='px-10 text-red-700'>Logout</Button>
            : <>
              <Button title='Login' onClick={() => dispatch(rdxShowModal('login'))} tw='px-10'>Login</Button>
              <Button title='Click here to create an account' onClick={() => dispatch(rdxShowModal('register'))} id='register_btn' >Register</Button>
            </>
        }
      </div>
    </nav>
  )
}

export default TopNav