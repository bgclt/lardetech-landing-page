"use client";

import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BiSolidMinusCircle } from "react-icons/bi";
import Link from "next/link";

const servicesData = [
  {
    title: "Cloud & Infrastructure",
    description:
      "We offer comprehensive cloud solutions, from migration to management, ensuring your business leverages the power of the cloud for scalability and efficiency.",
    services: [
      "Cloud Architecture & Migration",
      "DevOps Automation & CI/CD Pipelines",
      "Cloud Security & Compliance",
      "MLOps & LLOps",
      "Backup and Disaster Recovery"
    ],
  },
  {
    title: "Software Development",
    description:
      "Our expert developers build custom software solutions tailored to your business needs, utilizing the latest technologies and best practices to deliver high-quality results.",
    services: [
      "Web Applications (scalable & responsive)",
      "Mobile Apps (iOS & Android)",
      "Desktop Applications",
      "Custom Software Solutions",
    ],
    showButton: true,
    defaultOpen: true,
  },
  {
    title: "Data Engineering & AI",
    description:
      "We provide advanced data engineering and AI services to help you harness the power of your data, enabling smarter decision-making and innovative solutions.",
    services: [
      "Data Pipelines & Warehousing",
      "Machine Learning & Deep Learning Models",
      "AI Engineering & Automation",
      "Predictive Analytics & Business Intelligence",
    ],
  },
  {
    title: "Blockchain Solutions",
    description:
      "Our blockchain experts develop secure and transparent solutions that enhance trust and efficiency in your business operations.",
    services: [
      "Smart Contracts",
      "Decentralized Applications (DApps)",
      "Blockchain Integration & Consulting",
    ],
  },
  {
    title: "Internet of Things (IoT)",
    description:
      "We design and implement IoT solutions that connect devices and systems, enabling real-time data collection and analysis for improved business outcomes.",
    services: [
      "Smart Device Integration",
      "IoT Platform Development",
      "Real-time Monitoring & Automation",
    ],
  },
];

const Services = () => {
  return (
    <div className="bg-[#F3F5F6]" id="services">
      <div className="w-full px-4">
        <div className="mx-auto w-full max-w-5xl rounded-2xl p-2">
          {/* Header */}
          <div
            className="flex my-4 border-b-2 border-gray-200   flex-wrap justify-between items-center"
            data-aos="fade-up"
          >
            <h1 className="my-1 text-3xl font-semibold text-gray-700">
              Our Services
            </h1>
            <p className="my-1 text-sm max-w-md text-gray-600">
              At Lardetech, we deliver end-to-end digital solutions tailored to
              help businesses grow, innovate, and scale with confidence.
            </p>
            <span className="my-1 rounded-full border border-[#376058] px-2 py-1 text-sm font-semibold text-[#376058]">
              Creative
            </span>
          </div>

          {/* Services List */}
          {servicesData.map(
            (
              { title, description, showButton, defaultOpen, services },
              idx
            ) => (
              <Disclosure
                as="div"
                key={idx}
                className="border-b-2 border-gray-200 py-10"
                defaultOpen={defaultOpen}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                {({ open }) => (
                  <>
                    <DisclosureButton className="flex w-full justify-between rounded-lg text-left text-3xl font-semibold text-gray-600">
                      <span>{title}</span>
                      {open ? (
                        <BiSolidMinusCircle className="text-[#3A90DA] text-5xl" />
                      ) : (
                        <AiOutlinePlusCircle className="text-[#3A90DA] text-5xl" />
                      )}
                    </DisclosureButton>
                    <DisclosurePanel className="pt-4 pb-2 text-sm text-gray-500 max-w-md">
                      <p>{description}</p>

                      <p className="mt-5 font-semibold text-base">
                        Services we offer
                      </p>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        {services.map((service, i) => (
                          <li key={i}>{service}</li>
                        ))}
                      </ul>
                      {showButton && (
                        <Link href="mailto:brightgclt@gmail.com">
                          <button
                            type="button"
                            className="mt-5 items-center justify-center rounded-xl bg-linear-to-r from-[#3A90DA] to-[#25BBFD] px-4 py-2.5 text-base font-normal text-white shadow-sm hover:text-heading focus:text-heading focus:outline-none focus:ring-2 focus:ring-orange-400/80 lg:inline-flex"
                          >
                            Get in touch
                          </button>
                        </Link>
                      )}
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
