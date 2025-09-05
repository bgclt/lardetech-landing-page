"use client";

import { Fragment, useEffect, useState } from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { BiMenu } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/assets";

const Navbar = () => {
  const navLinks = [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Client Testimonials", href: "#client" },
  ];

  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollingDown, setScrollingDown] = useState(false);
  const threshold = 300; // Change this value to the desired scroll position threshold

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollingDown(
        currentScrollY > lastScrollY && currentScrollY > threshold
      );
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
      <div
      className={`w-full fixed z-50 top-0 left-0 transition-transform duration-300 ${
        scrollingDown ? "-translate-y-full" : "translate-y-0"
      }`}
    >
    <div className="bg-white/50 backdrop-blur-sm">
      <nav className="relative mx-auto flex max-w-[85rem] shrink-0 items-center space-x-2 px-4 py-6 sm:px-8 z-20">
        {/* Logo */}
        <Link href="/" className="z-10">
          <Image className="w-32" src={Logo} alt="Logo" />
        </Link>

        {/* Desktop Nav */}
        <div className="flex-1">
          <div className="absolute inset-y-0 inset-x-0 hidden items-center justify-center space-x-1.5 px-4 lg:flex">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="inline-flex items-center justify-center rounded-xl border-2 border-transparent bg-transparent px-4 py-2.5 text-base font-normal text-text hover:bg-heading/5 hover:text-heading focus:bg-heading/5 focus:outline-none focus:ring-2 focus:ring-heading/80"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="z-10">
          <Link href="mailto:brightgclt@gmail.com">
            <button
              type="button"
              className="hidden items-center justify-center rounded-xl bg-linear-to-r from-[#3A90DA] to-[#25BBFD] px-4 py-2.5 text-base font-normal text-white shadow-sm hover:text-heading focus:text-heading focus:outline-none focus:ring-2 focus:ring-orange-400/80 lg:inline-flex"
            >
              Get in touch
            </button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <Menu as="div" className="relative lg:hidden">
          <MenuButton className="inline-flex items-center justify-center rounded-xl bg-transparent p-2 text-text hover:bg-heading/5 hover:text-heading focus:bg-heading/5 focus:outline-none focus:ring-2 focus:ring-heading/80">
            <BiMenu className="h-5 w-5" />
          </MenuButton>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right rounded-xl bg-white py-3 shadow-xl focus:outline-none">
              {navLinks.map(({ label, href }) => (
                <MenuItem
                  as="a"
                  key={href}
                  href={href}
                  className="flex w-full items-center px-4 py-2 text-sm font-semibold text-text data-[focus]:bg-muted-1 data-[focus]:text-heading"
                >
                  {label}
                </MenuItem>
              ))}
              <MenuItem
                as="button"
                className="flex w-full items-center px-4 py-2 text-sm font-semibold text-text data-[focus]:bg-muted-1 data-[focus]:text-heading"
              >
                Call to action
              </MenuItem>
            </MenuItems>
          </Transition>
        </Menu>
      </nav>
    </div>
    </div>
  );
};

export default Navbar;
