import { GiRamProfile } from "react-icons/gi";
const title = () => {
  return (
    <div className="flex items-center gap-3 text-2xl group pb-8">
      <h3 className=" font-semibold relative overflow-hidden">
        {" "}
        About Me {""}
        <span className="w-full h-[2px] absolute bottom-0 left-0 inline-block bg-[#3282B8] -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500"></span>
      </h3>
      <GiRamProfile className="text-[#3282B8]" />
    </div>
  );
};

export default title;
