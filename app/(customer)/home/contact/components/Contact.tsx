import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6 text-white" />,
    title: "Email",
    content: "selarasinvitation@gmail.com",
  },
  {
    icon: <MapPin className="w-6 h-6 text-white" />,
    title: "Kantor",
    content: "JL Menteng Dalam RT015/011 No 58 Kel Menteng Dalam Kec Tebet Kota Jakarta Selatan",
  },
  {
    icon: <Phone className="w-6 h-6 text-white" />,
    title: "Hubungi",
    content: "0878 8515 9098",
  },
];

const ContactSection: React.FC = () => {
  return (
    <section className="mb-32">
      <div className="w-full relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d247.89215682213162!2d106.8403089674591!3d-6.227492999999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1732849065395!5m2!1sid!2sid"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="block max-w-6xl mx-auto rounded-xl p-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] -mt-[180px] backdrop-blur-[30px] border border-gray-300">
        <div className="flex flex-wrap">
          {/* Contact Details */}
          <div className="w-full shrink-0 grow-0 basis-auto">
            <div className="flex flex-wrap">
              <section className="rounded-md">
                <div className="mx-auto">
                  <div className="text-center">
                    <p className="font-medium text-primary dark:text-primary">Bantuan</p>
                    <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">Hubungi Kami Sekarang</h1>
                    <p className="mt-3 text-gray-500 dark:text-gray-400">Tim kami selalu siap membantu</p>
                  </div>

                  <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
                    {contactInfo.map((item, index) => (
                      <div key={index} className="flex flex-col items-center justify-start text-center">
                        <span className="p-3 text-primary rounded-full bg-primary/80 dark:bg-gray-800">{item.icon}</span>
                        <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">{item.title}</h2>
                        <div className="mt-2 text-primary dark:text-primary">{item.content}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
