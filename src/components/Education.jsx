import React from "react";
import { FaBook, FaSearch } from "react-icons/fa";

const educationData = [
  {
    year: "2017–2020",
    title: "Hutech University",
    desc: "Infomation Technology",
  },
  {
    year: "2020–2022",
    title: "MindX",
    desc: "Learning HTML, CSS, JS and ReactJS",
  },
];

const researchData = [
  {
    year: "2020-2022",
    title: "Firegroup Technologi",
    desc: "Technical Support Swift App, Transcy App and Alireview app in shopify platform",
  },
  {
    year: "2022-2023",
    title: "Wordpress Developer",
    desc: "Build website with wordpress ( html, css, js, PHP) theme and plugin with Elementor and ACF Custom Field Plugin",
  },
  {
    year: "2024 - Today ",
    title: "IT helpdesk and Freelancer FrontEnd Web Developer",
    desc: "Using React JS design UX/UI for website and mini app ( chanchan-survay, sayakamanagement) and write some API with nodejs and mongodb",
  },
];

export default function Education() {
  return (
    <section className="bg-black text-white px-6 py-20 font-mono">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        {/* Education */}
        <div className="bg-[#0d0d0d] p-6 rounded-xl border border-[#1f1f1f]">
          <h3 className="text-xl text-white flex items-center gap-2 mb-6">
            <FaBook className="text-green-400" />
            Education
          </h3>
          <div className="space-y-6 relative border-l border-gray-600 pl-4">
            {educationData.map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[0.4rem] top-[0.2rem] w-2 h-2 rounded-full bg-gray-400" />
                <p className="text-sm text-gray-400">{item.year}:</p>
                <p className="text-green-400 font-semibold">{item.title}</p>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Research */}
        <div className="bg-[#0d0d0d] p-6 rounded-xl border border-[#1f1f1f]">
          <h3 className="text-xl text-white flex items-center gap-2 mb-6">
            <FaSearch className="text-green-400" />
            Researched
          </h3>
          <div className="space-y-6 relative border-l border-gray-600 pl-4">
            {researchData.map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[0.4rem] top-[0.2rem] w-2 h-2 rounded-full bg-gray-400" />
                <p className="text-sm text-gray-400">{item.year}:</p>
                <p className="text-green-400 font-semibold">{item.title}</p>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
