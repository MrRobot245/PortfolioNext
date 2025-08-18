"use client";
import { urlFor } from '@/sanity/lib/image';
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Skills() {
    const skills = [
        { name: "UX Design", value: 90 },
        { name: "Legacy Systems", value: 75 },
        { name: "Server/Scripting Experience", value: 80 },
        { name: "Troubleshooting", value: 95 },
        { name: "Phone Etiquette", value: 80 },
        { name: "Programming Languages", value: 85 },
    ];

    const moreSkills = [
        { name: "Leadership", value: 81 },
        { name: "Creativity", value: 82 },
        { name: "Time Management", value: 88 },
        { name: "Initiative", value: 85 },
        { name: "Teamwork", value: 84 },
        { name: "Motivation", value: 88 },
    ];
    useEffect(() => {
        setAnimated(true);
    }, []);

    const [animated, setAnimated] = useState(false);
    return (
        <>
            <div id="skills" className="pt-20 pb-20 mx-auto bg-[#1a1e23]">
                <h2
                    className="section-title  text-white"
                    data-aos="fade-up" data-aos-once="true" data-aos-duration="1500"
                >
                    Skills
                </h2 >
            </div >
            <div className="bg-[#1a1e23]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto  bg-[#1a1e23] ">
                    {skills.map((skill, idx) => (
                        <div key={idx}>
                            <div className="flex justify-between mb-1 text-sm font-medium  text-white">
                                <span>{skill.name}</span>
                                <span>{skill.value}%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                                <motion.div
                                    className="bg-emerald-400 h-3 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: animated ? `${skill.value}%` : 0 }}
                                    transition={{ duration: 1, delay: idx * 0.2 }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* More Skills */}
            <div className="bg-[#1a1e23] pb-20">
                <h3 className="text-2xl font-semibold text-center pt-12 pb-6 bg-[#1a1e23] text-white">MORE SKILLS</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto bg-[#1a1e23]">
                    {moreSkills.map((skill, idx) => {
                        const R = 45;
                        const C = 2 * Math.PI * R; // ~282.6

                        return (
                            <div key={idx} className="flex flex-col items-center">
                                <svg className="w-24 h-24" viewBox="0 0 100 100">
                                    {/* Rotate ONLY the rings so they start at 12 o'clock */}
                                    <g transform="rotate(-90 50 50)">
                                        <circle
                                            cx="50"
                                            cy="50"
                                            r={R}
                                            stroke="#374151"
                                            strokeWidth="10"
                                            fill="none"
                                        />
                                        <motion.circle
                                            cx="50"
                                            cy="50"
                                            r={R}
                                            stroke="#34d399"
                                            strokeWidth="10"
                                            fill="none"
                                            strokeDasharray={C}
                                            strokeDashoffset={C}
                                            animate={{
                                                strokeDashoffset: C - (C * skill.value) / 100,
                                            }}
                                            transition={{ duration: 1.2, delay: idx * 0.2 }}
                                            strokeLinecap="round"
                                        />
                                    </g>

                                    {/* Upright, centered, emerald text */}
                                    <text
                                        x="50"
                                        y="50"
                                        textAnchor="middle"
                                        dominantBaseline="middle"
                                        fill="#fff"
                                        fontWeight="700"
                                        fontSize="18"
                                    >
                                        {skill.value}%
                                    </text>
                                </svg>

                                <p className="mt-2 text-white">{skill.name}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};



