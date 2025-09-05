"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { useEffect } from "react";
import AOS from "aos";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="pt-20">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
