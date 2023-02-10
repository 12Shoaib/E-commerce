import { useState } from "react"
import signin from './signin.module.css'
import {isValidemail,isValidPassword} from '../../Helper/validations'
import {BiErrorAlt} from 'react-icons/bi'
import {userCredentials, logInUser, isLogin} from '../../Recoil/RecoilAtom'
import {useRecoilValue , useRecoilState} from 'recoil'
import {isDialogBox} from '../../Recoil/RecoilAtom'

const Signin = () => {
        const [isLogIn , setIsLogIn] = useRecoilState(isLogin)
        const [presentUser , setPresentUser] = useRecoilState(logInUser)
        const [isDialog, setIsDialog ]= useRecoilState(isDialogBox)
        const [emailCapture , setEmailCapture] = useState('')
        const [passwordCapture , setPasswordCapture] = useState('')
        const [emailError  , setEmailError] = useState('')
        const [passwordError  , setPasswordError] = useState('')
        const [showEmailError, setShowEmailError] = useState(false)
        const [showPasswordError , setShowPasswordError] = useState(false)
        const userDetails = useRecoilValue(userCredentials)
        

    function emailValidation(e) {
        setEmailCapture(e.target.value)
        const validated = isValidemail(emailCapture)
        setEmailError(validated)
    }
    function passwordValidation(e){
        setPasswordCapture(e.target.value)
        const validated = isValidPassword(e.target.value)
        setPasswordError(validated)
    }
    function displayingEmailError() {
        setShowEmailError(true)
    }
    function displayingPasswordError(){     
        setShowPasswordError(true)
    }
    function checkDataBase() {
        const detail = userDetails.filter((element) => element.email === emailCapture)
        if(detail.length > 0 && emailCapture === detail[0].email && passwordCapture=== detail[0].password){
                alert("loginSuccessfull")
                setIsLogIn(true)
                setIsDialog(false)
                setPresentUser([...detail])
            } else if(detail.length === 0){
                alert("user not found")
            }        
    }
    console.log(presentUser)
    return (
        <div className={signin.mainComponent}>
            <input onChange={emailValidation} className={signin.formInput} type='email' placeholder="@YourEmailAdress" onBlur={displayingEmailError}/>
           {showEmailError && <> {!emailError && <span className={signin.errorMsg}><BiErrorAlt className={signin.errorIcon}/> Invalid email adress,Please enter details correctly </span>}</>}
            <input onChange={passwordValidation} className={signin.formInput} type='password' placeholder="@YourPassword" onBlur={displayingPasswordError} />
            {showPasswordError && <>{!passwordError && <span className={signin.errorMsg}><BiErrorAlt className={signin.errorIcon}/> Invalid password ,Please enter details correctly </span>}</>}

                <button className={signin.button1} onClick={checkDataBase}>Login</button>

        </div>
    )
}

export default Signin