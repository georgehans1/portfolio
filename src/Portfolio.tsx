import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Github, Linkedin, Mail } from 'lucide-react';
import * as SimpleIcons from 'simple-icons';

// Type definitions
interface Technology {
    icon: {
        path: string;
    };
    name: string;
    color: string;
}

interface Company {
    name: string;
    role: string;
    period: string;
    logo: string;
}

interface SocialLink {
    icon: React.ReactNode;
    href: string;
}

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const technologies: Technology[] = [
    { icon: SimpleIcons.siAngular, name: "Angular", color: "#DD0031" },
    { icon: SimpleIcons.siNextdotjs, name: "Next.js", color: "#FFFFFF" },
    { icon: SimpleIcons.siReact, name: "React", color: "#61DAFB" },
    { icon: SimpleIcons.siJavascript, name: "JavaScript", color: "#F7DF1E" },
    { icon: SimpleIcons.siTypescript, name: "TypeScript", color: "#3178C6" },
    { icon: SimpleIcons.siSpring, name: "SpringBoot", color: "#6DB33F" }
];

const companies: Company[] = [
    {
        name: "Turntabl",
        role: "Software Engineer III",
        period: "2021 - Present",
        logo: "assets/turntabl.png",
    },
    {
        name: "Citi",
        role: "Software Engineer",
        period: "2022 - 2023",
        logo: "assets/citi.svg"
    },
    {
        name: "ASSL",
        role: "Frontend Developer",
        period: "2018 - 2021",
        logo: "assets/assl.png"
    }
];

const ModernPortfolio: React.FC = () => {
    const main = useRef<HTMLDivElement>(null);
    const sectionsRefs = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Parallax background effect
            gsap.to(".parallax-bg", {
                y: (_i: number, el: HTMLElement) => -ScrollTrigger.maxScroll(window) * parseFloat(el.dataset.speed || "0"),
                ease: "none",
                scrollTrigger: {
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1
                }
            });

            // Tech stack animation
            const techItems = document.querySelectorAll('.tech-item');
            techItems.forEach((item, i) => {
                gsap.from(item, {
                    opacity: 0,
                    y: 50,
                    rotateY: 45,
                    duration: 0.8,
                    delay: i * 0.1,
                    scrollTrigger: {
                        trigger: item,
                        start: "top bottom-=100",
                        end: "bottom center",
                        toggleActions: "play none none reverse"
                    }
                });
            });

            // Section animations
            sectionsRefs.current.forEach((section) => {
                if (!section) return;

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        start: "top center+=100",
                        end: "bottom center",
                        toggleActions: "play none none reverse"
                    }
                });

                tl.from(section.querySelectorAll('.animate-in'), {
                    opacity: 0,
                    y: 50,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power3.out"
                });
            });
        }, main);

        return () => ctx.revert();
    }, []);

    const socialLinks: SocialLink[] = [
        { icon: <Mail className="w-8 h-8" />, href: "mailto:georgehansdev@gmail.com" },
        { icon: <Github className="w-8 h-8" />, href: "https://github.com/georgehans1" },
        { icon: <Linkedin className="w-8 h-8" />, href: "https://www.linkedin.com/in/george-hanson-8a287516b/?originalSubdomain=gh" }
    ];

    return (
        <div ref={main} className="bg-black text-white min-h-screen overflow-hidden relative">
            {/* Parallax Background Elements */}
            <div className="fixed inset-0 pointer-events-none">
                <div
                    className="parallax-bg absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"
                    data-speed="0.5"
                />
                <div
                    className="parallax-bg absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl"
                    data-speed="0.8"
                />
            </div>

            {/* Hero Section */}
            <section ref={el => sectionsRefs.current[0] = el}
                     className="min-h-screen flex items-center justify-center px-4 md:px-8">
                <div className="max-w-4xl w-full">
                    <div className="text-center">
                        <h1 className="animate-in gradient-heading text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-300% animate-gradient">
                            Hans
                        </h1>
                        <p className="animate-in text-xl md:text-2xl text-gray-400 mb-8">Software Engineer</p>
                        <p className="animate-in text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                            I build seamless digital experiences with clean, efficient code. As a frontend engineer
                            evolving into fullstack, I bring designs to life with performance, scalability, and user
                            experience in mind.
                        </p>
                    </div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section ref={el => sectionsRefs.current[1] = el}
                     className="min-h-screen flex items-center justify-center px-4 md:px-8 py-16">
                <div className="max-w-6xl w-full">
                    <h2 className="animate-in gradient-heading text-4xl md:text-6xl font-bold text-center mb-16 pb-8 bg-gradient-to-r from-blue-400 via-teal-500 to-emerald-400 bg-clip-text text-transparent bg-300% animate-gradient">
                        Technology Stack
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                        {technologies.map((tech, index) => (
                            <div
                                key={index}
                                className="tech-item group p-6 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2"
                            >
                                <div className="flex flex-col items-center space-y-4">
                                    <div className="relative">
                                        <svg
                                            viewBox="0 0 24 24"
                                            className="w-12 h-12 md:w-16 md:h-16 transition-transform group-hover:scale-110 duration-300"
                                            fill={tech.color}
                                            style={{ filter: `drop-shadow(0 0 8px ${tech.color}40)` }}
                                        >
                                            <path d={tech.icon.path} />
                                        </svg>
                                        <div
                                            className="absolute -inset-2 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                                    </div>
                                    <div className="text-center">
                                        <p className="text-lg md:text-xl font-medium group-hover:text-white transition-colors">
                                            {tech.name}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section ref={el => sectionsRefs.current[2] = el}
                     className="min-h-screen flex items-center justify-center p-8">
                <div className="max-w-6xl w-full">
                    <h2 className="animate-in gradient-heading text-6xl font-bold text-center mb-16 bg-gradient-to-r from-red-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent bg-300% animate-gradient">
                        Experience
                    </h2>
                    <div className="animate-in grid md:grid-cols-3 gap-8">
                        {companies.map((company, index) => (
                            <div
                                key={index}
                                className="interactive group relative p-8 bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden"
                            >
                                <img
                                    src={company.logo}
                                    alt={company.name}
                                    className={`w-28 h-20 mb-4 rounded-lg ${company.name == "Turntabl" ? "turntabl-logo" : ""}`}
                                />
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold mb-2">{company.name}</h3>
                                    <p className="text-gray-400 mb-2">{company.role}</p>
                                    <p className="text-sm text-gray-500">{company.period}</p>
                                </div>
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 transform translate-y-full group-hover:translate-y-0 transition-all duration-500"/>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section ref={el => sectionsRefs.current[3] = el}
                     className="min-h-screen flex items-center justify-center px-4 md:px-8 py-16">
                <div className="max-w-4xl w-full text-center">
                    <h2 className="animate-in gradient-heading text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-green-400 via-blue-500 to-purple-400 bg-clip-text text-transparent bg-300% animate-gradient">
                        Let's Connect
                    </h2>
                    <p className="animate-in text-xl text-gray-400 mb-12">Ready to create something amazing?</p>
                    <div className="animate-in flex justify-center gap-8">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                className="relative group transform hover:scale-110 transition-transform duration-300"
                            >
                                <div className="text-white/80 hover:text-white transition-colors">
                                    {social.icon}
                                </div>
                                <div
                                    className="absolute -inset-4 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-xl"/>
                            </a>
                        ))}
                    </div>

                    <div className="mt-10">
                        <a
                            href="assets/GeorgeHansonCV.pdf"
                            download="georgehanscv.pdf"
                            className="animate-in group relative px-8 py-3 overflow-hidden rounded-full bg-white text-black hover:scale-105 transition-transform">
                            <span className="relative z-10">Download CV</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ModernPortfolio;