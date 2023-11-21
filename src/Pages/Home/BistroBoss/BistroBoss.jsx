import chefServiceImage from '../../../assets/home/chef-service.jpg';

const BistroBoss = () => {
    return (
        <div className="py-10">
            <div className="" style={{backgroundImage: `url(${chefServiceImage})`}}>
                <div className=" bg-white p-5 md:p-20">
                    <h3 className="text-[#151515] font-Cinzel text-[45px] text-center">
                        Bistro Boss
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Necessitatibus, libero accusamus laborum deserunt
                        ratione dolor officiis praesentium! Deserunt magni
                        aperiam dolor eius dolore at, nihil iusto ducimus
                        incidunt quibusdam nemo.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BistroBoss;
