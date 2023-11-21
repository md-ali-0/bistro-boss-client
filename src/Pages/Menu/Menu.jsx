import { Helmet } from "react-helmet-async";
import Container from "../../Components/Container/Container";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useMenu from "../../Hooks/useMenu";
import dessertBg from "../../assets/menu/dessert-bg.jpeg";
import menuBg from "../../assets/menu/menu-bg.jpg";
import pizzaBg from "../../assets/menu/pizza-bg.jpg";
import saladBg from "../../assets/menu/salad-bg.jpg";
import soupBg from "../../assets/menu/soup-bg.jpg";
import Cover from "../Shared/Cover/Cover";
import MenuCategory from "./MenuCategory";

const Menu = () => {
    const [menus] = useMenu();
    const dessert = menus.filter((item) => item.category === "dessert");
    const salad = menus.filter((item) => item.category === "salad");
    const pizza = menus.filter((item) => item.category === "pizza");
    const soup = menus.filter((item) => item.category === "soup");
    const offered = menus.filter((item) => item.category === "offered");
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>

            {/* Main Cover */}
            <Cover bgUrl={menuBg} title={"Our Menu"} />
            {/* Offer */}
            <Container>
                <SectionTitle heading={"TODAY'S OFFER"} subHeading={"Don't miss"} />
                <MenuCategory items={offered} />
                {/* dessert */}
                <MenuCategory items={dessert} title={"dessert"} bgUrl={dessertBg} />
                {/* pizza */}
                <MenuCategory items={pizza} title={"pizza"} bgUrl={pizzaBg} />
                {/* salad */}
                <MenuCategory items={salad} title={"salad"} bgUrl={saladBg} />
                {/* soup */}
                <MenuCategory items={soup} title={"soup"} bgUrl={soupBg} />
            </Container>
        </div>
    );
};

export default Menu;
