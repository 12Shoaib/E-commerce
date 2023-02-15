import Dialog from '../../Components/Dialog/Dialog'
import home from './home.module.css'
import { isDialogBox , homeCarousel,searchInput, 
unfilteredItems,cartDetails,favoriteDetails, isLogin } from '../../Recoil/RecoilAtom'
import { useRecoilState, useRecoilValue } from 'recoil'
import { useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Carousel from 'better-react-carousel'
import ButtonCard from '../../Components/ButtonCard/ButtonCard'
import Footer from '../../Components/Footer/Footer'
import Card from '../../Components/Cards/Card'
import { useNavigate } from 'react-router-dom'
import Gallery from '../../Components/Carousel/Carousel'
import {AiFillHeart} from 'react-icons/ai'
import {useState , useRef} from 'react'

const Home = () => {
    const [isDialog, setIsDialog ]= useRecoilState(isDialogBox)
    const images = useRecoilValue(homeCarousel)
    const searchCapture = useRecoilValue(searchInput)
    const [details , setDetails] = useRecoilState(unfilteredItems)
    const [showSearch , setShowSearch] = useState(false)
    const navigate = useNavigate()
    const [cartData , setCartData] = useRecoilState(cartDetails)
    const [isFavorite , setIsFavorite] = useRecoilState(favoriteDetails)
    const isUserLoggedInStatus = useRecoilValue(isLogin)
    let cart = useRef([])
    let favorite = useRef([])

 useEffect(() => {
    if(!isUserLoggedInStatus){
     const dialogTimeOut = setTimeout(() => {
        setIsDialog(true)
        console.log(isDialog)
     } , 8000)
     return (()=> clearTimeout(dialogTimeOut))
    }     
    },[]);


    function closeDialog(){
        setIsDialog(false)
    }
    function unisexRedirecting(){
        navigate('/unisex')
    }
    function womenRedirecting(){
        navigate('/women')
    }
    function menRedirecting(){
        navigate('/men')
    }

    function searchValue(searchCapture , details){
        if(!searchCapture){
            return details           
        }
        return details.filter((value) => value.tshirt.includes(searchCapture))
    }
    const filteredItems = searchValue(searchCapture , details)
    function callSearch () {
        if(searchCapture.length > 0){
            setShowSearch(true)
        }
    }
    function handleCartButton(index) {
        cart.current.push(details[index])      
        setCartData([...cart.current])
      }
      function handleFavoriteButton(index){
          favorite.current.push(details[index])   
          setIsFavorite([...favorite.current]) 
      }
     
    return (
        
        <>
        {showSearch ? 
         <>
         <div className={home.navbar}>
            <Navbar />
            </div>
        <div className={home.dialogBox}>
                {isDialog &&  <Dialog onClick={closeDialog} /> }
        </div>
        <div className={home.searchResults}>
        {filteredItems.map((element , index) => <div className={home.container}><img src={element.image} className={home.image} />
            <p className={home.text1}>{element.brandName}</p>
            <p className={home.text}>{element.tshirt}</p>
            <p className={home.text2}>Price - {element.price}</p>
            <div className={home.buttonWrapper}>
            <button className={home.button} onClick={() => handleFavoriteButton(index)}><AiFillHeart className={home.heartIcon} /> </button>
            <button onClick={() => handleCartButton(index)} className={home.cartButton}>{element.cart}</button></div>
             </div>)}   
          </div>
          <Footer />
         </>
        :
        <div className={home.mainComponent}>
            <div className={home.navbar}>
            <Navbar onClick={callSearch} />
            </div>
            <div className={home.dialogBox}>
                {isDialog &&  <Dialog onClick={closeDialog} /> }
            </div>
             <div className={home.carousel}>   
                 <Carousel col={1} row={1} showDots loop >
                 {images.map((element) => <Carousel.Item><img className={home.imageCarousel}  src={element.image} /></Carousel.Item>)}
                 </Carousel>
            </div>
            <div className={home.right_Buttons}>
                <div className={home.top}>   
                     <img onClick={unisexRedirecting} className={home.button_Image} src='https://images.bewakoof.com/t320/unisex-black-solid-relaxed-jackets-aw-22-491998-1663253765-1.jpg'/><span onClick={unisexRedirecting} className={home.text}>Unisex Colthes</span>
                     <img onClick={womenRedirecting} className={home.button_Image} src='https://images.bewakoof.com/t1080/women-s-white-skinny-fit-jeans-564858-1673009336-4.jpg' /><span onClick={womenRedirecting} className={home.text}>Women Colthes</span>
                </div> 
                <div className={home.bottom}>    
                     <img onClick={womenRedirecting} className={home.button_Image} src='https://images.bewakoof.com/t1080/women-s-blue-90-s-mom-fit-jeans-567395-1672751449-5.jpg'/><span onClick={womenRedirecting} className={home.text}>Women Colthes</span>
                     <img onClick={menRedirecting} className={home.button_Image} src='https://images.bewakoof.com/t640/white-half-sleeve-t-shirt-105-1666332512-1.jpg' /><span onClick={menRedirecting} className={home.text}>Men Colthes</span>
                </div>     
            </div>
            <div className={home.card}>
            <Card />
            </div>
            <ButtonCard />
            <div className={home.carouselSection}>
            <Gallery />
            </div>
            <Footer />
        
        </div>}        
         </>
    )
}

export default Home