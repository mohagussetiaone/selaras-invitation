import React from "react";

const pasangan = [
  {
    id: 1,
    namaPasangan: "Rina & Andi",
    tanggal: "12 Desember 2024",
    gambar: "https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    judul: "The Pines and the Mountains",
    deskripsi: "Perjalanan kami dimulai dengan dua hati yang saling bertemu, berkenalan, dan jatuh cinta. Kami merasa lebih kuat, lebih bersemangat, dan lebih penuh cinta dari sebelumnya.",
  },
  {
    id: 2,
    namaPasangan: "Siti & Budi",
    tanggal: "10 Desember 2024",
    gambar: "https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    judul: "The Coding Mania",
    deskripsi: "Kami terus tumbuh bersama, mengatasi rintangan dan menikmati momen-momen indah dalam hidup. Kami merasa diberkahi atas cinta yang kami miliki.",
  },
  {
    id: 3,
    namaPasangan: "Lia & Fadil",
    tanggal: "5 Desember 2024",
    gambar: "https://images.unsplash.com/photo-1496395031280-4201b0e022ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    judul: "Architectural Warfare",
    deskripsi: "Cinta kami adalah fondasi yang kokoh, dan dengan dukungan satu sama lain, kami siap membangun masa depan yang lebih indah.",
  },
  {
    id: 4,
    namaPasangan: "Diana & Roy",
    tanggal: "3 Desember 2024",
    gambar: "https://images.unsplash.com/photo-1510081887155-56fe96846e71?ixid=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
    judul: "Blues in Architecture",
    deskripsi: "Kami merayakan cinta yang tumbuh, dan hari ini adalah awal dari perjalanan baru yang penuh kebahagiaan.",
  },
];

const Couple: React.FC = () => {
  return (
    <main className="py-20 px-2">
      <article>
        <header>
          <img
            className="-z-10 absolute top-0 left-0 mt-10 h-96 w-full object-cover"
            src="https://images.unsplash.com/photo-1504672281656-e4981d70414b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Blog image"
          />
        </header>
      </article>
      <aside aria-label="Meet Couple" className="mx-auto max-w-6xl py-20 bg-background border border-primary rounded-xl">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          {/* Heading */}
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Pasangan yang Berbahagia Hari Ini</h2>
            <p className="mx-auto max-w-screen-md text-center text-gray-600">Lihat kisah mereka dan jadilah bagian dari perjalanan cinta mereka.</p>
          </div>

          {/* Articles */}
          <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
            {pasangan.map((pasanganItem) => (
              <article key={pasanganItem.id} className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
                <a href="#" className="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
                  <img src={pasanganItem.gambar} loading="lazy" alt="" className="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200" />
                </a>

                <div className="flex flex-col gap-2">
                  <span className="text-sm text-gray-400">{pasanganItem.tanggal}</span>
                  <h2 className="text-xl font-bold text-gray-800">
                    <a href="#" className="active:text-primary transition duration-100 hover:text-primary">
                      {pasanganItem.namaPasangan}
                    </a>
                  </h2>
                  <p className="text-gray-500">{pasanganItem.deskripsi}</p>
                  <div>
                    <a href="#" className="active:text-primary font-semibold text-primary transition duration-100 hover:text-primary">
                      Read more
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </aside>
    </main>
  );
};

export default Couple;
