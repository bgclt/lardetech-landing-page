"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import {
  AI,
  Blockchain,
  DataEngineer,
  InfraCloud,
  Iot,
  SoftwareDev,
} from "@/assets";

// ---------------- Shared Components ---------------- //
const Badge = ({ label, className = "" }: { label: string; className?: string }) => (
  <span
    className={`rounded-full border px-3 py-1 text-sm font-semibold ${className}`}
  >
    {label}
  </span>
);

const InfoCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div>
    <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
      <svg
        className="w-8 h-8 text-deep-purple-accent-400"
        stroke="currentColor"
        viewBox="0 0 52 52"
      >
        <polygon
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          points="29 13 14 29 25 29 23 39 38 23 27 23"
        />
      </svg>
    </div>
    <h6 className="mb-2 font-semibold leading-5">{title}</h6>
    <p className="mb-3 text-sm lg:text-xs text-gray-900">{description}</p>
  </div>
);

const AvatarGroup = ({ avatars }: { avatars: string[] }) => (
  <div className="mt-8 flex items-center">
    {avatars.map((src, i) => (
      <Image
        key={i}
        className="h-10 w-10 -mx-1.5 ring ring-white rounded-full object-cover"
        src={src}
        alt={`avatar-${i}`}
        width={880}
        height={880}
      />
    ))}
    <h1 className="text-[#3A90DA] mx-2 font-semibold text-4xl">+</h1>
  </div>
);

// ---------------- Main Component ---------------- //
const WorkWithUs = () => {
  const swiperImages = [DataEngineer, AI, Blockchain, SoftwareDev, Iot, InfraCloud];

  const avatars = [
    "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=facearea&facepad=4&w=880&h=880&q=100",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=4&w=687&h=687&q=80",
    "https://images.unsplash.com/photo-1464863979621-258859e62245?auto=format&fit=facearea&facepad=4&w=686&h=686&q=80",
    "https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?auto=format&fit=facearea&facepad=4&w=1401&h=1401&q=80",
  ];

  return (
    <div className="bg-[#F3F5F6]" id="work">
      <section className="p-6 md:p-10">
        <div className="bg-[#EAE9E9] rounded-[3rem] mx-auto max-w-[85rem] space-y-8 md:space-y-20">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
            {/* Left Section */}
            <div className="flex flex-col p-8 rounded-3xl lg:col-span-2" data-aos="fade-right">
              <h2 className="text-2xl font-semibold tracking-tight text-gradient gradient-peach">
                Why work with us & how we work?
              </h2>
              <div className="flex flex-wrap mt-4 gap-2">
                <Badge label="Creative" className="border-[#376058] text-[#376058]" />
                <Badge label="Out of the Box" className="border-[#376058] text-[#376058]" />
              </div>

              <div className="mt-6 grid lg:grid-cols-2 items-end flex-1 gap-4">
                <InfoCard
                  title="Why Work With Us"
                  description="We have an ‘attention-to-detail’ policy that ensures our services are top-notch. You’ll appreciate our expertise in crafting digital solutions that resonate with your target audience. We're here to help you make a lasting impact in the market!"
                />
                <InfoCard
                  title="How We Work"
                  description="We understand the importance of collaboration and will work closely with you to ensure your vision comes to life. Our team of experts will bring your ideas to the forefront, creating a seamless and successful partnership. Let's make waves together!"
                />
              </div>
            </div>

            {/* Right Section */}
            <div className="rounded-3xl p-4 sm:p-8 lg:col-span-3" data-aos="fade-left">
              <div className="flex w-full flex-wrap lg:flex-nowrap justify-between gap-4">
                <div className="rounded-[2rem] p-6 bg-white hover:bg-gray-100" data-aos="zoom-in" data-aos-delay="100">
                  <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900">
                    Evolving ideas into their final form through the development
                  </h5>
                  <AvatarGroup avatars={avatars} />
                </div>

                <div className="mt-6 lg:mt-0 rounded-[2rem] p-6 bg-gradient-to-t from-[#3A90DA] to-[#25BBFD]" data-aos="zoom-in" data-aos-delay="200">
                  <h5 className="mb-12 text-xl font-semibold tracking-tight text-white">
                    Thousands of projects delivered with excellence and precision
                  </h5>
                  <Badge label="Team Work" className="border-white text-white" />
                </div>
              </div>

              {/* Swiper Section */}
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                loop={true}
                autoplay={{ delay: 10000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
              >
                {swiperImages.map((src, i) => (
                  <SwiperSlide key={i}>
                    <Image
                      className="mt-4 rounded-[2rem] object-cover"
                      src={src}
                      alt={`slide-${i}`}
                      width={880}
                      height={880}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkWithUs;
