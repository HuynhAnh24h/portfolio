import React from "react";
import {
  FaCode,
  FaDatabase,
  FaCogs,
  FaSyncAlt,
  FaShoppingCart,
  FaRobot,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Web & App Development",
    desc: "Crafting visually appealing and user-friendly interface using HTML, CSS, Javascript, and modern frameworks like React and Angular.",
  },
  {
    icon: <FaDatabase />,
    title: "Database Management",
    desc: "Crafting visually appealing and user-friendly interface using HTML, CSS, Javascript, and modern frameworks like React and Angular.",
  },
  {
    icon: <FaCogs />,
    title: "API Development",
    desc: "Crafting visually appealing and user-friendly interface using HTML, CSS, Javascript, and modern frameworks like React and Angular.",
  },
  {
    icon: <FaSyncAlt />,
    title: "Performance Optimization",
    desc: "Crafting visually appealing and user-friendly interface using HTML, CSS, Javascript, and modern frameworks like React and Angular.",
  },
  {
    icon: <FaShoppingCart />,
    title: "E-commerce Solutions",
    desc: "Crafting visually appealing and user-friendly interface using HTML, CSS, Javascript, and modern frameworks like React and Angular.",
  },
];

export default function Services() {
  return (
    <section className="bg-black text-white px-6 py-16 font-mono">
        <div className=" max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
            <p className="text-green-600 text-sm">What do I offer</p>
            <h2 className="text-3xl md:text-5xl font-bold">
            Designing <span className="text-white">Solutions</span>{" "}
            <span className="text-gray-400">Customized to Meet</span>
            <br />
            <span className="text-gray-400">Your Requirements</span>
            </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
            <div
                key={index}
                className="border border-gray-700 rounded-xl p-6 hover:shadow-lg hover:border-white transition duration-300 bg-[#111111]"
            >
                <div className="text-3xl text-white mb-4">{service.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">
                {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
                </p>
            </div>
            ))}
        </div>
      </div>
    </section>
  );
}
