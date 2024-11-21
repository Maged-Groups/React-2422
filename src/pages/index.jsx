import { lazy, Suspense } from 'react';

// React router DOM
import { Route, Routes } from 'react-router-dom'

import FullScreenLoading from '../components/loading/FullScreen'

// Pages
import Home from './Home';

// Pages - About 
import About from './About';
import Mission from './about/Mission';
import Future from './about/Future';
import Vision from './about/Vision';

// Services
import Services from './services';

// 404
import P404 from './P404';

// Products
import Product from './Product';

// users
const Users = lazy(() => import('./users'))
const User = lazy(() => import('./users/User'))

// Products
const Products = lazy(() => import('./Products'))


function Pages() {
    return (
        <Suspense fallback={<FullScreenLoading />}>
            <Routes>
                <Route path='/' element={<Home />} />

                <Route path='/about' element={<About />} >
                    <Route path='mission' element={<Mission />} />
                    <Route path='vision' element={<Vision />} />
                    <Route path='future' element={<Future />} />
                </Route>

                <Route path='/services' element={<Services />} />

                <Route path='/products' element={<Products />} />
                <Route path='/products/:id' element={<Product />} />

                <Route path='users' element={<Users />} />
                <Route path='users/:id' element={<User />} />

                <Route path='*' element={<P404 />} />
            </Routes>
        </Suspense>
    )
}

// http://localhost:3000

export default Pages

