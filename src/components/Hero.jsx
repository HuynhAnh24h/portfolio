import React from "react";
import {
  FaWordpress,
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,

} from "react-icons/fa";
 import { SiMongodb, SiMysql, SiPostgresql, SiHeroku, SiExpress, SiGraphql } from "react-icons/si";

export default function Hero() {
  return (
    <section className="bg-black text-white px-4 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Ảnh trái */}
        <div className="mb-8 md:mb-0 md:w-1/2 flex justify-center">
          <div className="bg-[#1a1a1a] rounded-[2rem] p-2 w-[300px] md:w-[400px] aspect-square overflow-hidden rotate-3 shadow-lg">
            <img
              src="https://lh3.googleusercontent.com/a/ACg8ocLbfRKtNBIw4OFSIrs8IoBe7LBgQr8oSUZM7U-cmUjnH7VpFUA=s288-c-no" // thay bằng đúng path ảnh bạn lưu
              alt="John"
              className="rounded-[2rem] w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Nội dung phải */}
        <div className="md:w-1/2 space-y-4 px-4">
          <p className="text-sm text-[#f87171]">&lt;span&gt; Hey, Otobi &lt;/span&gt;</p>
          <h1 className="text-3xl md:text-5xl font-bold font-mono">
            Freelancer <span className="text-[#14f195]">{`{Full Stack}`}</span> <br />
            Web & App Developer<span className="text-[#14f195]">_</span>
          </h1>
          <p className="text-gray-400 text-md leading-relaxed">
            &lt;p&gt; With expertise in cutting-edge technologies such as <br />
            <span className="text-red-400">Nodejs, Mongodb, Wordpress and ReactJS</span>... i deliver web <br />
            solutions that are both innovative and robust. &lt;/p&gt;
          </p>

          {/* Icon tech */}
          <div className="flex items-center space-x-4 pt-4 text-2xl">
              <FaHtml5 className="text-orange-400" />
             <FaCss3Alt className="text-blue-400" />
           <FaNodeJs className="text-green-400" />
           <SiMongodb className="text-green-600" />
            <FaReact className="text-[#61dafb]" />
            <FaWordpress className="text-[#1C7A9B]" />
          </div>
        </div>
      </div>
    </section>
  );
}
