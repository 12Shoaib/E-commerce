import unisex from './unisex.module.css';
import Navbar from '../../Components/Navbar/Navbar';
import Card from '../../Components/Cards/Card';
import LeftSection from '../../Sections/LeftSection';


const Unisex = () => {
    return(
        <div className={unisex.mainComponent}>
            <Navbar />        
    
            <div className={unisex.card}>
            <LeftSection />
            <Card />
            </div>
        </div>
    )
}
export default Unisex
