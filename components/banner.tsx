import Image from "next/image";
import Profileimage from "../public/media/FB_IMG_1498632582816.jpg";
import {HiOutlineMail} from "react-icons/hi"

const banner = () => {
  return (
    <div className="wrapper flex flex-col md:flex-row items-center gap-10 ">
      {/*image*/}
      <div className="w-44 h-44 rounded-full  bg-[#1B262C]" >
        <Image className="w-full h-full rounded-full borded-[1px] border-[#0F4C75] p-1 object-cover"
        src={Profileimage} alt=""/>
      </div>
      {/*Description*/}

      <div className="w-3/4 flex flex-col gap-2 items-center md:items-start">
        <h1 className="text-5xl font-bold text-zinc-200 ">Muhammad Rehan </h1>
        <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-300 via-red-500 to bg-indigo-500 tracking-wider  "> Solution Architect <br/></h3>
        <p className="text-base tracking-wide text-center md:text-left">Result-focused VAS Engineer with seven years of experience in innovative smart and IoT, Digital, and VAS product planning, designing, and implementation, as well as a strong foundation in customer service and technical help. Looking for a challenging position where I can use my technical expertise and customer-focused attitude to help create and improve cutting-edge VAS, Digital, and IoT solutions.</p>
      </div>
      {/* <div>
        <HiOutlineMail className=" text-2xl px-2"/>
        </div> */}
    </div>
  );
};

export default banner;
