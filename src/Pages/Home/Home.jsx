import { Helmet } from "react-helmet-async";
import Container from "../../Components/Container/Container";
import Banner from "./Banner/Banner";
import BistroBoss from "./BistroBoss/BistroBoss";
import CallUs from "./CallUs/CallUs";
import Category from "./Category/Category";
import ChefRecomend from "./ChefRecomend/ChefRecomend";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Container>
                <Banner />
                <Category />
                <BistroBoss />
                <PopularMenu />
                <CallUs />
                <ChefRecomend />
                <Featured />
                <Testimonial />
            </Container>
        </div>
    );
};

export default Home;
