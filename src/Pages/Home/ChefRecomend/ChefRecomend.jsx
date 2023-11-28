import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import chefRecomendedImage from '../../../assets/home/slide5.jpg';
import RecomendCard from "../../Shared/ComponentCard/RecomendCard";

const ChefRecomend = () => {
    const item = {
        name: 'Caeser Salad',
        image: chefRecomendedImage,
    }
    return (
        <div>
            <SectionTitle heading={'CHEF RECOMMENDS'} subHeading={'Should Try'}/>
            <div className="flex flex-col md:flex-row justify-evenly items-center py-10">
                {[...Array(3)].map((_,idx)=><RecomendCard item={item} key={idx}/>)}
            </div>
        </div>
    );
};

export default ChefRecomend;