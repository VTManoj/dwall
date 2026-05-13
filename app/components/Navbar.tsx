"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Logo from "../../public/dwall icon.svg"

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed w-full bg-[#1f1f1f] text-white z-50 rounded-b-2xl">
            <div className="w-[90%] mx-auto px-6 py-4 flex justify-between items-center">
                <div className="font-bold flex justify-center items-center text-xl text-yellow-500">
                    <div>
                        <Image src={Logo} alt="" />
                    </div>
                    DWALL Constructions
                </div>

                <nav className="hidden md:flex items-center gap-8  font-bold text-lg">
                    <a href="#about">About Us</a>
                    <a href="#projects">Projects</a>
                    <a href="#certificates">Certificates</a>
                    <a href="#testimonials">Testimonials</a>
                    <a href="#contact">Contact Us</a>
                    <a href="#contact" className="bg-yellow-500 text-black px-5 py-2 rounded-md">
                        Get Quote
                    </a>
                </nav>

                <button className="md:hidden" onClick={() => setOpen(!open)}>
                    {open ? <X /> : <Menu />}
                </button>
            </div>

            {open && (
                <div className="md:hidden bg-[#2a2a2a] px-6 py-4 space-y-4 flex flex-col rounded-b-xl transform transition-all duration-500 ease-in">
                    <a href="#about" onClick={() => setOpen(false)}>About Us</a>
                    <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
                    <a href="#certificates" onClick={() => setOpen(false)}>Certificates</a>
                    <a href="#testimonials" onClick={() => setOpen(false)}>Testimonials</a>
                    <a href="#contact" onClick={() => setOpen(false)}>Contact Us</a>
                    <a href="#contact" onClick={() => setOpen(false)} className="text-center w-full bg-yellow-500 text-black py-2 rounded-md">
                        Get Quote
                    </a>
                </div>
            )}
        </header>
    );
}


export default Navbar