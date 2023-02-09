import { Link } from 'react-router-dom'
import navbar from './navbar.module.css'
import { TiShoppingCart } from 'react-icons/ti'
import { GiHadesSymbol } from 'react-icons/gi'
import Dropdown from '../Dropdown/Dropdown'
import {BiSearch} from 'react-icons/bi'
import {BsHeartFill} from 'react-icons/bs'
import {cartDetails , unisex , logInUser, searchInput } from '../../Recoil/RecoilAtom'
import {useRecoilValue,useRecoilState} from 'recoil'
import { useNavigate } from 'react-router-dom'


const Navbar = (props) => {
    const cartItems = useRecoilValue(cartDetails)
    const [seachCapture , setSearchCapture] = useRecoilState(searchInput)
    const unisexData = useRecoilValue(unisex)
    const navigate = useNavigate()
    const userDetails = useRecoilValue(logInUser)


    const capturingInput = (e) => {
    setSearchCapture(e.target.value)
    }

    const navigateFavPage = () => {
        navigate('/favorite')
    }


    return (
        <div className={navbar.mainComponent}>
            <div className={navbar.navbar}>
                <div className={navbar.content}>
                <Link  className={navbar.tittle} to='/'>
                <h1 className={navbar.navHeading}><GiHadesSymbol className={navbar.Icon} />Shoaib's<span className={navbar.designText}>The best clothing in a click.!!</span> </h1>
                </Link>
                <Link  className={navbar.links}to='/'> Home </Link>
                <Link  className={navbar.links}to='/Men'> Men </Link>
                <Link  className={navbar.links}to='/Women'> Women </Link>
                <Link  className={navbar.links} to='/cart'> <TiShoppingCart className={navbar.Icon} /><span className={navbar.itemCount}>({cartItems.length})</span></Link>                
                </div>                
                </div>
                <div className={navbar.bottom}>
                <h4>The Trends</h4>
                <Dropdown />
                <span className={navbar.search}><input placeholder='search anything...' onChange={capturingInput} className={navbar.searchBar}/> <BiSearch onClick={props.onClick} className={navbar.searchIcon}/></span>
                <BsHeartFill  className={navbar.LikeIcon} onClick={navigateFavPage} />
                <h4>Welcome, {userDetails.length > 0 ? <span className={navbar.name}>{userDetails[0].name}</span> : <span>signin now</span>}</h4>
                <Link className={navbar.login} to='login'><h4>SignUp/SignIn</h4></Link>
                 </div>

        </div>
    )
}
export default Navbar