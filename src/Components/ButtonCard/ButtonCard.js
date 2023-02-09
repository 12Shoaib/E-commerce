import { useNavigate } from 'react-router-dom'
import buttoncard from './buttoncard.module.css'



const ButtonCard = () => {
    const navigate = useNavigate()
    function handleMenButton() {
        navigate('/men')
    }
    function handleWomenButton(){
        navigate('/women')
    }
    return (
        <div className={buttoncard.mainComponent}>
          <div  className={buttoncard.image_Left} onClick={handleMenButton} >
          <img src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Men-1675143052.png" /> 
          </div>  
          <div onClick={handleWomenButton} className={buttoncard.image_Right} >
            <img src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Women-1675143053.png" />
          </div>  
        </div>
    )
}

export default ButtonCard