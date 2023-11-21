import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import Menuitem from "../../Shared/MenuItem/Menuitem";

const PopularMenu = () => {
    const [ menus ] = useMenu()
    const popularItems = menus.filter(item => item.category === 'popular')
    return (
        <div>
            <SectionTitle subHeading={'Check it out'} heading={'FROM OUR MENU'}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-5">
            {
                popularItems.map(item=><Menuitem key={item._id} item={item}/>)
            }
            </div>
        </div>
    );
};

export default PopularMenu;