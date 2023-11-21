import { Link } from 'react-router-dom';
import Cover from '../Shared/Cover/Cover';
import Menuitem from '../Shared/MenuItem/Menuitem';

const MenuCategory = ({ items, title, bgUrl }) => {

    return (
        <div className="pt-8">
            {title && <Cover bgUrl={bgUrl} title={title} />}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-5 my-16">
                {items.map((item) => (
                    <Menuitem key={item._id} item={item} />
                ))}
            </div>
            <div className='text-center'>
                <Link
                    to={`/our-food/${title}`}
                    className="btn btn-ghost uppercase bg-transparent hover:bg-black border-b-2 hover:text-white border-black text-black">
                    ORDER YOUR FAVOURITE FOOD
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;
