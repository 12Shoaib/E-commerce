import favorite from './favorite.module.css'
import Navbar from '../../Components/Navbar/Navbar'
import { useRecoilValue , useRecoilState } from 'recoil'
import {favoriteDetails , cartDetails , } from '../../Recoil/RecoilAtom'
import { useRef } from 'react'

const Favorite = () => {
    const favorites = useRecoilValue(favoriteDetails)
    const [cartData , setCartData] = useRecoilState(cartDetails)
    let cart = useRef([])

    function handleCartButton(index) {
      cart.current.push(favorites[index])      
      setCartData([...cart.current])
    }
 

    return (
        <div className={favorite.mainComponent}>
            <Navbar />
            {favorites.map((element , index) => <div className={favorite.container}><img src={element.image} className={favorite.image} />
            <p className={favorite.text1}>{element.brandName}</p>
            <p className={favorite.text}>{element.tshirt}</p>
            <p className={favorite.text2}>Price - {element.price}</p>
            <div className={favorite.buttonWrapper}>
            <button onClick={() => handleCartButton(index)} className={favorite.cartButton}>{element.cart}</button></div>
             </div>)}        

        </div>
    )
}

export default Favorite