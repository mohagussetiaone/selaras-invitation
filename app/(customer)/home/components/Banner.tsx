import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner: React.FC = () => {
  return (
    <>
      <div
        id="home"
        style={{
          backgroundImage: "url('https://img.freepik.com/free-vector/hand-drawn-floral-wallpaper_52683-67169.jpg?t=st=1732503104~exp=1732506704~hmac=14acbfe3702fd511df0ad9ffa28fc6d92a88ee1e417c8dd554b1474eb7997dca&w=900')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto h-full">
          <div className="flex gap-2 flex-col justify-center items-start h-full">
            <h1 className="text-5xl font-bold text-black whitespace-normal md:whitespace-nowrap">Bagikan momen spesial </h1>
            <h1 className="text-3xl font-bold whitespace-normal md:whitespace-nowrap">
              <span className="text-black">dari </span>
              <span className="text-primary">Selaras Invitation</span>
            </h1>
            <p className="text-xl text-black my-8">Pilih tema undangan digital sesuai selera anda.</p>
            <div className="flex gap-2">
              <Button size="lg">Pesan</Button>
              <Button size="lg" variant="link" className="border border-primary">
                Pelajari
              </Button>
            </div>
          </div>
          {/* Auto-Scrolling Image Section */}
          <div className="hidden md:flex justify-center items-center h-full">
            <Swiper
              spaceBetween={20}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
            >
              <SwiperSlide>
                <Image
                  width={400}
                  height={400}
                  src="https://img.freepik.com/free-vector/hand-drawn-wedding-digital-invitation_23-2149981192.jpg?t=st=1732344345~exp=1732347945~hmac=7553b315857da11217ec5fa8c16de89083ce41b35ebaa985f4f0c1671a024ecb&w=740"
                  alt="Slide 1"
                  className="rounded-md object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={400}
                  height={400}
                  src="https://img.freepik.com/free-vector/hand-drawn-wedding-digital-invitation_23-2149981197.jpg?t=st=1732505640~exp=1732509240~hmac=86a415058cda2304a591eda3c38d975976788c37dfe482e5085c9ac47d0cac9b&w=740"
                  alt="Slide 2"
                  className="rounded-md object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={400}
                  height={400}
                  src="https://img.freepik.com/free-vector/postponed-wedding-announcement_23-2148563052.jpg?t=st=1732505677~exp=1732509277~hmac=1267963dcab9fed5d74a285d357cbd591f47e394df25f23abaed50d023f43187&w=740"
                  alt="Slide 3"
                  className="rounded-md object-cover"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
