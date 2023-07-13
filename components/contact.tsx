
import Social from "@/components/social"
const contacts = () => {
  return (
    <div className="wrapper">
      <div className="max-w-5xl mx-auto  flex flex-col gap-4 items-center justify-center">
        <h2 className="text-2xl font-bold ">
          {" "}
          Lets create some awesome projects
        </h2>
        <p className="text-lg tracking-wider font-medium text-center">
          A person who never made a mistake never tried anything new by Albert Einstein
        </p>
        <a href="mailto:muhd.rehan@hotmail.com">
          <button className=" w-48 h-12 bg-gradient-to-r  from-[#3282B8] to bg-indigo-500 tracking-wider  text-lg font-bold text-white rounded-md hover:from-indigo-500 to-[#3282B8] duration-300">
            {" "}
            Say Hello{" "}
          </button>
        </a>
    <Social/>
        </div>    
        
    </div>
  );
};

export default contacts;
