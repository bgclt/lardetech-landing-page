"use client";

import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <div className="bg-[#F3F5F6] pt-20" id="client">
      <section className="md:mb-[60px] lg:mb-0">
        <div className="px-4 mx-auto rounded-md max-w-3xl sm:px-6 lg:px-8">
          <p className="text-3xl lg:text-5xl text-center font-semibold text-[#223247]" data-aos="fade-up">
            This is what our clients have to say about us
          </p>
        </div>
      </section>
      <section className="pt-10 2xl:py-24 sm:pt-16 md:pt-0">
        <div className="px-4 mx-auto rounded-[2rem] bg-[#e5e6e8] max-w-7xl sm:px-6 lg:px-8">
          <div className="2xl:pl-24">
            <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 2xl:gap-x-20">
              <div className="text-center py-8 md:py-16 xl:py-24 md:text-left" data-aos="fade-up">
                <blockquote>
                  <p className="text-xl lg:text-2xl font-semibold text-gray-900">
                    “Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.”
                  </p>
                </blockquote>
                <div className="mt-6 sm:flex sm:items-baseline sm:justify-center md:justify-start">
                  <p className="text-base font-semibold text-gray-900">
                    Jenny Wilson
                  </p>
                  <p className="mt-2 text-base text-gray-700 sm:mt-0 sm:ml-2">
                    Project Manager at Microsoft
                  </p>
                </div>
              </div>

              <div className="relative" data-aos="fade-left">
                <Image
                  className="lg:-mt-24 lg:w-[85%]"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/11/smiling-man.png"
                  alt=""
                  width={600}
                  height={600}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
