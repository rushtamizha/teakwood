"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { RiWhatsappLine, RiTimeLine, RiMapPin2Line, RiArrowRightLine, RiStarFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { packages } from "@/data.js";
// Swiper Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const CategoryPackages = () => {

  const handleBookNow = (pkg) => {
    const phoneNumber = "919884546406"; 
    const message = `*Inquiry for ${pkg.title}*%0A*Duration:* ${pkg.duration}%0A*Category:* ${pkg.category}%0A%0AHi Teakwood Holidays, I saw this package on your website. Please share more details and availability.`;
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section className="py-14 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#2a97d0] font-black uppercase tracking-[0.3em] text-[11px]">Handpicked Collections</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#253061] mt-4">
              Explore Our Signature <span className="text-[#2a97d0]">Honeymoon Packages.</span>
            </h2>
          </div>
        </div>

        {/* Swiper Container */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          autoplay={{ delay: 4000 }}
          className="pb-16 !overflow-visible"
          breakpoints={{
            320: { slidesPerView: 1.2, spaceBetween: 20 },
            768: { slidesPerView: 2.2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 }
          }}
        >
          {packages.map((pkg, index) => (
            <SwiperSlide key={index} className="max-w-[400px]">
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 h-full flex flex-col "
              >
                {/* Image Section */}
                <div className="relative h-[280px] w-full group">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title} 
                    className="w-full h-full object-cover  transition-transform duration-700" 
                  />
                  <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full flex items-center gap-2">
                    <RiStarFill className="text-yellow-500" size={14} />
                    <span className="text-[10px] font-black text-[#253061] uppercase tracking-tighter">Top Rated</span>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/50 to-transparent">
                    <h3 className="text-white text-xl font-bold mt-1">{pkg.title}</h3>
                  </div>
                </div>

                {/* Details Section */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-gray-400">
                      <RiTimeLine size={18} />
                      <span className="text-xs font-bold">{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#2a97d0]">
                      <RiMapPin2Line size={18} />
                      <span className="text-xs font-bold">Inclusive</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-1">
                    {pkg.description}
                  </p>

                  <button 
                    onClick={() => handleBookNow(pkg)}
                    className="w-full py-4 bg-[#253061] text-white rounded-2xl font-black text-[13px] flex items-center justify-center gap-3 shadow-xl shadow-[#253061]/20 hover:bg-[#2a97d0] transition-all group"
                  >
                    <div className="p-1 bg-[#2a97d0] rounded-md group-hover:bg-white group-hover:text-[#2a97d0] transition-colors">
                      <RiWhatsappLine size={18} />
                    </div>
                    BOOK VIA WHATSAPP
                  </button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet-active {
          background: #2a97d0 !important;
          width: 24px !important;
          border-radius: 5px !important;
        }
      `}</style>
    </section>
  );
};

export default CategoryPackages;