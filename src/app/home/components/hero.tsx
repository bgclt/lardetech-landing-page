"use client";

import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="bg-white relative overflow-hidden">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="mt-5 max-w-5xl text-left" data-aos="fade-up">
            <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl">
              We empower businesses with cutting-edge technology and tailored
              digital services — from cloud and AI to full-stack software
              development.
            </h1>
          </div>

          <div
            className="mt-5 max-w-3xl text-left"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p className="text-lg text-gray-600">
              Building Future-Ready Digital Solutions
            </p>
          </div>
        </div>
      </div>
      <div className="relative bg-white pt-12 sm:pt-16 lg:pt-20 xl:pt-24">
        <div className="bg-[#F3F5F6]">
          <div className="mx-auto sm:px-6 lg:px-8 max-w-[85rem]">
            <div className="flex lg:h-[20rem] flex-wrap justify-between">
              <div
                className="max-w-md flex flex-col  lg:-mt-[3rem] mx-auto text-center  lg:mx-0 lg:text-left"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <p className="mt-4 text-7xl font-medium text-[#3A90DA] lg:mt-6">
                  *
                </p>
                <a
                  href="#services"
                  className="text-lg font-medium text-gray-900"
                >
                  Cloud & Infrastructure
                </a>
                <a
                  href="#services"
                  className="mt-4 text-lg font-medium text-gray-900 lg:mt-6"
                >
                  Software Development
                </a>
                <a
                  href="#services"
                  className="mt-4 text-lg font-medium text-gray-900 lg:mt-6"
                >
                  Data Engineering & AI
                </a>
                <a
                  href="#services"
                  className="mt-4 text-lg font-medium text-gray-900 lg:mt-6"
                >
                  Blockchain Solutions
                </a>
                <a
                  href="#services"
                  className="mt-4 text-lg font-medium text-gray-900 lg:mt-6"
                >
                  Internet of Things (IoT)
                </a>
              </div>
              <div className=" flex flex-col items-start md:flex-row mx-auto mt-10 lg:mt-0 lg:mx-0 gap-10">
                <div className="max-w-xl mx-auto " data-aos="fade-up" data-aos-delay="300">
                  <div className="relative">
                    <div className="bg-gray-100 md:rounded-2xl relative overflow-hidden">
                      <video
                        className="w-full h-72 max-w-sm object-cover md:rounded-lg"
                        src="/videos/vd_digital-agency.mp4"
                        muted
                        loop
                        autoPlay
                        playsInline
                        controls={false}
                      />

                      {/* Stats Cards */}
                      <div className="absolute top-4 right-4 bg-white rounded-lg p-3 shadow-lg">
                        <div className="text-2xl font-bold text-gray-900">
                          1250+
                        </div>
                        <div className="text-sm text-gray-600">Projects</div>
                      </div>

                      <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg">
                        <div className="text-2xl font-bold text-gray-900">
                          85%
                        </div>
                        <div className="text-sm text-gray-600">
                          Success Rate
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-xl mx-auto lg:-mt-24" data-aos="fade-up" data-aos-delay="400">
                  <video
                    className="w-full h-96 max-w-sm object-cover md:rounded-lg"
                    src="/videos/vd_technology.mp4"
                    muted
                    loop
                    autoPlay
                    playsInline
                    controls={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
