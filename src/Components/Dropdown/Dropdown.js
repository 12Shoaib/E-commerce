import dropdown from './dropdown.module.css'
import {IoIosArrowDropdownCircle} from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import {useState} from 'react';

const Dropdown = () => {
        const [userInput , setUserInput] = useState('')
        const navigate = useNavigate()
    function navigateNow(){
        if(userInput === 'Male'){
            navigate('/men')
            }
        if(userInput === 'female'){
            navigate('/women')
        }
        if(userInput === 'unisex'){
            navigate('/unisex')
        }   
        if(userInput === 'NoFilter'){
            navigate('/')
        } 
    }    

    function captureInput(e){
        setUserInput(e.target.value)
        navigateNow()
    }    
    return (
        <div className={dropdown.mainComponent}>
         <div  className={dropdown.dropdown}>
         {/* <span className={dropdown.Dropdown}>All Categories<IoIosArrowDropdownCircle/></span> */}
        <select onChange={captureInput} className={dropdown.Dropdown}>
            <option>No Filter</option>
            <option>All Categories<IoIosArrowDropdownCircle/></option>
            <option > Male</option>
            <option>Female</option>
            <option>unisex</option>
        </select>
         </div>   

        </div>
    )
}

export default Dropdown