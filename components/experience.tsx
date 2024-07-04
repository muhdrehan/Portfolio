import { GiJourney } from "react-icons/gi";
import { GiBoatPropeller, GiBeachBall } from "react-icons/gi";
import { SiJsonwebtokens } from "react-icons/si";
import { GrSkype } from "react-icons/gr";

const experience = () => {
  return (
    <div>
      <div className="flex items-center gap-3 text-2xl group pb-8 pt-14">
        <h3 className=" font-semibold relative overflow-hidden">
          {" "}
          Experiences {""}
          <span className="w-full h-[2px] absolute bottom-0 left-0 inline-block bg-[#3282B8] -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500"></span>
        </h3>
        {<GiJourney className="text-[#3282B8] w-10 h-10" />}
      </div>
      <div>
          <GiBeachBall className="w-10 h-10 rounded-full text-xl text-[#B31312] flex items-center justify-center" />
          <h4 className="text-2xl pt-2 font-semibold"> AirlinQ </h4>
          <p> Solution Architect 2024 - Present </p>
        </div>
      <span className="flex justify-around gap-15">
        <div>
          <GiBoatPropeller className="w-10 h-10 rounded-full text-xl text-[rgb(50,130,184)] flex items-center justify-center" />
          <h4 className="text-2xl pt-2 font-semibold"> Telenor Pakistan </h4>
          <p> System Analyst 2020 - 2024 </p>
        </div>
        <div>
          <SiJsonwebtokens className="w-10 h-10 rounded-full text-xl text-[#A2FF86] flex items-center justify-center" />
          <h4 className="text-2xl pt-2 font-semibold"> IMI Mobiles </h4>
          <p> Deployment Engineer 2019 - 2020 </p>
        </div>
        <div>
          <GrSkype className="w-10 h-10 rounded-full text-xl text-[#F24C3D] flex items-center justify-center" />
          <h4 className="text-2xl pt-2 font-semibold"> Systems Limited </h4>
          <p> Support Engineer 2017 - 2018 </p>
        </div>
        <div>
          <GiBeachBall className="w-10 h-10 rounded-full text-xl text-[#B31312] flex items-center justify-center" />
          <h4 className="text-2xl pt-2 font-semibold"> Mobilink </h4>
          <p> NOC Core Support Expert 2012 - 2013 </p>
        </div>

      </span>
    </div>
  );
};

export default experience;
