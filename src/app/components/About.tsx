"use client"
import Image from "next/image"
import { useState } from "react"
import AyaanImage from "../../../public/Ayaan.jpg"
import techInkwno from "../../../public/techInkwno.png"
import Link from "next/link"

const About = () => {

  const Projects = [
    {
    projectname:"Realtime chat App",
    link:"https://chat-app-mehraan.onrender.com/",
    description:"A real-time chat application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack with Socket.IO for instant messaging. This app allows users to chat in real time with a smooth and interactive UI."
  },
  {
    projectname:"Twitter clone",
    link:"https://mehraan-twitter.onrender.com"
    ,
    description:"A full-stack Twitter clone built with the MERN stack that allows users to post tweets, like, comment, and follow others. The app includes authentication, a modern UI, and a scalable backend."
  },
  {
    projectname:"AI resume builder",
    link:"ai-resume-builder-ayaan.vercel.app"
    ,
    description:"A Next.js-powered SaaS platform that enables users to generate professional resumes effortlessly using AI. With customizable templates, real-time previews, and AI-driven content suggestions, this tool simplifies resume building for job seekers.The section i am currently working on is download."
  },
  {
    projectname:"Javascript based games and apps",
    description:"I have generally created hundereds of application while i was learning and experiencing the javascript and others libraries"
  },
  
]

    const [Itemseted,setItemseted] = useState("skills")
  return (
    <div className="flex flex-col  pt-20 pr-8 items-end w-[100%] bg-[#111] mx-auto">
      <div className="flex flex-col gap-4 w-[70%] ">
        <h1 className="text-5xl font-semibold">About Me</h1>
        <p>I'm a 13-year-old MERN stack developer who loves coding, especially with JavaScript, TypeScript, and Prisma. Right now, I'm looking for an internship where I can work on MERN stack projects. I also enjoy making fun and educational YouTube shorts about tech and science for an Indian audience. Besides coding, I help my siblings learn and explore new things</p>
        {Itemseted==="skills"?
        (
        <ul className="flex cursor-pointer w-[30%] text-lg font-medium items-center justify-between  pt-6 pb-2">
            <li className="border-b-2 border-red-800">Skills</li>
            <li onClick={()=>setItemseted("projects")}>Projects</li>
        </ul>
        )
        :
        (
            <ul className="flex cursor-pointer w-[30%] text-lg font-medium items-center justify-between  pt-6">
            <li onClick={()=>setItemseted("skills")}>Skills</li>
            <li className="border-b-2 border-red-800">Projects</li>
        </ul>
        )
    }


<div className="flex w-full">
{
        Itemseted==="skills" ?
        (
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
        ):
        (
            <div className="flex flex-col gap-16 text-black">
              {
                Projects.map((project,id)=>(
                  <div key={id} className="flex text-white flex-col w-full p-4 mt-2 gap-2 border-b border-gray-600">
                    <div className="flex gap-4 items-center ">
                      <h1 className="text-2xl font-bold">{project.projectname}</h1>
                      <Link href={project.link||"/"}>
                          <p className="text-base cursor-pointer text-black bg-white p-1 rounded-xl">Visit the web</p>
                          </Link>
                      </div>
                      
                     
                      <p className="text-purple-500 text-lg font-semibold">{project.description}</p>
                  </div>
                ))
              }
            </div>
        )
       }
       </div>

   

     
      </div>
      
       
    </div>
  )
}

export default About
