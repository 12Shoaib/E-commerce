import signup from './signup.module.css'
import {useState} from 'react'
import {BiErrorAlt} from 'react-icons/bi'
import {userCredentials} from '../../Recoil/RecoilAtom'
import {useRecoilState} from 'recoil'
import {isValidUserName , isValidPassword , isValidemail , isValidPhone} from '../../Helper/validations'

const Signin = () => {
    const [storingDataRecoil , setStoringDataRecoil] = useRecoilState(userCredentials)
        const [emailCapture , setEmailCapture] = useState('')
        const [passwordCapture, setPasswordCapture] = useState('')
        const [userNameCapture , setUserNameCapture] = useState('')
        const [PhoneCapture , setPhoneCapture] = useState('')
        const [emailError , setEmailError] = useState('')
        const [phoneError , setPhoneError] = useState('')
        const [passwordError , setPasswordError] = useState('')
        const [userNameError , setUserNameError] = useState('')
        const [gender , setGender] =  useState('')
        const [adress , setAdress] = useState('')
        const [showeEmailError, setShowEmailError] = useState(false)
        const [showNameError , setShowNameError] = useState(false)
        const [showPasswordError , setShowPasswordError] = useState(false)
        const [showPhoneError ,setShowPhoneError] = useState(false)

    const displayNameError = () => {
        setShowNameError(true)
    }    
    const displayPassworError = () => {
        setShowPasswordError(true)
    }
    const displayEmailError = () => {
        setShowEmailError(true)
    }
    const displayPhoneError = () => {
        setShowPhoneError(true)
    }
    const userNameValidation = (e) =>{
        setUserNameCapture(e.target.value)
        const Validated = isValidUserName(e.target.value)
        setUserNameError(Validated)
    }
    const emailValidation = (e) => {
        setEmailCapture(e.target.value)
        const Validated = isValidemail(e.target.value)
        setEmailError(!Validated)
    }
    const passwordValidation = (e) => {
        setPasswordCapture(e.target.value)
        const Validated = isValidPassword(e.target.value)
        setPasswordError(!Validated)
    }
    const phoneValidation = (e) => {
        setPhoneCapture(e.target.value)
        const Validated = isValidPhone(e.target.value)
        setPhoneError(!Validated)
    }
    const storeDataInRecoil = () => {
        if(emailCapture==='' && passwordCapture==='' && userNameCapture==='' && PhoneCapture === '' && gender ==='' && adress===''){ 
        displayPhoneError()        
        alert('fields cant be empty')
          }else{
            console.log('else part')
            const details = {
                name:userNameCapture,
                password: passwordCapture,
                email: emailCapture,
                phone: PhoneCapture,
                gender: gender,
                adress: adress,
            }
            setStoringDataRecoil([details , ...storingDataRecoil])
            alert("The Registration Successfull")
          }
}
    return (
        <div className={signup.mainComponent}>
            <input onChange={userNameValidation} placeholder='Name...' className={signup.formInput} type='text' onBlur={displayNameError} />
             {showNameError&&<>{userNameError && <span className={signup.errorMsg}><BiErrorAlt className={signup.errorIcon}/> Invalid user Name,Please enter details correctly </span>}</>}
            <input onChange={passwordValidation} placeholder='Password...' className={signup.formInput} type='password' onBlur={displayPassworError} />            
            {showPasswordError && <>{passwordError && <span className={signup.errorMsg}><BiErrorAlt className={signup.errorIcon}/> Invalid Password ,Please enter details correctly </span>}</>}
            <input onChange={emailValidation} placeholder='@Email...' className={signup.formInput} type='email' onBlur={displayEmailError} />
           {showeEmailError && <>{emailError && <span className={signup.errorMsg}><BiErrorAlt className={signup.errorIcon}/> Invalid email adress ,Please enter details correctly </span>}</>}
            <select onChange={(e)=> setGender(e.target.value) } className={signup.dropdown} >
                <option>Gender</option>
                <option>Male</option>
                <option>Female</option>
            </select>
            <input onChange={phoneValidation} placeholder='Phone...' className={signup.formInput} type='text' onBlur={displayPhoneError} />        
           {showPhoneError && <>{phoneError && <span className={signup.errorMsg}><BiErrorAlt className={signup.errorIcon}/> Invalid email adress ,Please enter details correctly </span>}</>}
            <input onChange={(e)=>setAdress(e.target.value)} placeholder='Adress...' className={signup.formInput} type='text' />
            <button className={signup.button1} onClick={storeDataInRecoil}>Signup</button>    

        </div>
    )
}
export default Signin