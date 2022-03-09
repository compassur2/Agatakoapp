import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./index.css"
import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Container,} from "react-bootstrap"
import HomeScreen from "./Screens/HomeScreen"
import ProductScreen from "./Screens/ProductScreen"
import CartScreen from "./Screens/CartScreen"
import LoginScreen from "./Screens/LoginScreen"
import RegisterScreen from "./Screens/RegisterScreen"
import ProfileScreen from "./Screens/ProfileScreen"
import ShippingScreen from "./Screens/ShippingScreen"
import PaymentScreen from './Screens/PaymentScreen'
import PlaceOrderScreen from './Screens/PlaceOrderScreen'
import OrderScreen from "./Screens/OrderScreen"
import UserListScreen from "./Screens/UserListScreen"
import UserEditScreen from "./Screens/UserEditScreen"
import ProductListScreen from "./Screens/ProductListScreen"
import ProductEditScreen from "./Screens/ProductEditScreen"
import OrderListScreen from './Screens/OrderListScreen'
const App = () => {

return (

<Router>

<Header />

<main className="py-3">

<Container>
<Routes>

<Route path="/order/:id" element={<OrderScreen />}/>
<Route path="/shipping" element={<ShippingScreen />}/>
<Route path="/payment" element={<PaymentScreen />}/>
<Route path="/placeorder" element={<PlaceOrderScreen />}/>
<Route path="/login" element={<LoginScreen />}/>
<Route path="/register" element={<RegisterScreen />}/>
<Route path="/profile" element={<ProfileScreen />}/>
<Route path="/admin/userlist" element={<UserListScreen />}/>
<Route path="/admin/user/:id/edit" element={<UserEditScreen />}/>
<Route path="/admin/productlist" element={<ProductListScreen />}/>
<Route path="/admin/productlist/:pageNumber" element={<ProductListScreen />}exact/>
<Route path="/admin/product/:id/edit" element={<ProductEditScreen />}exact/>
<Route path="/admin/orderlist" element={<OrderListScreen />}/>
<Route path='/cart'>
    <Route path=':id' element={<CartScreen />} />
    <Route path='' element={<CartScreen />} /> 
    
</Route>
<Route path="/product/:id" element={<ProductScreen />} />
<Route path='/search/:keyword' element={<HomeScreen />}/>
<Route path='/page/:pageNumber' element={<HomeScreen />}/>
<Route path='/search/:keyword/page/:pageNumber' element={<HomeScreen />}/>

<Route path='/' element={<HomeScreen />}exact/>



</Routes>

</Container>

</main>

<Footer />

</Router>

)
}

export default App












