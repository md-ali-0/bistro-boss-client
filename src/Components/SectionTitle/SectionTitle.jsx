
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="flex flex-col justify-center items-center py-5">
            <p className="text-[#D99904] text-xl">---{subHeading}---</p>
            <h3 className="text-[#151515] whitespace-nowrap uppercase text-4xl border-y-4 w-80 text-center py-1.5 my-2">{heading}</h3>
        </div>
    );
};

export default SectionTitle;