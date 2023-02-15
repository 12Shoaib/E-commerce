import cart from './cart.module.css';
import {BsFillBagXFill} from 'react-icons/bs'
import Navbar from '../../Components/Navbar/Navbar';
import {cartDetails ,postClick, logInUser} from '../../Recoil/RecoilAtom'
import { useRecoilValue , useRecoilState  } from 'recoil';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const userCart = useRecoilValue(cartDetails)    
    const navigate = useNavigate()
    const userDetails = useRecoilValue(logInUser)
    const [postClicked , setPostClick] = useRecoilState(postClick)


    const redirectingHome = () => {
        navigate('/')
    }
    function orderPlaced (){
        alert('The order placed successfully and it will be delivered soon')
    }
    function handleClick(index){
        navigate('/productdetail')
        setPostClick(userCart[index])
        }

    return (
        <div className={cart.mainComponent}>
        <Navbar />
        {userCart.length > 0  ? <> 
        {userCart.map((element , index) => <div className={cart.container}><img onClick={()=>handleClick(index)} src={element.image} className={cart.image} />
        <p className={cart.text1}>{element.brandName}</p>
            <p className={cart.text}>{element.tshirt}</p>
            <p className={cart.text2}>Price - {element.price}</p>
            <button onClick={orderPlaced} className={cart.cartButton}>CheckoutNow</button>
             </div>)}
      
             </>
        :
        <div className={cart.emptyCart}>
        <BsFillBagXFill className={cart.cartIcon} />
         <h1>{userDetails.length > 0 ? <span>{userDetails[0].name}Cart Is Empty... !!</span> : <span>Nothing In The Cart ... !!</span>}</h1>
         <button onClick={redirectingHome} className={cart.continueButton}>ContinueShopping</button>
         </div>}
        </div>
    )   
}

export default Cart