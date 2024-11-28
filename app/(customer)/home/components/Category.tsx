import React from "react";
import { MonitorCheck, BellRing, Airplay, TrendingUp } from "lucide-react";
import HeaderContent from "./HeaderContent";

const benefits = [
  {
    icon: <TrendingUp className="text-black" size={48} />,
    title: "Hemat Budget",
    description: "Membantu Anda menghemat biaya tanpa mengorbankan kesan mewah dan profesional.",
  },
  {
    icon: <BellRing className="text-black" size={48} />,
    title: "Mudah Dibagikan",
    description: "Hanya dengan satu klik, bagikan undangan ke teman dan keluarga melalui media sosial atau pesan instan.",
  },
  {
    icon: <MonitorCheck className="text-black" size={48} />,
    title: "Kehadiran",
    description: "Memudahkan tamu untuk mengonfirmasi kehadiran langsung melalui undangan.",
  },
  {
    icon: <Airplay className="text-black" size={48} />,
    title: "Ramah Lingkungan",
    description: "Mengurangi penggunaan kertas, mendukung kelestarian lingkungan.",
  },
];

const Category = () => {
  return (
    <section>
      <div className="w-full mx-auto bg-[#F2E8E7] px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl mx-auto py-20 text-start">
          {benefits.map((benefit, index) => (
            <div key={index}>
              {benefit.icon}
              <h2 className="text-xl font-bold mt-4">{benefit.title}</h2>
              <p className="text-gray-700 mt-2">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
