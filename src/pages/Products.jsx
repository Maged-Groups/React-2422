import { useState } from "react";

import ProductCard from "../components/products/ProductCard";

// Fethcing data
const api = 'https://dummyjson.com/products?limit=0&skip=0';

const { products, limit, skip, total } = await fetch(api).then(res => res.json()).then(data => data)

console.log(products)

export default function Products() {
  const [productList, setProductList] = useState(products);

  const categories = ['All'];

  products.forEach((product) => {
    const { category } = product

    const is_exists = categories.includes(category)

    if (!is_exists) categories.push(category)

  });

  categories.sort();


  const filter_by_category = e => {
    const category = e.target.value;

    if (category === 'All') return setProductList(products);

    const filtered_products = products.filter(pro => pro.category === category);

    setProductList(filtered_products);

  }


  return (
    <div>
      <h2 className="text-3xl font-bold border-l-4 border-sky-600 px-3">
        Products
      </h2>

      {/* Categories filter */}
      {/* <div className="flex flex-wrap gap-4 p-3">
        {
          categories.map((cat, i) => (
            <div key={i}>{cat}</div>
          ))
        }
      </div> */}
      <div className="p-4">
        <h2 className="mb-2 text-2xl">Filter by Catergory</h2>
        <select onChange={filter_by_category} className="w-full text-black">
          {
            categories.map((cat, i) => (
              <option key={i} value={cat}>{cat}</option>
            ))
          }
        </select>
      </div>

      {/* Products Cards */}
      <div className="flex flex-wrap gap-8">
        {
          productList.map((product, i) =>
            <ProductCard key={i} product={product} />)
        }
      </div>


    </div>
  )
}
