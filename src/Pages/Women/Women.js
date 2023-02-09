import women from './women.module.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { useRecoilValue , useRecoilState} from 'recoil'
import {womens , cartDetails , favoriteDetails} from '../../Recoil/RecoilAtom'
import {useRef} from 'react'
import {AiFillHeart} from 'react-icons/ai'


const Women = () => {
    const WomensData = useRecoilValue(womens)
    const [cartData , setCartData] = useRecoilState(cartDetails)
    const [isFavorite , setIsFavorite] = useRecoilState(favoriteDetails)
    let cart = useRef([])
    let favorite = useRef([])

    function handleCartButton(index) {
      cart.current.push(WomensData[index])      
      setCartData([...cart.current])
    }
    function handleFavoriteButton(index){
        favorite.current.push(WomensData[index])   
        setIsFavorite([...favorite.current]) 
    }


    return (
        <>
        <div className={women.mainComponent}>
            <Navbar />
            {WomensData.map((element , index) => <div className={women.container}><img src={element.image} className={women.image} />
            <p className={women.text}>{element.tshirt}</p>
            <p className={women.text1}>{element.brandName}</p>
            <p className={women.text2}>Price - {element.price}</p>
            <div className={women.buttonWrapper}>
            <button className={women.button} onClick={() => handleFavoriteButton(index)}><AiFillHeart className={women.heartIcon} /> </button>
            <button onClick={() => handleCartButton(index)} className={women.cartButton}>{element.cart}</button></div>
             </div>)}            
        </div>
        <Footer/>
        </>
    )
}

export default Women