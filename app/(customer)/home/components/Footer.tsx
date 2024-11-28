import React from "react";
import LogoWatermark from "@/app/assets/images/logo/logowatermark.png";
import Image from "next/image";
import { Twitter, Facebook, Phone } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="max-w-6xl mx-auto relative pt-4 pb-2">
      <div className="mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 mb-8">
            <Image src={LogoWatermark} alt="Event Logo" className="w-36" />
            <div className="flex gap-4 mt-4">
              <span>
                <Twitter size={25} />
              </span>
              <span>
                <Facebook size={25} />
              </span>
              <span>
                <Phone size={25} />
              </span>
            </div>
          </div>
          <div className="w-full lg:w-6/12">
            <div className="flex gap-4 flex-wrap items-top">
              <div className="w-full lg:w-4/12 ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Event Information</span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-normal block pb-2 text-sm" href="#about">
                      About the Event
                    </a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-normal block pb-2 text-sm" href="#schedule">
                      Event Schedule
                    </a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-normal block pb-2 text-sm" href="#speakers">
                      Speakers
                    </a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-normal block pb-2 text-sm" href="#registration">
                      Register Now
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Contact & Support</span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-normal block pb-2 text-sm" href="#faq">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-normal block pb-2 text-sm" href="#contact">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-normal block pb-2 text-sm" href="#terms">
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-normal block pb-2 text-sm" href="#privacy">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex border-t border-primary pt-2 flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">{new Date().getFullYear()}</span>
              <a href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800" target="_blank" rel="noopener noreferrer">
                {" "}
                | Selaras Invitation
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
