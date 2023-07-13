import { GrProjects } from "react-icons/gr";
const projects = () => {
  return (
    <div className="wrapper">
      <div className="flex items-center gap-3 text-2xl pb-8">
        <h3 className=" font-semibold relative overflow-hidden justify-center">
          {" "}
          Projects {""}
          <span className="w-full h-[2px] absolute bottom-0 left-0 inline-block bg-[#3282B8] -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500"></span>
          </h3>

        <GrProjects className="text-[#3282B8] w-8 h-8 gap-3 " />
        
      </div>
      <div>
        <h1 className="font-normal text-white"> Coming Soon </h1>
      </div>
    </div>
  );
};

export default projects;
