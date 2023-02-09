import men from './men.module.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { useRecoilValue , useRecoilState} from 'recoil'
import {mens , cartDetails , favoriteDetails} from '../../Recoil/RecoilAtom'
import {useRef} from 'react'
import {AiFillHeart} from 'react-icons/ai'


const Men = () => {
    const MensData = useRecoilValue(mens)
    const [cartData , setCartData] = useRecoilState(cartDetails)
    const [isFavorite , setIsFavorite] = useRecoilState(favoriteDetails)
    let cart = useRef([])
    let favorite = useRef([])

    function handleCartButton(index) {
      cart.current.push(MensData[index])      
      setCartData([...cart.current])
    }
    function handleFavoriteButton(index){
        favorite.current.push(MensData[index])   
        setIsFavorite([...favorite.current]) 
    }

  
    return(
        <>
        <div className={men.mainComponent}>
            <Navbar />
            {MensData.map((element , index) => <div className={men.container}><img src={element.image} className={men.image} />
            <p className={men.text1}>{element.brandName}</p>
            <p className={men.text}>{element.tshirt}</p>
            <p className={men.text2}>Price - {element.price}</p>
            <div className={men.buttonWrapper}>
            <button className={men.button} onClick={() => handleFavoriteButton(index)}><AiFillHeart className={men.heartIcon} /> </button>
            <button onClick={() => handleCartButton(index)} className={men.cartButton}>{element.cart}</button></div>
             </div>)}        
        </div>
            <Footer />
            </>
    )
}

export default Men