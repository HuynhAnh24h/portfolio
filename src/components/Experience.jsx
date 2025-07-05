import React from "react";
import { FaGoogle, FaTwitter, FaAmazon, FaPaypal } from "react-icons/fa";


const jobs = [
  {
    company: "Firegroup",

    period: "2020",
  },
  {
    company: "Icaviet",

    period: "2022",
  },
  {
    company: "Kornbest VietNam",

    period: "2025",
  },
];

const skills = [
  "Javascript",
  "React JS",
  "Wordpress",
  "Some Nodejs",
  "Mongodb and Mysql",
];

export default function Experience() {
  return (
    <section className="bg-black text-white px-6 py-20 font-mono">
      <div className="max-w-7xl mx-auto">
        <p className="text-green-500 text-sm mb-2">• Experience</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-10">
         1+ years of passion{" "}
          <span className="text-gray-500">for</span>{" "}
          <span className="text-gray-400">frontend techniques</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Company list */}
          <div className="space-y-4">
            {jobs.map((job, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between border border-[#1f1f1f] rounded-lg px-5 py-4 bg-[#111111] hover:border-white transition"
              >
                <div className="flex items-center gap-4">
                  {job.icon}
                  <span className="text-lg font-semibold">{job.company}</span>
                </div>
                <span className="text-gray-500 text-sm">{job.period}</span>
              </div>
            ))}
          </div>

          {/* Job Description */}
          <div>
            <h3 className="text-green-600 text-lg font-semibold mb-4">
              Junior Frontend Developer (React JS)
            </h3>
            <ul className="list-disc space-y-3 text-gray-300 ml-5 text-sm leading-relaxed">
              <li>
                I have hands-on experience building dynamic and responsive user interfaces using React.js..


              </li>
              <li>
                My work includes integrating frontend components with RESTful APIs,
                managing authentication flows with JWT,
                and handling user interactions with React hooks and custom contexts.
              </li>
              <li>
                I’ve developed reusable components, implemented secure login/logout systems, and optimized performance using techniques like lazy loading and memoization. I follow best practices in component-based architecture and state management to ensure scalability and maintainability.
                My React applications are designed to interact seamlessly with backend services I developed using Node.js and Express, creating robust fullstack solutions.
              </li>
            </ul>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-3 mt-6">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="border border-[#1f1f1f] px-3 py-1 rounded-md text-sm bg-[#0d0d0d] hover:border-white transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
