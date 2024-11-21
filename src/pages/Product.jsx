
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"

import ProductCard from '../components/products/ProductCard'

import FullScreenLoading from '../components/loading/FullScreen';

import P404 from './P404'


export default function Product() {
    const [product, setProduct] = useState(null);
    const [similarProducts, setSimilarProducts] = useState([]);

    const { id } = useParams();

    // Create a callable version of the Hook
    const navigate = useNavigate();

    useEffect(() => {
        fnc_get_product();
    }, [id]);

    const fnc_get_product = async () => {

        const api = 'https://dummyjson.com/products/' + id;

        fetch(api)
            .then(res => {
                // If the product found
                if (res.status === 200) return res.json();

                // If the product not found, 
                // Navigate to page 404
                navigate('/404');
            })
            .then(data =>
                setTimeout(() => {

                    const { category } = data;

                    const api_category = 'https://dummyjson.com/products/category/' + category

                    fetch(api_category)
                        .then(res => res.json())
                        .then(cat_data => {

                            const list = cat_data.products.filter(p => p.id != data.id);


                            setSimilarProducts(list)
                        })

                    console.log('api_category', api_category)

                    setProduct(data)
                }, 500)
            )
    }

    // While Fetching product data
    if (product === null) {
        return <FullScreenLoading />
    }

    // No product Found
    if (product === false) {
        return <P404 />
    }

    // Product Found
    console.log('Component will render')

    // Price and Discount
    const discount = Math.floor(product.discountPercentage);

    const discounted_price = parseFloat((product.price - (product.price * discount / 100)).toFixed(2));
    return (
        <div>
            <h1>{product.title}</h1>


            <div key={product.id} className="mx-auto mt-11 rounded-lg bg-white dark:bg-slate-800 shadow-md">
                <img className="" src={product.thumbnail} alt="Product Image" />
                <div className="p-4">


                    {/* Category */}

                    <small className="text-xs font-bold text-orange-600">Category:</small>
                    <small className="text-xs font-bold text-gray-600"> {product.category}</small>


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
                </div>
            </div>


            <div className="my-3">
                <h2>Similar Products</h2>

                <div className="">
                    <h3 className="mb-4 text-2xl font-bold">Related Products</h3>
                    <div className="w-full p-4 mt-12 flex flex-wrap">
                        {
                            similarProducts.map((pro, i) => (
                                <ProductCard key={i} product={pro} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}