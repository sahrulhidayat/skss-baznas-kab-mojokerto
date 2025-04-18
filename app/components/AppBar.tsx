"use client";

import NavItem from "../components/NavItem";
import Image from "next/image";
import { useState } from "react";

const AppBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="bg-emerald-600 text-white">
      <div className="container mx-auto">
        <div className="flex justify-between py-2 px-5">
            <div className="flex items-center space-x-2">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={48}
              height={48}
              className="mr-4 filter brightness-0 invert"
            />
            <div className="w-6/8 md:w-6/10 uppercase text-sm md:text-base font-semibold tracking-wider leading-4 md:leading-5">
              SKSS BAZNAS KABUPATEN MOJOKERTO
            </div>
            </div>
          <div className="w-6/12 flex justify-end">
            <div className="flex sm:hidden h-full items-center">
              <button
                className="text-white focus:outline-none"
                onClick={() => {
                  setIsDrawerOpen(!isDrawerOpen);
                  document.body.style.overflow = !isDrawerOpen
                    ? "hidden"
                    : "auto";
                }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
            <ul className="hidden sm:flex justify-end space-x-10 h-full items-center">
              <NavItem>Blog</NavItem>
              <NavItem>FAQ</NavItem>
            </ul>
          </div>
        </div>
      </div>
      {isDrawerOpen && (
        <div className="absolute top-0 right-0 w-full h-full bg-black/50 z-50">
          <div className="bg-emerald-600 w-64 h-full shadow-lg ml-auto">
            <button
              className="p-4 text-white focus:outline-none"
              onClick={() => {
                setIsDrawerOpen(false);
                document.body.style.overflow = "auto";
              }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <ul className="mt-4 px-4 space-y-4 flex flex-col items-center">
              <NavItem>Blog</NavItem>
              <NavItem>FAQ</NavItem>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppBar;
