"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { RiWhatsappLine, RiTimeLine, RiSearch2Line, RiMapPin2Line } from "react-icons/ri";
import { packages } from "@/data.js";

const PackageListing = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Hill Station", "Coastal", "Backwater"];
  
  const filteredPackages = filter === "All" 
    ? packages 
    : packages.filter(p => p.category === filter);

  const handleWhatsApp = (pkg) => {
    const phoneNumber = "919884546406";
    const message = `*Inquiry for ${pkg.title} (${pkg.duration})*%0A%0AHi Teakwood Holidays, I'm interested in this package. Please share the itinerary and pricing.`;
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <span className="text-[#2a97d0] font-black uppercase tracking-[0.3em] text-[11px]">Explore Collections</span>
            <h1 className="text-4xl md:text-6xl font-black text-[#253061] mt-4">
              Our <span className="text-[#2a97d0]">Honeymoon</span> Packages.
            </h1>
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all ${
                  filter === cat 
                  ? "bg-[#253061] text-white shadow-lg" 
                  : "bg-white text-gray-400 hover:text-[#253061] border border-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Package Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              key={pkg.id}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-[0_30px_60px_-15px_rgba(37,48,97,0.1)] border border-gray-100 transition-all group"
            >
              {/* Image Box */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-black text-[#253061] uppercase tracking-tighter shadow-sm">
                  {pkg.category}
                </div>
              </div>

              {/* Content Box */}
              <div className="p-8">
                <div className="flex items-center gap-2 mb-2 text-[#2a97d0]">
                   <RiTimeLine size={16} />
                   <span className="text-[11px] font-black uppercase tracking-widest">{pkg.duration}</span>
                </div>
                <h3 className="text-xl font-black text-[#253061] mb-4 group-hover:text-[#2a97d0] transition-colors">
                  {pkg.title}
                </h3>
                
                {/* Inclusion Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {pkg.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold text-gray-400 bg-gray-50 px-3 py-1 rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => handleWhatsApp(pkg)}
                  className="w-full py-4 bg-[#253061] text-white rounded-2xl font-black text-[13px] flex items-center justify-center gap-3 hover:bg-[#2a97d0] transition-all group/btn shadow-xl shadow-[#253061]/10"
                >
                  <RiWhatsappLine size={20} className="group-hover/btn:scale-110 transition-transform" />
                  ENQUIRE NOW
                </button>
              </div>
            </motion.div>
          ))}
        </div>



      </div>
    </main>
  );
};

export default PackageListing;