"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const teamMembers = [
  {
    name: "Oliver Aguilerra",
    role: "Product Manager",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    name: "Marta Clermont",
    role: "Design Team Lead",
    image:
      "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    name: "Alice Melbourne",
    role: "Human Resources",
    image:
      "https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    name: "John Doe",
    role: "Good guy",
    image:
      "https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
];

const Teams = () => {
  return (
    <div className="bg-[#F3F5F6]" id="ateam">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        {/* Section Header */}
        <div className="px-2 mx-auto mb-10 lg:max-w-2xl sm:text-center">
          <h1 className="inline-block py-px mb-4 text-3xl font-semibold">
            The A-Team
          </h1>
          <p className="text-sm text-gray-700">
            “Turning ideas into reality with efficiency and finesse”
          </p>
        </div>

        {/* Swiper Carousel */}
        <div className="mx-auto px-2">
          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: { spaceBetween: 10, slidesPerView: 1 },
              575: { spaceBetween: 10, slidesPerView: 1 },
              767: { spaceBetween: 10, slidesPerView: 2 },
              1024: { spaceBetween: 10, slidesPerView: 4 },
            }}
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <div>
                  <div className="relative pb-56 mb-4 shadow lg:pb-64">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={1260}
                      height={750}
                      className="absolute object-cover w-full h-full rounded-3xl"
                    />
                  </div>
                  <div className="flex flex-col sm:text-left">
                    <p className="text-lg font-bold">{member.name}</p>
                    <p className="mb-5 text-xs text-gray-800">{member.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Teams;
