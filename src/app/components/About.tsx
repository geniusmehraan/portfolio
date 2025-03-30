"use client"
import Image from "next/image"
import { useState } from "react"
import AyaanImage from "../../../public/Ayaan.jpg"
import techInkwno from "../../../public/techInkwno.png"

const About = () => {
    const [Itemseted,setItemseted] = useState("skills")
  return (
    <div className=" mx-auto flex flex-col p-4 items-center bg-[#111] w-[100%]">
        <div className="flex items-center justify-center gap-2 ">
        <h1 className="text-3xl font-bold">About</h1>
        <Image className="w-[2rem] h-[2rem] borderBlur  rounded-full" src={AyaanImage} alt="bg-image"></Image>
        </div>
      <div className="flex w-full flex-col justify-center">
        <div className="flex w-full justify-center mt-4">
            {
               Itemseted=="skills"?
        <ul className="flex w-[20%] cursor-pointer items-center justify-between px-8">
             <li className="border-b-2 border-red-800 text-2xl">Skills</li>
            <li className="text-2xl" onClick={()=>setItemseted("education")}>Education</li>
          
        </ul>
        :
        <ul className="flex w-[20%] cursor-pointer items-center justify-between px-8">
             <li className="text-2xl" onClick={()=>setItemseted("skills")}>Skills</li>
            <li className="border-b-2 border-red-800 text-2xl">Education</li>
          
        </ul>
        }
        </div>
        
            {
                Itemseted=="skills"?
                (
                    <div className="flex items-start justify-start w-[50%] p-4 bg-[#122] gap-20 shadow-2xl mt-4 rounded-2xl mx-auto">
                        <ul className="text-2xl  flex gap-2 flex-col">
                            <li>1. MERN stack</li>
                            <li>2. AWS developmet</li>
                            <li>3. Vercel developmet</li>
                            <li>4. Prisma</li>
                            <li>5. Next.js</li>
                            <li>6. Stripe</li>
                            <li>7. Clerk</li>
                            <li>8. Typescript</li>
                            <li>9. Git/Github</li>
                            <li>10. JWT authentication</li>
                            <li>11. SQL</li>
                            <li>12. Api development</li>
                        </ul>
                        <Image src={techInkwno} alt="" className="h-[250px] w-[200px] rounded-xl"/>
                    </div>
                )
                :(
                    <div className="flex h-[60vh] items-center justify-start w-[50%] p-4 bg-[#122] shadow-2xl mt-4 rounded-2xl mx-auto">

                    </div>
                )
            }
       
      </div>
    </div>
  )
}

export default About
