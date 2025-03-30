import Image from "next/image"
import AyaanImage from "../../../public/2 ayaan.jpg"

const Body = () => {
  return (
    <div className="w-[60%] mt-14 py-8 flex justify-between mx-auto p-4 items-center">
      <div>
        <h1>Hi,there i am Ayaan Mehdi.</h1>
      </div>
      <div className="">
        <Image className="w-[18rem] h-[24rem] borderBlur animated rounded-4xl animate-pulse" src={AyaanImage} alt="bg-image"></Image>
      </div>
    </div>
  )
}

export default Body
