import {Route , Routes} from 'react-router-dom'
import Men from '../Pages/Men/Men'
import Women from '../Pages/Women/Women'
import Home from '../Pages/Home/Home'
import Cart from '../Pages/Cart/Cart'
import Login from '../Pages/LogIn/Login'
import Unisex from '../Pages/Unisex/Unisex'
import Favorite from '../Pages/Favorites/Favorite'
import Clickedpost from './ClickedPost/Clickedpost'

const Routing = () => {
    return(
        <Routes>
        <Route path='/' element={<Home />} />    
        <Route path='/men' element={<Men /> } />
        <Route path='/women' element={<Women />} />
        <Route path='/cart' element={<Cart/>}  />
        <Route path='/login' element={<Login />} />
        <Route path='/unisex' element={<Unisex/>} />
        <Route path='/favorite' element={<Favorite/>} />
        <Route path='/productdetail' element={<Clickedpost/>} />
        </Routes>
    )
}

export default Routing