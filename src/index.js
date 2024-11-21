import { createRoot } from 'react-dom/client'

// CSS
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

// Components
import App from './App';

// React Router DOM
import { BrowserRouter } from 'react-router-dom'


// Redux

import { Provider } from 'react-redux';
import store from './redux';

const root = createRoot(document.querySelector('#root'));

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)