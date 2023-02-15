import favorite from './favorite.module.css'
import Navbar from '../../Components/Navbar/Navbar'
import { useRecoilValue , useRecoilState } from 'recoil'
import {favoriteDetails , cartDetails , postClick } from '../../Recoil/RecoilAtom'
import { useRef } from 'react'
import {useNavigate} from 'react-router-dom'


const Favorite = () => {
    const favorites = useRecoilValue(favoriteDetails)
    const [cartData , setCartData] = useRecoilState(cartDetails)
    const [postClicked , setPostClick] = useRecoilState(postClick)
    const navigate = useNavigate()

    let cart = useRef([])

    function handleCartButton(index) {
      cart.current.push(favorites[index])      
      setCartData([...cart.current])
    }
    function handleClick(index){
        navigate('/productdetail')
        setPostClick(favorites[index])
        }
 

    return (
        <div className={favorite.mainComponent}>
            <Navbar />
           {favorites.length > 0 ? 
           <>
            {favorites.map((element , index) => <div className={favorite.container}><img onClick={()=>handleClick(index)} src={element.image} className={favorite.image} />
            <p className={favorite.text1}>{element.brandName}</p>
            <p className={favorite.text}>{element.tshirt}</p>
            <p className={favorite.text2}>Price - {element.price}</p>
            <div className={favorite.buttonWrapper}>
            <button onClick={() => handleCartButton(index)} className={favorite.cartButton}>{element.cart}</button></div>
             </div>)}        
             </> : <h2 className={favorite.heading}>No Favorite Added Yet...! </h2>}
        </div>
    )
}

export default Favorite