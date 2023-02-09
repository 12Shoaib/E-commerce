import favorite from './favorite.module.css'
import Navbar from '../../Components/Navbar/Navbar'
import { useRecoilValue } from 'recoil'
import {favoriteDetails} from '../../Recoil/RecoilAtom'

const Favorite = () => {
    const favorite = useRecoilValue(favoriteDetails)
    console.log(favorite)
    return (
        <div className={favorite.mainComponent}>
            <Navbar />
            {favorite.map((element , index) => <div className={favorite.container}><img src={element.image} className={favorite.image} />
            <p>{element.brandName}</p>
            <p>{element.tshirt}</p>
            <p>{element.price}</p>
             </div>)}

        </div>
    )
}

export default Favorite