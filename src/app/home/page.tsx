"use client";

import MainLayout from "@/shared/mainLayout";
import React from "react";
import Hero from "./components/hero";
import Partners from "./components/partners";
import WorkWithUs from "./components/workWithUs";
import Services from "./components/services";

import Testimonials from "./components/testimonials";

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Partners />
      <WorkWithUs />
      <Services />
      <Testimonials />
    </MainLayout>
  );
};

export default Home;
