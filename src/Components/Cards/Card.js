import card from './card.module.css'
import {unfilteredItems, postClick,men ,women, cartDetails ,favoriteDetails } from '../../Recoil/RecoilAtom'
import {useRecoilState, useRecoilValue  } from 'recoil'
import {useRef} from 'react'
import {AiOutlineHeart , AiFillHeart} from 'react-icons/ai'
import Men from '../../Pages/Men/Men'
import {useNavigate} from 'react-router-dom'


const Card = () => {
    const Items = useRecoilValue(unfilteredItems)
    const [cartData , setCartData] = useRecoilState(cartDetails)
    const [isFavorite , setIsFavorite] = useRecoilState(favoriteDetails)
    const [postClicked , setPostClick] = useRecoilState(postClick)
    const navigate = useNavigate()
    let cart = useRef([])
    let favorite = useRef([])

    function handleCartButton(index) {
      cart.current.push(Items[index])       
      setCartData([...cart.current])
    } 
    function handleFavoriteButton(index){
        favorite.current.push(Items[index])   
        setIsFavorite([...favorite.current]) 
    }
    function handleClick(index){
      navigate('/productdetail')
      setPostClick(Items[index])
      }
    return(
        <div className={card.mainComponent}>
            {Items.map((element , index) => <div className={card.container}><img onClick={()=>handleClick(index)} src={element.image} className={card.image} />
            <p className={card.text1}>{element.brandName}</p>
            <p className={card.text}>{element.tshirt}</p>
            <p className={card.text2}>Price - {element.price}</p>
            <div className={card.buttonWrapper}>
            <button className={card.button} onClick={() => handleFavoriteButton(index)}> <AiFillHeart className={card.heartIcon} /> </button>
            <button onClick={() => handleCartButton(index)} className={card.cartButton}>{element.cart}</button></div>
             </div>)}
        </div>
    )
}

export default Card