"use client";

import Link from "next/link";
import React, { useState } from "react";

const NavbarComponent: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#1d072e] to-[#bc8a2e] shadow-md"
      style={{ boxShadow: "0 5px 5px -2px rgba(0, 255, 241, 0.5)" }}
    >
      <div className="w-full px-4 flex justify-between items-center">
        <div className="text-3xl md:text-4xl font-bold text-[#bc8a2e]">
          <img src="/zcodelogo.png" alt="Logo" className="h-24 w-24" />
        </div>
        <ul className="hidden md:flex space-x-6 text-lg md:text-xl">
          <li>
            <Link href="/" className="text-white hover:underline">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/#about" className="text-white hover:underline">
              Quiénes somos
            </Link>
          </li>
          <li>
            <Link href="/#projects" className="text-white hover:underline">
              Servicios
            </Link>
          </li>
          <li>
            <Link href="/#testimonials" className="text-white hover:underline">
              Testimonios
            </Link>
          </li>
          <li>
            <Link href="/#contact" className="text-white hover:underline">
              Contacto
            </Link>
          </li>
        </ul>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
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
      </div>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>
      <div
        className={`fixed inset-y-0 left-0 bg-gray-900 bg-opacity-80 backdrop-blur-lg w-64 z-50 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } rounded-r-lg`}
      >
        <ul className="flex flex-col space-y-4 p-4">
          <li>
            <Link
              href="/"
              className="text-white hover:underline"
              onClick={toggleMenu}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="/#about"
              className="text-white hover:underline"
              onClick={toggleMenu}
            >
              Quiénes somos
            </Link>
          </li>
          <li>
            <Link
              href="/#projects"
              className="text-white hover:underline"
              onClick={toggleMenu}
            >
              Servicios
            </Link>
          </li>
          <li>
            <Link
              href="/#testimonials"
              className="text-white hover:underline"
              onClick={toggleMenu}
            >
              Testimonios
            </Link>
          </li>
          <li>
            <Link
              href="/#contact"
              className="text-white hover:underline"
              onClick={toggleMenu}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
      <div className="border-b-2 border-[#00FFF1] rounded-sm"></div>
    </nav>
  );
};

export default NavbarComponent;
