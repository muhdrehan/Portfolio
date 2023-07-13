import { GiSkills } from "react-icons/gi";

const skills = () => {
  return (
    <div className="wrapper ">
      <div className="flex items-center gap-3 text-2xl group pb-8 pt-14">
        <h3 className=" font-semibold relative overflow-hidden">
          {" "}
          Skills {""}
          <span className="w-full h-[2px] absolute bottom-0 left-0 inline-block bg-[#3282B8] -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500"></span>
        </h3>
        {<GiSkills className="text-[#3282B8] w-10 h-10" />}
      </div>
      <div className="flex gap-3 flex-wrap">
        <a href="https://muhammadrehan.vercel.app/" target="_Blank"> 
        <p className="border border-lime-700 px-4 py-2 text-base bg-transparent hover:text-white hover:border-[#5C7AEA] hover:bg-base rounded-md duration-300"> JavaScript</p>
        </a>
        <p className="border border-lime-700 px-4 py-2 text-base bg-transparent hover:text-white hover:border-[#5C7AEA] hover:bg-base rounded-md duration-300"> TypeScript</p>
        <p className="border border-lime-700 px-4 py-2 text-base bg-transparent hover:text-white hover:border-[#5C7AEA] hover:bg-base rounded-md duration-300"> Linux/Unix</p>
        <p className="border border-lime-700 px-4 py-2 text-base bg-transparent hover:text-white hover:border-[#5C7AEA] hover:bg-base rounded-md duration-300"> RedHat Open Shift</p>
        <p className="border border-lime-700 px-4 py-2 text-base bg-transparent hover:text-white hover:border-[#5C7AEA] hover:bg-base rounded-md duration-300"> Technical Support</p>
        <p className="border border-lime-700 px-4 py-2 text-base bg-transparent hover:text-white hover:border-[#5C7AEA] hover:bg-base rounded-md duration-300"> LAN/WAN</p>
        <p className="border border-lime-700 px-4 py-2 text-base bg-transparent hover:text-white hover:border-[#5C7AEA] hover:bg-base rounded-md duration-300"> TCP/IP</p>
        <p className="border border-lime-700 px-4 py-2 text-base bg-transparent hover:text-white hover:border-[#5C7AEA] hover:bg-base rounded-md duration-300"> Git Hub</p>
        <p className="border border-lime-700 px-4 py-2 text-base bg-transparent hover:text-white hover:border-[#5C7AEA] hover:bg-base rounded-md duration-300"> Solution Designing</p>
        <p className="border border-lime-700 px-4 py-2 text-base bg-transparent hover:text-white hover:border-[#5C7AEA] hover:bg-base rounded-md duration-300"> Node JS</p>
        <p className="border border-lime-700 px-4 py-2 text-base bg-transparent hover:text-white hover:border-[#5C7AEA] hover:bg-base rounded-md duration-300"> Web Development</p>
        <p className="border border-lime-700 px-4 py-2 text-base bg-transparent hover:text-white hover:border-[#5C7AEA] hover:bg-base rounded-md duration-300"> SQL</p>

      </div>
    </div>
  );
};

export default skills;
