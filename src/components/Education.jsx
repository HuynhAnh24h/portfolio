import React from "react";
import { FaBook, FaSearch } from "react-icons/fa";

const educationData = [
  {
    year: "2016–2020",
    title: "PhD",
    desc: "Bachelor’s Degree in Computer Science",
  },
  {
    year: "2018–2022",
    title: "Harvard university",
    desc: "Certificate in React and Redux, Node.Js Developer Course",
  },
  {
    year: "2010–2012",
    title: "Oxford university",
    desc: "Certification in Full Stack Web Development",
  },
  {
    year: "2016–2020",
    title: "Oxford university",
    desc: "Certificate in React and Redux, Node.Js Developer Course",
  },
];

const researchData = [
  {
    year: "2016–2020",
    title: "Advanced Data Analytics with Big data Tools",
    desc: "Utilized bid data tools for advanced analytics and insights.",
  },
  {
    year: "2018–2022",
    title: "Cloud-Native Application Architectures",
    desc: "Studied best practices for designing cloud-native applications.",
  },
  {
    year: "2016–2020",
    title: "AI-Driven User Experience Personalization",
    desc: "Leveraged AI to personalize user experiences based on behavior.",
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
