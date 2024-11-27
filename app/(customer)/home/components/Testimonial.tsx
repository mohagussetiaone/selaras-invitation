"use client";

import React from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import HeaderContent from "./HeaderContent";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Undangan online ini benar-benar memudahkan saya dalam menyampaikan informasi ke tamu undangan. Desainnya elegan, mudah digunakan, dan hasilnya sangat memuaskan!",
      name: "Putri Ayu",
      designation: "Bride-to-be",
      src: "https://img.freepik.com/free-photo/couple-sitting-large-nest-bali_1157-33594.jpg",
    },
    {
      quote: "Proses pembuatan undangan online sangat cepat dan praktis. Banyak fitur menarik, seperti RSVP otomatis dan integrasi dengan Google Maps. Para tamu sangat terkesan!",
      name: "Rizky Pratama",
      designation: "Groom-to-be",
      src: "https://img.freepik.com/free-photo/bride-arranging-groom-s-bow-tie_23-2148746661.jpg",
    },
    {
      quote: "Platform undangan ini benar-benar mengubah cara saya berbagi momen spesial. Tampilannya cantik, responsif, dan sangat profesional. Terima kasih atas layanan yang luar biasa!",
      name: "Siti Nurhaliza",
      designation: "Bride",
      src: "https://img.freepik.com/free-photo/side-view-f-newlyweds-embraced-street_23-2148746637.jpg",
    },
    {
      quote: "Fitur-fitur seperti RSVP dan galeri foto membuat undangan kami terlihat lebih interaktif. Para tamu juga menyukainya karena sangat mudah diakses dari ponsel.",
      name: "Andi Wijaya",
      designation: "Groom",
      src: "https://img.freepik.com/premium-photo/couple-with-holding-hands-standing-against-decoration_1048944-4233234.jpg",
    },
    {
      quote: "Saya sangat puas dengan pelayanan yang diberikan. Timnya sangat responsif, dan hasil undangannya benar-benar sesuai dengan keinginan saya. Sangat direkomendasikan!",
      name: "Maria Natalia",
      designation: "Event Organizer",
      src: "https://img.freepik.com/free-photo/smiley-bride-groom-outdoors-together_23-2148746619.jpg",
    },
  ];

  return (
    <section className="py-20" id="testimonial">
      <HeaderContent buttonText="Cerita Mereka" titleContent="Kesan dan Cerita" descriptionContent="Dengarkan kisah inspiratif yang telah mempercayakan momen istimewa mereka kepada kami" />
      <AnimatedTestimonials testimonials={testimonials} />
    </section>
  );
};

export default Testimonials;
