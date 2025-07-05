// src/components/MySkills.jsx
import {
    FaNodeJs, FaCss3Alt, FaHtml5, FaReact,
    FaGitAlt, FaPython, FaDocker, FaAws,FaWordpress
  } from "react-icons/fa";
  import { SiMongodb, SiMysql, SiPostgresql, SiHeroku, SiExpress, SiGraphql } from "react-icons/si";
  
  export default function MySkill() {
    return (
      <section id="skills" className="bg-black py-16 px-6 text-white">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-green-500 text-xl font-mono mb-2">• Projects</h2>
            <h3 className="text-5xl font-bold mb-12">My Skills</h3>
            <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Icon Grid */}
            <div className="grid grid-cols-6 gap-6 text-5xl text-white">
                <FaNodeJs className="hover:text-green-400" />
                <FaCss3Alt className="hover:text-blue-400" />
                <FaHtml5 className="hover:text-orange-400" />
                <FaReact className="hover:text-cyan-400" />
                <FaGitAlt className="hover:text-red-500" />
                <SiMongodb className="hover:text-green-600" />
                <FaWordpress className="hover:text-[#1C7A9B]" />
            </div>
    
            {/* Text List */}
            <div className="text-gray-300 text-md font-mono space-y-4 border border-gray-700 p-6 rounded-xl w-full">
                <p>• <span className="text-white">Front-End:</span> HTML, CSS, JavaScript, React</p>
                <p>• <span className="text-white">Back-End:</span> Node.js, Express, JWT</p>
                <p>• <span className="text-white">Tools & Platforms:</span> Git,Vercel, Render, MongoDB Cloud</p>
                <p>• <span className="text-white">Others:</span> RESTful APIs</p>
            </div>
            </div>
        </div>
      </section>
    );
  }
  