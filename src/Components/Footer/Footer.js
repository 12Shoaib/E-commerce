import footer from './footer.module.css'
import {IoLogoYoutube} from 'react-icons/io'
import {AiFillTwitterSquare} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {GiReturnArrow} from 'react-icons/gi'
import {HiCurrencyRupee} from 'react-icons/hi'
import {BsCreditCard} from 'react-icons/bs'
import {useState} from 'react'
import {subsriptionDetails} from '../../Recoil/RecoilAtom'
import {useRecoilState} from 'recoil'


const Footer = () => {
  const [inputCapture , setInputCapture] = useState('')
  const [alert , setAlert ] = useState('')
  const [data , setData] = useRecoilState(subsriptionDetails)
  
  function handleSubscribeButton() {
    if(inputCapture === ''){
      window.alert('Field cannot be empty')
    }
    else if(data === inputCapture){
      setAlert("Already Subsribed")

    } else{
    setAlert("Subscription Successfull")
    setData(inputCapture)

    }
  }
    return(
        <div className={footer.mainComponent}>
          <div className={footer.leftSection}>
            <h3>Company</h3>
            <div className={footer.content}>
              <span>About Us</span>  
              <span>We're Hiring</span>  
              <span>Terms & Conditions</span>  
              <span>Privacy Policy</span>  
              <span>Blog </span>
              </div>
              <div className={footer.bottom} />              
              <h4>Keep upto Date</h4>
              <input onChange={(e) =>setInputCapture(e.target.value)} placeholder='@Email Adress' className={footer.inputBox}/>
              <button onClick={handleSubscribeButton} className={footer.subscribeButton}>Subscribe</button>
                <p>{alert}</p>
          </div> 
          <div className={footer.middleSection}>
          <h3>Connect With Us</h3>
            <div className={footer.content}>
              <a className={footer.links}href='https://www.youtube.com/'><IoLogoYoutube className={footer.icons}/> Youtube</a>  
              <a className={footer.links}href='https://twitter.com/'><AiFillTwitterSquare className={footer.icons}/>Twitter</a>  
              <a className={footer.links}href='https://in.linkedin.com/'><AiFillLinkedin className={footer.icons}/>Linkdin</a>  
              <a className={footer.links}href='https://www.instagram.com/'><BsInstagram className={footer.icons} />Instagram</a>  
              <a className={footer.links}href='https://www.facebook.com/'><AiFillFacebook className={footer.icons}/>Facebook </a>
              </div>
              <div className={footer.bottom} />
              <h4>Download the app</h4>
             <a href='https://play.google.com/store/apps' ><img className={footer.imageDownloads} src = 'https://images.bewakoof.com/web/app_android_v1.png' /></a>
             <a href='https://apps.apple.com/in/app' ><img className={footer.imageDownloads} src = 'https://images.bewakoof.com/web/app_ios_v1.png  ' /></a>
          </div>
          <div className={footer.rightSection}>
          <h3>Customer Service</h3>
            <div className={footer.content}>
              <span>Contact Us</span>  
              <span>Track Order</span>  
              <span>Return Order</span>  
              <span>Cancel Order</span>  
              <span>Blog </span>
              </div>
              <div className={footer.bottom} />              
              <h4>100% Secure payments</h4>
              <img className={footer.paymentImg} src='https://images.bewakoof.com/web/secure-payments-image.png' />
              
          </div>
          <div className={footer.extra}>
            <h5><GiReturnArrow /> 15 days return </h5>
            <h5><HiCurrencyRupee /> Cash on delivery </h5>
            <h5><BsCreditCard /> 100% secure payments </h5>

          </div>
        </div>
    )
}

export default Footer