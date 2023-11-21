import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { ImSpoonKnife } from "react-icons/im";
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxios from "../../../Hooks/useAxios";

const EditItem = () => {
    const {data:menu} = useLoaderData()

    const axiosSecure = useAxios();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        const { name, category, price, recipe, } = data;

        const updateItem = {name, category, price: parseInt(price), recipe,}
        const {data:res} = await axiosSecure.patch(`/menus/${menu._id}`,updateItem)
        if (res.modifiedCount) {
            toast.success('Menu Updated Successfully')
        }
        
    };
    return (
        <div className="py-5 px-3">
            <SectionTitle heading={"Add an item"} subHeading={"What's new?"} />
            <div className="bg-[#F3F3F3] md:mx-20 md:my-10">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-5">
                        <div className="col-span-2 space-y-2">
                            <label
                                className="block text-xl font-semibold text-[#444]"
                                htmlFor="name"
                            >
                                Recipe name*
                            </label>
                            <input
                                className="bg-white text-[#A1A1A1] rounded-md border outline-none px-3 py-2 w-full"
                                type="text"
                                {...register("name", {
                                    required: "Name is Required",
                                })}
                                id="name"
                                placeholder="Recipe name"
                                defaultValue={menu.name}
                            />
                            {errors.name && (
                                <span className="text-red-600">{errors.name.message}</span>
                            )}
                        </div>
                        <div className="col-span-2 md:col-span-1 space-y-2">
                            <label
                                className="block text-xl font-semibold text-[#444]"
                                htmlFor="category"
                            >
                                Category*
                            </label>
                            <select
                                defaultValue={menu.category}
                                className="bg-white text-[#A1A1A1] rounded-md border outline-none px-3 py-2 w-full"
                                {...register("category", {
                                    required: "Category is Required",
                                })}
                                id="category"
                            >
                                <option disabled value="default">
                                    Select a category
                                </option>
                                <option value="salad">Salad</option>
                                <option value="drinks">Drinks</option>
                                <option value="dessert">Dessert</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                {/* <option value="popular">Popular</option> */}
                                {/* <option value="offered">Offered</option> */}
                            </select>
                            {errors.category && (
                                <span className="text-red-600">{errors.category.message}</span>
                            )}
                        </div>
                        <div className="col-span-2 md:col-span-1 space-y-2">
                            <label
                                className="block text-xl font-semibold text-[#444]"
                                htmlFor="price"
                            >
                                Price*
                            </label>
                            <input
                                className="bg-white text-[#A1A1A1] rounded-md border outline-none px-3 py-2 w-full"
                                type="text"
                                defaultValue={menu.price}
                                {...register("price", {
                                    required: "Price is Required",
                                })}
                                id="price"
                                placeholder="Price"
                            />
                            {errors.price && (
                                <span className="text-red-600">{errors.price.message}</span>
                            )}
                        </div>
                        <div className="col-span-2 space-y-2">
                            <label
                                className="block text-xl font-semibold text-[#444]"
                                htmlFor="details"
                            >
                                Recipe Details*
                            </label>
                            <textarea
                                className="bg-white text-[#A1A1A1] rounded-md border outline-none px-3 py-2 w-full"
                                {...register("recipe", {
                                    required: "Details is Required",
                                })}
                                defaultValue={menu.recipe}
                                id="details"
                                cols="20"
                                rows="5"
                            ></textarea>
                            {errors.details && (
                                <span className="text-red-600">{errors.details.message}</span>
                            )}
                        </div>
                    </div>
                    <div className="px-5 pb-5">
                        <button type="submit" className="text-white bg-gradient-to-t from-[#835D23] to-[#B58130] border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Update <ImSpoonKnife className="inline" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditItem;
