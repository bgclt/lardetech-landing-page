"use client";

import Image from "next/image";
import React from "react";

const partnerLogos: string[] = [
  "https://cdn.rareblocks.xyz/collection/clarity/images/brands/1/logo-vertex.svg",
  "https://cdn.rareblocks.xyz/collection/clarity/images/brands/1/logo-squarestone.svg",
  "https://cdn.rareblocks.xyz/collection/clarity/images/brands/1/logo-martino.svg",
  "https://cdn.rareblocks.xyz/collection/clarity/images/brands/1/logo-waverio.svg",
  "https://cdn.rareblocks.xyz/collection/clarity/images/brands/1/logo-vertex.svg",
];

const Partners = () => {
  return (
    <div className="bg-[#F3F5F6]">
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[85rem]">
          <div className="xl:flex xl:items-center xl:justify-between">
            <div className="grid items-center grid-cols-1 mt-10 gap-y-6 xl:mt-0 sm:grid-cols-2 sm:gap-y-8 lg:grid-cols-5 lg:gap-x-8">
              {partnerLogos.map((src, index) => (
                <Image
                  key={index}
                  className="object-contain w-auto mx-auto h-9"
                  src={src}
                  alt={`partner-logo-${index}`}
                  width={115}
                  height={36}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
