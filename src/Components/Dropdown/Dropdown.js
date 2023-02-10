import dropdown from './dropdown.module.css'
import {IoIosArrowDropdownCircle} from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import {useState} from 'react';
import {Link} from 'react-router-dom'

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
        <div class={dropdown.dropdown}>
        <button class={dropdown.dropbtn}>FILTER ITEMS <IoIosArrowDropdownCircle /></button>
        <div class={dropdown.dropdowncontent}>
            <a href="#">All Categories</a>
            <Link to='/men'>Male</Link>
            <Link to='/women'>Female</Link>
            <Link to='/unisex'>Unisex</Link>
            <p className={dropdown.tag}><Link to='/'>No Filters</Link></p>

        </div>
        </div>


        </div>
    )
}

export default Dropdown