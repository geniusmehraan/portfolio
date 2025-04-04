import Image from "next/image"
import AyaanImage from "../../../public/Ayaan.jpg"
import { FaGithub } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import Link from "next/link";

const Body = () => {
  return (
    <div className="w-[80%]  overflow-hidden h-[91.1vh] py-8 flex justify-between mx-20 p-4 items-center ">
      <div className="flex flex-col  items-start gap-4 justify-center">
      <span className="font-sans text-xl relative">A full-stack web developer</span>
        <h1 className="text-white leading-20 text-6xl font-semibold">Hi,I'm <span className="text-pink-900 ">Ayaan</span><br /> from India.
        
        </h1>

        <div className="flex gap-12  w-full px-12 p-4 mt-8 items-center justify-start">
          <Link href={"https://github.com/geniusmehraan"}>
        <FaGithub className="text-4xl"/>
        </Link>
        <Link href={"https://x.com/genuisayaan"}>
        <RiTwitterXLine className="text-4xl"/>
        </Link>
        </div>

      </div>
      <div className="">
        <Image className="w-[30rem] h-[30rem] borderBlur  rounded-full" src={AyaanImage} alt="bg-image"></Image>
      </div>
    </div>
    
  )
}

export default Body
