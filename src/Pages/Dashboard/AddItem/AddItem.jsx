import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { ImSpoonKnife } from "react-icons/im";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxios from "../../../Hooks/useAxios";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const AddItem = () => {
    const axios = useAxiosPublic();
    const axiosSecure = useAxios();
    const apiKey = import.meta.env.VITE_IMAGE_BB_API;
    const url = `https://api.imgbb.com/1/upload?key=${apiKey}`;

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        const { name, category, price, recipe, image } = data;
        const imageFile = { image: image[0] };

        const res = await axios.post(url, imageFile, {
            headers: {
                "content-type": "multipart/form-data",
            },
        });

        if (res.data.success == true) {
            const newItem = {name, category, price: parseInt(price), recipe, image:res.data.data.display_url}
            const {data} = await axiosSecure.post('/add-menus',newItem)
            if (data.insertedId) {
                toast.success('Menu Added Successfully')
                reset()
            }
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
                            />
                            {errors.name && (
                                <span className="text-red-600">{errors.name.message}</span>
                            )}
                        </div>
                        <div className="col-span-2 md:col-span-1 space-y-2">
                            <label
                                className="block text-xl font-semibold text-[#444]"
                                htmlFor="recipe-name"
                            >
                                Category*
                            </label>
                            <select
                                defaultValue="default"
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
                                id="recipe"
                                cols="20"
                                rows="5"
                            ></textarea>
                            {errors.recipe && (
                                <span className="text-red-600">{errors.recipe.message}</span>
                            )}
                        </div>
                        <div className="col-span-2 space-y-2">
                            <input
                                className="block"
                                type="file"
                                {...register("image", {
                                    required: "Image is Required",
                                })}
                            />
                            {errors.image && (
                                <span className="text-red-600">{errors.image.message}</span>
                            )}
                        </div>
                    </div>
                    <div className="px-5 pb-5">
                        <button type="submit" className="text-white bg-gradient-to-t from-[#835D23] to-[#B58130] border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Add Item <ImSpoonKnife className="inline" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItem;
