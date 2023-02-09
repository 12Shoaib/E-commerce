import dialog from './dialog.module.css'
import {GiHadesSymbol} from 'react-icons/gi'
import {useState} from 'react'
import Signin from '../Signin/Signin'
import Signup from '../Signup/Signup'

const Dialog = (props) => {
    const [isSignIn , setIsSignIn] = useState(false)
    return (
        <div className={dialog.mainComponent}>
            <div className={dialog.header}>
            <p className={dialog.heading}> Please log-in to continue</p>  
            <button onClick={props.onClick} className={dialog.button}> x </button>
            </div>
         <div className={dialog.content}>   
         <h1 className={dialog.navHeading}><GiHadesSymbol className={dialog.Icon} />Shoaib's<span className={dialog.designText}>The best clothing in a click.!!</span> </h1>
        <div className={dialog.wrapper}>
        {isSignIn ?  
           <Signup />
            :    
           <Signin />
               }
         </div>      
         <div className={dialog.bottmSection}>      
            <h5>{isSignIn ? <span>Already User ? </span> : <span>New Here ?</span>}</h5>
            <button className={dialog.formButton} onClick={() => setIsSignIn((prev) => !prev)}>{isSignIn ? <span>Login</span> : <span>Register</span>}</button>
        </div>  
        </div>
            </div>
    )

}
export default Dialog