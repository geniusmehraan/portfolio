"use client"
import Image from "next/image"
import { useState } from "react"
import AyaanImage from "../../../public/Ayaan.jpg"
import techInkwno from "../../../public/techInkwno.png"
import Link from "next/link"

const About = () => {

  
    const [Itemseted,setItemseted] = useState("skills")
  return (
    <div className="flex flex-col  pt-20 pr-8 items-end w-[100%] bg-[#111] mx-auto">
      <div className="flex flex-col gap-4 w-[70%] ">
        <h1 className="text-5xl font-semibold">About Me</h1>
        <p>I'm a 13-year-old MERN stack developer who loves coding, especially with JavaScript, TypeScript, and Prisma. Right now, I'm looking for an internship where I can work on MERN stack projects. I also enjoy making fun and educational YouTube shorts about tech and science for an Indian audience. Besides coding, I help my siblings learn and explore new things</p>
       
        
        <ul className="flex cursor-pointer w-[30%] text-lg font-medium items-center justify-between  pt-6 pb-2">
            <li className="border-b-2 text-xl px-2 mx-2 border-red-800">Skills</li>
        </ul>
       
        
   


<div className="flex w-full">

        
            <div className="w-full items-start flex pb-20 ">
       <ul className="text-xl flex gap-8  flex-wrap w-[80%]">
                            <li className="bg-white px-4 p-4 rounded-full text-black">MERN stack</li>
                            <li className="bg-white px-4 p-4 rounded-full text-black">AWS developmet</li>
                            <li className="bg-white px-4 p-4 rounded-full text-black">Vercel developmet</li>
                            <li className="bg-white px-4 p-4 rounded-full text-black">Prisma</li>
                            <li className="bg-white px-4 p-4 rounded-full text-black">Next.js</li>
                            <li className="bg-white px-4 p-4 rounded-full text-black">Stripe</li>
                            <li className="bg-white px-4 p-4 rounded-full text-black">Clerk</li>
                            <li className="bg-white px-4 p-4 rounded-full text-black">Typescript</li>
                            <li className="bg-white px-4 p-4 rounded-full text-black">Git/Github</li>
                            <li className="bg-white px-4 p-4 rounded-full text-black">JWT authentication</li>
                            <li className="bg-white px-4 p-4 rounded-full text-black">SQL</li>
                            <li className="bg-white px-4 p-4 rounded-full text-black">Api development</li>
                        </ul>
            </div>
        
     
       </div>

   

     
      </div>
      
       
    </div>
  )
}

export default About
