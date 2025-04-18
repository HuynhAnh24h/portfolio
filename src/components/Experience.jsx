import React from "react";
import { FaGoogle, FaTwitter, FaAmazon, FaPaypal } from "react-icons/fa";


const jobs = [
  {
    company: "Google",
   
    period: "2017–Present",
  },
  {
    company: "X(Twitter)",

    period: "2019–2022",
  },
  {
    company: "Amazon",

    period: "2015–2020",
  },
  {
    company: "Paypal",

    period: "2014–Present",
  },
];

const skills = [
  "Python",
  "Tensorflow",
  "Angular",
  "Kubernetes",
  "GCP",
];

export default function Experience() {
  return (
    <section className="bg-black text-white px-6 py-20 font-mono">
      <div className="max-w-7xl mx-auto">
      <p className="text-green-500 text-sm mb-2">• Experience</p>
      <h2 className="text-3xl md:text-5xl font-bold mb-10">
        12+ years of passion{" "}
        <span className="text-gray-500">for</span>{" "}
        <span className="text-gray-400">programming techniques</span>
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
            Senior Software Engineer
          </h3>
          <ul className="list-disc space-y-3 text-gray-300 ml-5 text-sm leading-relaxed">
            <li>
              Led development of scalable web applications, improving
              performance and user experience for millions of users.
            </li>
            <li>
              Implemented machine learning algorithms to enhance search
              functionality.
            </li>
            <li>
              Collaborated with cross-functional teams to integrate new features
              seamlessly.
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
