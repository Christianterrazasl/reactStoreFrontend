import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Products from './pages/Products/Products.jsx'
import CartPage from './pages/Cart/CartPage.jsx'
import './main.css'
import { CartProvider } from './components/CartProvider.jsx'

const router = createHashRouter([  
  { path: "/", element: <Home /> },
  { path: "/products", element: <Products /> },
  { path: "/cartPage", element: <CartPage /> }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
