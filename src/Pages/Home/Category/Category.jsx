import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import imageOne from '../../../assets/home/slide1.jpg';
import imagetwo from '../../../assets/home/slide2.jpg';
import imageThree from '../../../assets/home/slide3.jpg';
import imageFour from '../../../assets/home/slide4.jpg';
import imageFive from '../../../assets/home/slide5.jpg';

import { Pagination } from 'swiper/modules';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
const Category = () => {
    return (
        <>
            <section>
                <SectionTitle heading={'ORDER ONLINE'} subHeading={'From 11:00am to 10:00pm'}/>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper my-10">
                    <SwiperSlide>
                        <img src={imageOne} alt="" />
                        <h3 className="text-center text-white text-xl uppercase -mt-16">
                            Saldas
                        </h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imagetwo} alt="" />
                        <h3 className="text-center text-white text-xl uppercase -mt-16">
                            Pizzas
                        </h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imageThree} alt="" />
                        <h3 className="text-center text-white text-xl uppercase -mt-16">
                            Soups
                        </h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imageFour} alt="" />
                        <h3 className="text-center text-white text-xl uppercase -mt-16">
                            Desserts
                        </h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imageFive} alt="" />
                        <h3 className="text-center text-white text-xl uppercase -mt-16">
                            Salads
                        </h3>
                    </SwiperSlide>
                </Swiper>
            </section>
        </>
    );
};

export default Category;
