import Link from "next/link"

const ProjectsWork = () => {

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
    

  return (
    <div className="flex flex-col w-[100%] items-center p-8">
      <h1 className="text-2xl">Project Works</h1>
    <div className="flex flex-wrap w-full justify-center gap-16 px-8 mt-5">
             
{
  Projects.map((project,id)=>(
    <div key={id} className="flex text-white flex-col w-[40%] p-4  gap-2 border rounded-md border-gray-600 px-8 ">
      <div className="flex gap-4 items-center justify-between">
        <h1 className="text-2xl text-[#ff9] ">{project.projectname}</h1>
        {project.link ?
        <Link href={project.link||"/"}>
            <p className="text-sm cursor-pointer text-black bg-white p-1 rounded-lg">Visit web</p>
            </Link>
            :
            ""
            }
        </div>
        
       
        <p className="  text-lg">{project.description}</p>
    </div>
  ))
}
</div>
</div>
  )
}

export default ProjectsWork
