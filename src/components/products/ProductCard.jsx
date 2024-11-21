import { BsCartDash, BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { rdxAddItem, rdxRemoveItem } from "../../redux/cartSlice";

export default function ProductCard({ product }) {
    const dispatch = useDispatch();

    const { cartItems, cartIds } = useSelector(store => store.cartSlice)

    const indx = cartIds.indexOf(product.id);

    let count = 0;

    if (indx >= 0) {
        count = cartItems[indx].count;
    }



    // Price and Discount
    const discount = Math.floor(product.discountPercentage);

    const discounted_price = parseFloat((product.price - (product.price * discount / 100)).toFixed(2));

    return (
        <div key={product.id} className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
            <img className="h-48 w-full object-cover object-center" src={product.thumbnail} alt="Product Image" />
            <div className="p-4">

                {/* Title */}
                <Link to={`/products/${product.id}`}>
                    <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">{product.title}</h2>
                </Link>

                {/* Category */}

                <div className="select-none">
                    <small className="text-xs font-bold text-orange-600">Category:</small>
                    <small className="text-xs font-bold text-gray-600"> {product.category}</small>
                </div>

                {/* Description */}
                <p className="mb-2 text-base dark:text-gray-300 text-gray-700">{product.description}</p>
                {/* Price */}
                <div className="flex items-center">
                    {
                        discount > 0 ?
                            <>
                                <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">${discounted_price}</p>
                                <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">${product.price}</p>
                            </>
                            :
                            <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">${product.price}</p>
                    }
                    {
                        discount > 0 && <p className="ml-auto text-base font-medium text-green-500">{discount}% off</p>
                    }
                </div>

                {/* Cart */}
                <div className="my-4">
                    <div className="flex justify-between max-w-32 select-none">
                        <BsCartPlus color="green" className="text-2xl cursor-pointer" onClick={() => dispatch(rdxAddItem(product))} />
                        {
                            count > 0 &&
                            <>
                                <span className="text-sky-700">{count}</span>
                                <BsCartDash color="tomato" className="text-2xl cursor-pointer" onClick={() => dispatch(rdxRemoveItem(product.id))} />
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

