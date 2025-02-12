import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Header from './Layouts/Header'
import ProductList from './components/ProductList'
import Login from './Auth/Login'
import PrivateRouter from './Utils/PrivateRouter'
import Signup from './Auth/Signup'
import ProfileDetails from './components/ProfileDetails'
import UpdateProduct from './components/UpdateProduct'
// import Logout from './Auth/Logout'
import CreateProduct from './components/CreateProduct'
import Home from './components/Home';
import About from './components/About';

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Header/>,
      children:[
        {
          path:"/login",
          element:<Login/>,
        },
        {
          path:"/signup",
          element:<Signup/>
        },
        {
          element:<PrivateRouter/>,
          children:[
            {
              path:"/",
              element:<Home/>,
            },
           
            {
              path:"/home",
              element:<Home/>,
              
            },
            {
              path:"/about",
              element:<About/>,
             
            },
            {
              path:"/products",
              element:<ProductList/>,
            },
            {
              path:"/create",
              element:<CreateProduct/>
            },
           
            {
              path:"/profile",
              element: <ProfileDetails/>
            },
            {
              path:"/product/detail/:id",
              element:<UpdateProduct/>
            },
            
           
          ]
        }
      ]

    }
  ])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
