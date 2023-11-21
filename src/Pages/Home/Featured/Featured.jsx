import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featuredImage from '../../../assets/home/featured.jpg';

const Featured = () => {
    return (
        <div className='py-10 relative'>
            <div className="bg-cover bg-fixed justify bg-center bg-no-repeat relative" style={{backgroundImage: `url(${featuredImage})`}}>
            <div className="absolute inset-0 bg-black opacity-30"></div>
                <SectionTitle
                    heading={'FROM OUR MENU'}
                    subHeading={'Check it out'}
                />
                <div className='flex justify-center items-center gap-5 px-20 py-20 relative z-10'>
                    <img className='w-[448px]' src={featuredImage} alt="" />
                    <div className='text-white'>
                        <span>March 20, 2023</span>
                        <h3>WHERE CAN I GET SOME?</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Error voluptate facere, deserunt dolores
                            maiores quod nobis quas quasi. Eaque repellat
                            recusandae ad laudantium tempore consequatur
                            consequuntur omnis ullam maxime tenetur.
                        </p>
                        <button className="btn btn-ghost uppercase bg-transparent hover:bg-black border-b-2 border-white text-white">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;
