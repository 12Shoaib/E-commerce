import clickedpost from './clickedpost.module.css';
import {postClick , cartDetails} from '../../Recoil/RecoilAtom'
import { useRecoilValue , useRecoilState } from 'recoil';
import { AiFillTag } from 'react-icons/ai'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import {GrStar} from 'react-icons/gr'
import { useState , useRef } from 'react';


const Clickedpost = () => {
    let data = []
    data.push(useRecoilValue(postClick))
    const [cartData , setCartData] = useRecoilState(cartDetails)
    const [showMore, setShowMore] = useState(false)
    let cart = useRef([])


    const handleBuyButton = () => {
        alert('The order placed succesfully and it will be delivered soon')
    }
    function handleCartButton(index) {
        cart.current.push(data[index])       
        setCartData([...cart.current])
      }

    return(
        <>
        <Navbar />

        <div className={clickedpost.mainComponent}>
         {data.map((element ) => <div className={clickedpost.container}><img src={element.image} className={clickedpost.image} />
         <div className={clickedpost.contentWrapper}>
            <p className={clickedpost.text1}>{element.brandName}</p>
            <p className={clickedpost.text2}>{element.tshirt}</p>
            <p className={clickedpost.text3}>Price - $400</p>
            <p className={clickedpost.text4}>Special Price - {element.price}</p>
            <button onClick={handleBuyButton} className={clickedpost.Button}>Buy Now</button><br/>
            <button onClick={handleCartButton} className={clickedpost.Button}>Add to cart</button>
            <p><AiFillTag /> Special PriceGet at flat ₹379 T&C </p>
            <p><AiFillTag /> Bank Offer10% off on ICICI Bank Credit Cards, up to ₹300. On orders of ₹1750 and aboveT&C </p>
            <p><AiFillTag /> Bank Offer10% off on ICICI Bank Debit Cards, up to ₹300. On orders of ₹1750 and aboveT&C </p>
            <p><AiFillTag /> Bank Offer5% Cashback on Flipkart Axis Bank CardT&C</p>
            <p><AiFillTag /> Buy this Product and Get Extra ₹500 Off on Two-WheelersT&C</p>
            <div className={clickedpost.bottom}>
            <h2>Product Reviews</h2>
            <p className={clickedpost.review}>4.1 <GrStar className={clickedpost.star_Icon}/> Ratings & Reviews</p>
            <p className={clickedpost.Name}><span className={clickedpost.nameColor}><GrStar className={clickedpost.star_Icon2}/>4</span>Tom Crues
            <span className={clickedpost.description2}>Purchased Last Month</span>
            </p>
            <p className={clickedpost.description}>The product is awesome</p>
           { showMore && <div>
            <p className={clickedpost.Name}><span className={clickedpost.nameColor}><GrStar className={clickedpost.star_Icon2}/>4</span>Eliana <span className={clickedpost.description2}>Purchased Last Week</span> </p>
            <p className={clickedpost.description}>The design is really cool..!!</p>
            <p className={clickedpost.Name}><span className={clickedpost.nameColor}><GrStar className={clickedpost.star_Icon2}/>4</span>Robert <span className={clickedpost.description2}>Purchased Two Months Ago</span></p>
            <p className={clickedpost.description}>The quality is speechless</p>
            <p className={clickedpost.Name}><span className={clickedpost.nameColor}><GrStar className={clickedpost.star_Icon2}/>4</span>Jonas  <span className={clickedpost.description2}>Purchased Three Months Ago</span></p>
            <p className={clickedpost.description}>I dont liked much the product</p></div>}
            <button className={clickedpost.button} onClick={()=> setShowMore(!showMore)} >{showMore ? 'Close Reviews' : 'See More Reviews'}</button>
            </div>        
              </div>
             </div>)}
             <Footer />
        </div>
        </>
    )
}

export default Clickedpost