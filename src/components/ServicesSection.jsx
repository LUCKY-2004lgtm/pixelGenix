import React from "react";
import {
  Briefcase, Code, Smartphone, Globe,
  Monitor, ShieldCheck, Users, Cpu
} from "lucide-react";
import { motion } from "framer-motion";



const services = [
  { icon: <Code size={36} />, title: "Software Development", bgImage: 'https://images.unsplash.com/photo-1637073849667-91120a924221?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },

  { icon: <Smartphone size={36} />, title: "App Development", bgImage: 'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },

  { icon: <Globe size={36} />, title: "Web Development", bgImage: 'https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },

  { icon: <Monitor size={36} />, title: "Design Solutions", bgImage: 'https://plus.unsplash.com/premium_photo-1683133723694-f5eff1e4c047?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },

  { icon: <ShieldCheck size={36} />, title: "Ecommerce Solutions", bgImage: 'https://media.istockphoto.com/id/1646500908/photo/closeup-group-of-asian-people-software-developers-using-computer-to-write-code-sitting-at.jpg?s=2048x2048&w=is&k=20&c=NalbwrCClu1UVjYLsFw7z3jWn8tUcry8VtAg2Zr_wB4=' },

  { icon: <Cpu size={36} />, title: "QA Solutions", bgImage: 'https://media.istockphoto.com/id/1168430736/photo/3d-word-q-a-on-chalkboard-background-3d-rendering.jpg?s=2048x2048&w=is&k=20&c=ul-_DvhZNpwHhmPu4w1IQ3pMNZ7z55VGFngbzRVAWD0=' },

  { icon: <Briefcase size={36} />, title: "Managed IT Services", bgImage: 'https://images.unsplash.com/photo-1621036579842-9080c7119f67?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },

  { icon: <Users size={36} />, title: "Remote Team", bgImage: 'https://media.istockphoto.com/id/1363105039/photo/businesspeople-do-video-conference-call-with-big-wall-tv-in-office-meeting-room-diverse-team.jpg?s=1024x1024&w=is&k=20&c=2wWS_wvoJMeNmWOseLa2c-WIO0rpi-Y9RSrazNBjeZs=' },
];

const ServicesSection = () => {
  return (
    <section className="relative bg-[#f9fafc] py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-100 to-gray-200 opacity-50 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-extrabold text-gray-800 mb-4 tracking-tight">
            <span className="text-indigo-600">Services</span> We Offer
          </h2>
          <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
            Your one-stop solution to meet your business vision and mission — only at <strong>PixelGenix</strong>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group h-52 bg-white rounded-2xl p-6 shadow-[0_8px_24px_rgba(0,0,0,0.05)] hover:shadow-xl transition duration-300 hover:scale-105 hover:-translate-y-1 border-t-4 border-indigo-100 hover:border-indigo-500"
              style={{

                backgroundImage: `url(${service.bgImage})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                
              }}

            >

              <div className="text-indigo-600 mb-4 group-hover:animate-pulse">
                {service.icon}
              </div>
              <h4 className="text-[22px] font-bold text-white">{service.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
