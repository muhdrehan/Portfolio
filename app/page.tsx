import Banner from "../components/banner";
import Aboutme from "@/components/aboutme";
import Experience from "@/components/experience";
import Skills from "@/components/skills"
import Projects from "@/components/projects";
import Contacts from "@/components/contact";

export default function Home() {
  return (
    <main className="w-full bg-[#1B262C] text-white px-4">
      <div className="max-w-screen-xl mx-auto lg:pt-10">
        <Banner />
        <Aboutme/>
        <Experience/>
        <Skills/>
        <Projects/>
        <Contacts/>
        
      </div>
    </main>
  );
}
