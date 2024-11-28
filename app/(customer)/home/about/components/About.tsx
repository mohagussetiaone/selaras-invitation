"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const About: React.FC = () => {
  return (
    <section className="w-full py-8 relative" id="about">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-5 lg:px-5">
        <div className="w-full justify-start items-center grid lg:grid-cols-2 grid-cols-1 md:gap-10">
          <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
            <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
              <Image className="rounded-xl object-cover" src="https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="about Us image" width={500} height={500} />
            </div>
            <Image className="sm:ml-0 ml-auto rounded-xl object-cover" src="https://images.pexels.com/photos/916344/pexels-photo-916344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="about Us image" width={500} height={500} />
          </div>
          <div className="w-full flex-col justify-center lg:items-start items-center inline-flex">
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">Mendampingi Anda dengan Layanan Undangan Online Terbaik!</h2>
                <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                  Di Selaras Invitation, kami tidak hanya menawarkan desain undangan yang elegan, tetapi juga pengalaman yang mudah dan menyenangkan untuk setiap pelanggan. Setiap undangan yang kami buat adalah hasil dari komitmen kami
                  untuk memberikan solusi online yang cepat, personal, dan terbaik untuk momen spesial Anda.
                </p>
              </div>
              <div className="w-full lg:justify-start justify-center flex-wrap items-center sm:gap-10 gap-5 inline-flex">
                <div className="flex-col justify-start items-start inline-flex">
                  <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">5,972+</h4>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">Pasangan Bahagia</h6>
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">122,000+</h4>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">Tamu Terundang</h6>
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">10,000+</h4>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">Undangan Dikirim</h6>
                </div>
              </div>
            </div>
            <Link href="/home/about">
              <button className="sm:w-fit w-full px-3.5 py-2 bg-brand-600 hover:bg-brand-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <span className="px-1.5 text-white text-sm font-medium leading-6">Selengkapnya</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
