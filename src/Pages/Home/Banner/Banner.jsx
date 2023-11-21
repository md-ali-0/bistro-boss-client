import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import imageOne from '../../../assets/home/01.jpg';
import imageTwo from '../../../assets/home/02.jpg';
import imageThree from '../../../assets/home/03.png';
import imageFour from '../../../assets/home/04.jpg';
import imageFive from '../../../assets/home/05.png';
import imageSix from '../../../assets/home/06.png';
const Banner = () => {
    return (
        <>
            <Carousel showArrows={true}>
                <div>
                    <img src={imageOne} />
                </div>
                <div>
                    <img src={imageTwo} />
                </div>
                <div>
                    <img src={imageThree} />
                </div>
                <div>
                    <img src={imageFour} />
                </div>
                <div>
                    <img src={imageFive} />
                </div>
                <div>
                    <img src={imageSix} />
                </div>
            </Carousel>
        </>
    );
};

export default Banner;
