import About from "./components/About";
import Body from "./components/Header";
import Navbar from "./components/Navbar";

const page = () => {
  return (
    <div className="w-full bg-[#112] overflow-hidden flex flex-col">
      <div>
        <Navbar />
      </div>
     <div className="w-full overflow-hidden">
        <Body/>
        </div>
        
        <div>
        <About/>
        </div>
        
    </div>
  );
};

export default page;
