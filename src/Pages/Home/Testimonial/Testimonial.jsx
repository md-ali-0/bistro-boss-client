import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { useEffect, useState } from 'react';
import { Navigation } from 'swiper/modules';

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/reviews')
            .then((res) => res.json())
            .then((data) => setReviews(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="my-20">
            <SectionTitle
                heading={'TESTIMONIALS'}
                subHeading={'What Our Clients Say'}
            />
            <>
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper">
                    {reviews.map((review) => (
                        <SwiperSlide key={review._id}>
                            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                                <figure className="max-w-screen-md mx-auto">
                                    <Rating
                                        style={{width: 180, margin:'0 auto', padding:'10px 0'}}
                                        value={review.rating}
                                        readOnly
                                    />
                                    <svg
                                        className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                                        viewBox="0 0 24 27"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    <blockquote>
                                        <p className="text-lg md:text-xl font-medium text-gray-900">
                                            {review.details}
                                        </p>
                                    </blockquote>
                                    <figcaption className="flex items-center justify-center mt-6 space-x-3">
                                        <img
                                            className="w-6 h-6 rounded-full"
                                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                                            alt="profile picture"
                                        />
                                        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                            <div className="pr-3 font-medium text-[#CD9003] text-lg">
                                                {review.name}
                                            </div>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </>
        </div>
    );
};

export default Testimonial;
