import dropdown from './dropdown.module.css'
import {IoIosArrowDropdownCircle} from 'react-icons/io'

const Dropdown = () => {

    return (
        <div className={dropdown.mainComponent}>
         <div className={dropdown.dropdown}>
         <span className={dropdown.Dropdown}>All Categories<IoIosArrowDropdownCircle/></span>
         <div className={dropdown.content}>
            <p className={dropdown.options}>MAle</p>
            <p className={dropdown.options}>MAle</p>
            <p className={dropdown.options}>MAle</p>

         </div>
         </div>   

        </div>
    )
}

export default Dropdown