"use client";

import { useState, useEffect, useMemo } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState<string>("#home");

    // memoize navLinks so useEffect doesn’t re-run infinitely
    const navLinks = useMemo(
        () => [
            { name: "HOME", href: "#home" },
            { name: "ABOUT", href: "#about" },
            { name: "RESUME", href: "#resume" },
            { name: "SKILLS", href: "#skills" },
            { name: "WORKS", href: "#works" },
            { name: "CONTACT", href: "#contact" },
        ],
        []
    );

    const getLinkClasses = (href: string) =>
        `cursor-pointer hover:text-emerald-400 ${active === href ? "text-emerald-400" : "text-black"
        }`;

    useEffect(() => {
        const targets = navLinks.map((l) =>
            document.getElementById(l.href.slice(1))
        );
        const validTargets = targets.filter(Boolean) as HTMLElement[];

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.find((e) => e.isIntersecting);
                if (visible) {
                    setActive(`#${visible.target.id}`);
                }
            },
            {
                root: null,
                // top and bottom margins shrink the "observer box"
                // so the section only counts when its middle is in view
                rootMargin: "-40% 0px -40% 0px",
                threshold: 0,
            }
        );

        validTargets.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [navLinks]);

    return (
        <nav className="border-b border-gray-200 bg-white sticky top-0 z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <div className="text-2xl font-bold text-emerald-400 tracking-wide">
                            NATHAN REYMER
                        </div>
                    </div>

                    {/* Desktop */}
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

                    {/* Mobile toggle */}
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

            {/* Mobile menu */}
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
