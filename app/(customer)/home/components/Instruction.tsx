"use client";

import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import HeaderContent from "./HeaderContent";

const content = [
  {
    title: "Pilih Desain Undangan",
    description: "Jelajahi berbagai pilihan desain undangan yang kami sediakan. Temukan tema yang sesuai dengan acara Anda dan personalisasikan sesuai keinginan.",
    content: <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">Pilih Desain Undangan</div>,
  },
  {
    title: "Isi Informasi Acara",
    description: "Masukkan informasi penting seperti tanggal, lokasi, dan detail acara Anda. Platform kami memudahkan Anda mengisi data dengan cepat dan akurat.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image src="/info_form_demo.webp" width={300} height={300} className="h-full w-full object-cover" alt="Formulir informasi acara" />
      </div>
    ),
  },
  {
    title: "Pratinjau dan Konfirmasi",
    description: "Lihat pratinjau undangan Anda secara langsung. Pastikan semua detail sudah benar sebelum mengirimkannya kepada tamu Anda.",
    content: <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">Pratinjau dan Konfirmasi</div>,
  },
  {
    title: "Kirim Undangan ke Tamu",
    description: "Sebarkan undangan dengan mudah melalui email, WhatsApp, atau media sosial lainnya. Pantau siapa saja yang telah menerima undangan Anda.",
    content: <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">Kirim Undangan ke Tamu</div>,
  },
];

const Instruction = () => {
  return (
    <div>
      <HeaderContent titleContent="Panduan Pemesanan" buttonText="Mulai Sekarang" descriptionContent="Ikuti langkah mudah berikut untuk memesan undangan online Anda dengan cepat dan praktis." />
      <StickyScroll content={content} />
    </div>
  );
};

export default Instruction;
