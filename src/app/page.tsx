import Body from "./components/Body";
import Navbar from "./components/Navbar";

const page = () => {
  return (
    <div className="w-screen bg-[#1A1A2E] h-screen flex flex-col">
      <div>
        <Navbar />
      </div>
     
        <Body/>
        
    </div>
  );
};

export default page;
