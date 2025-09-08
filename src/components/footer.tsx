import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/assets";

const Footer = () => {
  return (
    <footer className="bg-[#F3F5F6]">
      <div className="mx-auto max-w-[85rem] px-4 py-16  md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 sm:mx-auto sm:max-w-lg md:grid-cols-2 lg:grid-cols-3 lg:max-w-full">
          {/* Navigation */}
          <div className="flex lg:justify-center lg:border-r-2 border-gray-200">
            <div>
              <h2 className="mb-2 text-xl font-bold text-black">Navigation</h2>
              <ul className="my-4 grid grid-cols-2 gap-2 text-gray-700">
                <li>
                  <Link href="#work" className="hover:text-[#376058]">
                    Work
                  </Link>
                </li>

                <li>
                  <Link href="#services" className="hover:text-[#376058]">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#client" className="hover:text-[#376058]">
                    Client Testimonials
                  </Link>
                </li>
              </ul>
              <Link href="mailto:lntori99@gmail.com">
                <button
                  type="button"
                  className=" items-center justify-center rounded-xl bg-linear-to-r from-[#3A90DA] to-[#25BBFD] px-4 py-2.5 text-base font-normal text-white shadow-sm hover:text-heading focus:text-heading focus:outline-none focus:ring-2 focus:ring-orange-400/80 lg:inline-flex"
                >
                  Say hi
                </button>
              </Link>
            </div>
          </div>

          {/* Logo & About */}
          <div className="flex lg:justify-center">
            <div className="text-left lg:text-center">
              <Link
                href="/"
                aria-label="Homepage"
                className="inline-block mb-2"
              >
                <Image src={Logo} alt="" width={120} height={40} priority />
              </Link>
              <p className="mb-3 text-sm text-gray-700">
                Transforming Ideas Into Digital Experiences
              </p>
              <p className="mt-3 text-sm text-gray-700">© 2025 Lardetech</p>
            </div>
          </div>

          {/* Contact */}
          <div className="flex lg:justify-center lg:border-l-2 border-gray-200">
            <div>
              <h2 className="mb-2 text-xl font-bold text-black">Contact</h2>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>
                  <a href="tel:+233598532978" className="hover:text-[#376058]">
                    +233 598 532 978
                  </a>
                </li>
                <li>
                  <a href="tel:+233240257669" className="hover:text-[#376058]">
                    +233 240 257 669
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
