import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const projects = [
  {
    title: "Integrate AI into the ecommerce system",
    client: "Conceptual JSC",
    time: "6 Months",
    techs: "Node.js, React, MongoDB, Stripe",
    image: "/images/project1.png", // bạn có thể thay bằng ảnh thật
    liveDemo: "#",
    github: "#"
  },
  {
    title: "Premium Goggles E-Commerce",
    client: "Fashion Lab",
    time: "4 Months",
    techs: "Next.js, Tailwind, Firebase",
    image: "/images/project2.png",
    liveDemo: "#",
    github: "#"
  },
  // Thêm nhiều project khác nếu muốn
];

export default function Project() {
  return (
    <section className="py-12 bg-black">
     <div className='max-w-7xl mx-auto'>
     <h2 className="text-4xl font-bold text-green-400 mb-8">• Projects<br /><span className='text-white'>My Recent Works</span></h2>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <img src={project.image} alt={project.title} className="rounded-xl w-full lg:w-1/2" />
              <div className="text-white space-y-4">
                <h3 className="text-green-400 text-xl font-mono">{project.title}</h3>
                <p className="text-gray-400">Developed an online learning platform with course management, quizzes and progress tracking.</p>
                <div className="text-red-400 font-bold">Project Info</div>
                <div className="text-white">
                  <p><strong>Client:</strong> {project.client}</p>
                  <p><strong>Completion Time:</strong> {project.time}</p>
                  <p><strong>Technologies:</strong> {project.techs}</p>
                </div>
                <div className="space-x-4">
                  <a href={project.liveDemo} className="text-green-400 underline">Live Demo</a>
                  <a href={project.github} className="text-white underline">View on Github</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
     </div>
    </section>
  );
}
