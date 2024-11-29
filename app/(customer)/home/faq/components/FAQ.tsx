"use client";

import React, { useState } from "react";
import HeaderContent from "../../components/HeaderContent";

interface AccordionItemProps {
  header: string;
  text: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ header, text }) => {
  const [active, setActive] = useState<boolean>(false);

  const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setActive(!active);
  };

  return (
    <div className="mb-4 min-h-24 w-full rounded-lg bg-white shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] p-4">
      <button className="faq-btn flex w-full text-left" onClick={handleToggle}>
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5">
          <svg className={`fill-primary stroke-primary duration-200 ease-in-out ${active ? "rotate-180" : ""}`} width="17" height="10" viewBox="0 0 17 10" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>
        <div className="w-full">
          <h4 className="text-lg font-semibold text-dark dark:text-white">{header}</h4>
        </div>
      </button>
      <div className={`pl-16 duration-200 ease-in-out ${active ? "block" : "hidden"}`}>
        <p className="py-3 text-base leading-relaxed text-body-color dark:text-dark-6">{text}</p>
      </div>
    </div>
  );
};

const Accordion: React.FC = () => {
  const faqData = [
    {
      header: "Bagaimana cara memesan undangan online di Selaras Invitation?",
      text: "Anda dapat memesan undangan online melalui website kami. Pilih template yang diinginkan, isi detail acara, dan lakukan pembayaran.",
    },
    {
      header: "Berapa lama waktu pembuatan undangan setelah data diisi?",
      text: "Waktu pembuatan undangan online biasanya memakan waktu 1-2 hari kerja setelah semua data diterima.",
    },
    {
      header: "Apakah saya bisa melakukan revisi setelah undangan selesai?",
      text: "Ya, kami menyediakan 1 kali kesempatan revisi gratis untuk setiap pesanan.",
    },
    {
      header: "Metode pembayaran apa saja yang tersedia?",
      text: "Kami menerima pembayaran melalui transfer bank, e-wallet seperti GoPay, OVO, dan Dana.",
    },
    {
      header: "Apakah undangan online dapat digunakan untuk RSVP?",
      text: "Tentu saja, undangan kami dilengkapi fitur RSVP untuk memudahkan tamu mengonfirmasi kehadiran.",
    },
  ];

  return (
    <section className="relative z-20 overflow-hidden pb-12 dark:bg-dark lg:pb-[90px]">
      <div className="max-w-6xl mx-auto">
        <HeaderContent buttonText="FAQ" titleContent="Pertanyaan Umum" descriptionContent="Pertanyaan yang sering diajukan tentang pemesanan dan layanan Selaras Invitation." />
        <div className="flex flex-wrap">
          {faqData.map((item, index) => (
            <div key={index} className="w-full pl-4 pr-4 md:pl-4 md:pr-0 lg:w-1/2">
              <AccordionItem header={item.header} text={item.text} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accordion;
