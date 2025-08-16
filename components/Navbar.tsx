/* ────────────────────────────────────────────────────────────────────────
   Navbar.tsx
   ──────────────────────────────────────────────────────────────────────── */
"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    /* ---------------------------  STATE  --------------------------------- */
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState<string>("#home"); // default

    /* ---------------------------  NAV DATA  --------------------------------- */
    const navLinks = [
        { name: "HOME", href: "#home" },
        { name: "ABOUT", href: "#about" },
        { name: "RESUME", href: "#resume" },
        { name: "SKILLS", href: "#skills" },
        { name: "WORKS", href: "#works" },
        { name: "CONTACT", href: "#contact" },
    ];

    /* ---------------------------  ACTIVE CLASSES  ------------------------ */
    const getLinkClasses = (href: string) =>
        `cursor-pointer hover:text-emerald-400 ${active === href ? "text-emerald-400" : "text-black"
        }`;

    /* ---------------------------  SCROLL OBSERVER  ------------------------ */
    useEffect(() => {
        const targets = navLinks.map((l) => document.getElementById(l.href.slice(1)));
        const validTargets = targets.filter(Boolean) as HTMLElement[];
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

                if (visible) {
                    const id = visible.target.id;          // e.g. "home"
                    const href = `#${id}`;                 // convert back to "#home"
                    setActive(href);
                }
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.5,   // 50% of the section must be visible
            }
        );
        validTargets.forEach((el) => observer.observe(el));


        return () => observer.disconnect();
    }, [navLinks]);

    /* ---------------------------  RENDER  --------------------------------- */
    return (
        <nav className="border-b border-gray-200 bg-white sticky top-0 z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo / Name */}
                    <div className="flex-shrink-0">
                        <div className="text-2xl font-bold text-emerald-400 tracking-wide">
                            NATHAN REYMER
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6 font-bold text-sm">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={getLinkClasses(link.href)}
                                onClick={() => setActive(link.href)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2 font-bold text-sm">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={getLinkClasses(link.href)}
                            onClick={() => {
                                setActive(link.href);
                                setIsOpen(false);
                            }}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}
