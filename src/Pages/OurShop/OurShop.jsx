import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Container from "../../Components/Container/Container";
import useMenu from "../../Hooks/useMenu";
import shopImage from "../../assets/shop/banner2.jpg";
import RecomendCard from "../Shared/ComponentCard/RecomendCard";
import Cover from "../Shared/Cover/Cover";

const OurShop = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };

    const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
    const [menus] = useMenu();
    const { category } = useParams();
    const intialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(intialIndex);

    const dessert = menus.filter((item) => item.category === "dessert");
    const salad = menus.filter((item) => item.category === "salad");
    const pizza = menus.filter((item) => item.category === "pizza");
    const soup = menus.filter((item) => item.category === "soup");
    const drinks = menus.filter((item) => item.category === "drinks");
    // const offered = menus.filter((item) => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Our Shop</title>
            </Helmet>
            <Cover bgUrl={shopImage} title={"Our Shop"} />
            <Container>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="uppercase text-center pt-5">
                        <Tab>Salad</Tab>
                        <Tab>pizza</Tab>
                        <Tab>soups</Tab>
                        <Tab>desserts</Tab>
                        <Tab>drinks</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 py-10 px-5">
                            {salad.map((item) => (
                                <RecomendCard item={item} key={item._id} />
                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 py-10 px-5">
                            {pizza.map((item) => (
                                <RecomendCard item={item} key={item._id} />
                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 py-10 px-5">
                            {soup.map((item) => (
                                <RecomendCard item={item} key={item._id} />
                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 py-10 px-5">
                            {dessert.map((item) => (
                                <RecomendCard item={item} key={item._id} />
                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 py-10 px-5">
                            {drinks.map((item) => (
                                <RecomendCard item={item} key={item._id} />
                            ))}
                        </div>
                    </TabPanel>
                </Tabs>
            </Container>
        </div>
    );
};

export default OurShop;
