import React from "react";

const TermsAndConditions: React.FC = () => {
  return (
    <div>
      {/* Terms of Service */}
      <div>
        <section className="mx-auto grid max-w-screen-xl gap-y-4 gap-x-20 px-4 py-10 sm:px-10 lg:grid-cols-10">
          <h2 className="w-full text-3xl font-bold text-primary sm:text-4xl lg:col-span-3">Terms of Service</h2>
          <div className="mr-20 text-gray-600 lg:col-span-5">
            <p>
              Selamat datang di layanan Undangan Online kami. Dengan mengakses dan menggunakan platform ini, Anda setuju untuk mematuhi syarat dan ketentuan yang tercantum dalam dokumen ini. Ketentuan ini berlaku untuk semua fitur, produk,
              dan layanan yang kami tawarkan melalui platform kami. Kami berhak untuk mengubah, memperbarui, atau menghentikan layanan ini kapan saja tanpa pemberitahuan sebelumnya. Penggunaan layanan kami diatur oleh kebijakan ini yang
              dapat diperbarui sewaktu-waktu.
            </p>
            <p>
              Pengguna bertanggung jawab untuk menjaga keamanan akun mereka, termasuk username dan kata sandi. Anda setuju untuk memberi tahu kami segera jika akun Anda digunakan tanpa izin atau jika ada pelanggaran terhadap keamanan akun
              Anda.
            </p>
          </div>
          <div className="lg:col-span-2">
            <p className="font-medium">Download</p>
            <a href="#" className="font-medium text-blue-600">
              .pdf
            </a>
          </div>
        </section>
      </div>

      {/* Privacy Policy */}
      <div>
        <section className="mx-auto grid max-w-screen-xl gap-y-4 gap-x-20 border-b border-gray-300 px-4 py-10 sm:px-10 lg:grid-cols-10">
          <h2 className="w-full text-3xl font-bold text-primary sm:text-4xl lg:col-span-3">Privacy Policy</h2>
          <div className="mr-20 text-gray-600 lg:col-span-5">
            <p>
              Kami menghargai privasi Anda dan berkomitmen untuk melindungi informasi pribadi Anda. Kebijakan Privasi ini menjelaskan jenis informasi yang kami kumpulkan, bagaimana kami menggunakannya, dan bagaimana kami melindungi data
              Anda. Kami hanya mengumpulkan informasi yang diperlukan untuk menyediakan layanan kami, seperti alamat email, nama pengguna, dan preferensi undangan.
            </p>
            <p>
              Kami tidak akan membagikan atau menjual data pribadi Anda kepada pihak ketiga tanpa izin eksplisit Anda, kecuali jika diwajibkan oleh hukum atau dalam hal ada pelanggaran yang melibatkan penyalahgunaan platform. Data yang
              dikumpulkan hanya akan digunakan untuk tujuan pengelolaan undangan, pengiriman pemberitahuan terkait acara, dan peningkatan pengalaman pengguna.
            </p>
            <p>Kami juga menggunakan teknologi keamanan yang mutakhir untuk melindungi data pribadi Anda dari akses yang tidak sah. Semua data yang disimpan di platform kami dienkripsi dan diakses hanya oleh personel yang berwenang.</p>
          </div>
          <div className="lg:col-span-2">
            <p className="font-medium">Download</p>
            <a href="#" className="font-medium text-blue-600">
              .pdf
            </a>
          </div>
        </section>
      </div>

      {/* User Conduct */}
      <div>
        <section className="mx-auto grid max-w-screen-xl gap-y-4 gap-x-20 px-4 py-10 sm:px-10 lg:grid-cols-10">
          <h2 className="w-full text-3xl font-bold text-primary sm:text-4xl lg:col-span-3">User Conduct</h2>
          <div className="mr-20 text-gray-600 lg:col-span-5">
            <p>
              Kami berharap pengguna platform ini akan selalu bertindak dengan integritas dan rasa hormat terhadap sesama. Anda setuju untuk tidak menggunakan platform ini untuk melakukan tindakan ilegal atau merugikan pihak lain. Beberapa
              larangan yang perlu Anda patuhi meliputi:
            </p>
            <ul className="list-disc pl-5">
              <li>Penggunaan bahasa atau konten yang menyinggung, kasar, atau diskriminatif.</li>
              <li>Pengunggahan materi yang melanggar hak cipta atau hak kekayaan intelektual pihak ketiga.</li>
              <li>Penggunaan layanan untuk spam, penipuan, atau aktivitas ilegal lainnya.</li>
              <li>Mengakses atau mencoba mengakses akun atau data pengguna lain tanpa izin.</li>
            </ul>
            <p>
              Kami berhak untuk menangguhkan atau menghentikan akses Anda ke layanan kami jika kami menemukan pelanggaran terhadap ketentuan ini. Setiap tindakan yang merugikan integritas platform kami akan segera ditindaklanjuti sesuai
              dengan hukum yang berlaku.
            </p>
          </div>
          <div className="lg:col-span-2">
            <p className="font-medium">Download</p>
            <a href="#" className="font-medium text-blue-600">
              .pdf
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
