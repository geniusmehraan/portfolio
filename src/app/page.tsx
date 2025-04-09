import About from "./components/About";
import Body from "./components/Header";
import Navbar from "./components/Navbar";
import ProjectsWork from "./components/ProjectsWork";


const page = () => {
  return (
    <div className="w-full bg-[#000] overflow-hidden flex flex-col">
      <div>
        <Navbar />
      </div>
     <div className="w-full overflow-hidden">
        <Body/>
        </div>
        
        <div>
        <About/>
        </div>
        
        <div>
          <ProjectsWork/>
        </div>

    </div>
  );
};

export default page;
