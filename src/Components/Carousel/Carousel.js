import carousel from './carousel.module.css'
import {carouselData} from '../../Recoil/RecoilAtom'
import {useRecoilValue} from 'recoil'
import Carousel from 'better-react-carousel'


const Gallery = () => {
    const newCarouselData = useRecoilValue(carouselData)

    return (
        <div className={carousel.mainComponent}>
            <Carousel cols={4} rows={1} gap={4} showDots loop >
             {newCarouselData.map((element) => <Carousel.Item ><img className={carousel.img} src={element.image} /></Carousel.Item>)}   
            </Carousel>
        </div>
    )
}

export default Gallery