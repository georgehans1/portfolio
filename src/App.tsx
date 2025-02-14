// @ts-ignore
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {Github, Linkedin, Mail, Code2, ArrowRight, Server, Layers} from 'lucide-react';
import * as SimpleIcons from 'simple-icons';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

type TechIconProps = {
  path: string;
  title: string;
  color: string;
}

type SectionDividerProps = {
  type: string;
  fill: string;
  className: string;
}

const TechIcon = ({ path, title, color }: TechIconProps) => (
    <motion.div
        className="flex flex-col items-center gap-2"
        whileHover={{ scale: 1.1 }}
        animate={{
          x: [-10, 10, -10],
          rotate: [-5, 5, -5]
        }}
        transition={{
          x: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          },
          rotate: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
    >
      <svg
          role="img"
          viewBox="0 0 24 24"
          className="w-12 h-12 md:w-16 md:h-16"
          fill={color}
          style={{ filter: 'drop-shadow(0 0 8px ' + color + '40)' }}
      >
        <path d={path} />
      </svg>
      <span className="text-sm font-medium text-muted-foreground">{title}</span>
    </motion.div>
);

const SectionDivider = ({ type = "wave", fill = "white", className = "" } : SectionDividerProps) => {
  const dividers = {
    wave: (
        <svg viewBox="0 0 1440 120" className={`w-full ${className}`}>
          <path
              fill={fill}
              d="M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,80C840,85,960,75,1080,64C1200,53,1320,43,1380,37.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
    ),
    curve: (
        <svg viewBox="0 0 1440 120" className={`w-full ${className}`}>
          <path
              fill={fill}
              d="M0,0L60,16C120,32,240,64,360,69.3C480,75,600,53,720,42.7C840,32,960,32,1080,42.7C1200,53,1320,75,1380,85.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
    ),
    tilt: (
        <svg viewBox="0 0 1440 120" className={`w-full ${className}`}>
          <path
              fill={fill}
              d="M0,32L1440,96L1440,320L0,320Z"
          />
        </svg>
    )
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return dividers[type]  || dividers.wave;
};

function App() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const technologies = [
    { icon: SimpleIcons.siAngular, name: "Angular", color: "#DD0031" },
    { icon: SimpleIcons.siNextdotjs, name: "Next.js", color: "#000000" },
    { icon: SimpleIcons.siReact, name: "React", color: "#61DAFB" },
    { icon: SimpleIcons.siJavascript, name: "JavaScript", color: "#F7DF1E" },
    { icon: SimpleIcons.siTypescript, name: "TypeScript", color: "#3178C6" },
    { icon: SimpleIcons.siSpring, name: "SpringBoot", color: "green" },
  ];

  const companies = [
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

  return (
      <div className="min-h-screen bg-background">
        {/* Progress Bar */}
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
            style={{ scaleX: scrollYProgress }}
        />

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center relative px-4 bg-white">
          <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{ opacity }}
          >
            <div className="sparkle top-40 left-[20%]" />
            <div className="sparkle top-60 right-[30%]" />
            <div className="sparkle bottom-40 left-[40%]" />
          </motion.div>

          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center mb-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center md:text-left"
                style={{ scale }}
            >
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
              >
                <h2 className="text-xl mb-4">Hey, I'm Hans</h2>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  I build <span className="text-primary">seamless digital</span> experiences with clean, efficient code
                </h1>
                <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0">
                  As a frontend developer evolving into fullstack, I bring designs to life with performance, scalability, and user experience in mind.                </p>
              </motion.div>
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
              >
                <a
                    href="#contact"
                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
                >
                  Get in Touch
                  <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </a>
              </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative order-first md:order-last"
            >
              <div className="relative rounded-3xl overflow-hidden bg-secondary/50 p-4 md:p-8">
                <motion.img
                    src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&q=80"
                    alt="Profile"
                    className="w-full h-full rounded-2xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                />
                <motion.div
                    className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                />
                <motion.div
                    className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"
                    animate={{ scale: [1.2, 1, 1.2] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                />
              </div>
            </motion.div>
          </div>
          <SectionDivider type="wave" fill="#f9fafb" className="absolute bottom-0 left-0" />
        </section>

        {/* Technology Stack Section */}
        <section className="relative py-16 md:py-20 px-4 bg-gray-50">
          <motion.div
              className="container mx-auto"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={container}
          >
            <motion.div variants={item} className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl font-bold mb-4">Technology Stack</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Working with modern technologies to build scalable solutions
              </p>
            </motion.div>

            <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 mb-14"
                variants={container}
            >
              {technologies.map((tech, index) => (
                  <motion.div
                      key={index}
                      variants={item}
                      className="flex justify-center"
                  >
                    <TechIcon
                        path={tech.icon.path}
                        title={tech.name}
                        color={tech.color}
                    />
                  </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <SectionDivider type="curve" fill="white" className="absolute bottom-0 left-0" />
        </section>

        {/* Companies Section */}
        <section className="relative py-16 md:py-20 px-4 bg-white">
          <motion.div
              className="container mx-auto mb-14"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={container}
          >
            <motion.div variants={item} className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl font-bold mb-4">Companies I've Worked With</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Professional experience with industry leaders
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {companies.map((company, index) => (
                  <motion.div
                      key={index}
                      variants={item}
                      className="flex flex-col items-center p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-all duration-300"
                      whileHover={{ y: -5 }}
                  >
                    <img
                        src={company.logo}
                        alt={company.name}
                        className="w-28 h-20 mb-4 rounded-lg"
                    />
                    <h3 className="text-xl font-semibold mb-2">{company.name}</h3>
                    <p className="text-primary font-medium mb-1">{company.role}</p>
                    <p className="text-sm text-muted-foreground">{company.period}</p>
                  </motion.div>
              ))}
            </div>
          </motion.div>
          <SectionDivider type="tilt" fill="#eff6ff" className="absolute bottom-0 left-0" />
        </section>

        {/* Expertise Section */}
        <section className="relative py-16 md:py-20 px-4 bg-blue-50" id="expertise">
          <motion.div
              className="container mx-auto mb-14"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={container}
          >
            <motion.div variants={item} className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl font-bold mb-4">My Expertise</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Specialized in creating modern digital experiences
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  icon: <Code2 className="w-8 h-8" />,
                  title: "Web App Development",
                  description: "Building responsive, dynamic web applications with clean, maintainable code."
                },
                {
                  icon: <Server className="w-8 h-8" />,
                  title: "API Development",
                  description: "Creating robust, scalable APIs that power seamless data exchange and integrations."
                },
                {
                  icon: <Layers className="w-8 h-8" />,
                  title: "Fullstack Solutions",
                  description: "Bringing together frontend and backend technologies to deliver complete digital products."
                },
                // {
                //   icon: <Code2 className="w-8 h-8" />,
                //   title: "Webflow Development",
                //   description: "Building responsive and dynamic websites using modern technologies."
                // }
              ].map((service, index) => (
                  <motion.div
                      key={index}
                      variants={item}
                      whileHover={{ y: -5 }}
                      className="group p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300"
                  >
                    <motion.div
                        className="mb-4 text-primary"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    {/*<motion.div*/}
                    {/*    className="flex items-center text-primary group-hover:gap-2 transition-all"*/}
                    {/*    whileHover={{ x: 5 }}*/}
                    {/*>*/}
                    {/*  <span>Learn More</span>*/}
                    {/*  <ArrowRight className="w-4 h-4" />*/}
                    {/*</motion.div>*/}
                  </motion.div>
              ))}
            </div>
          </motion.div>
          <SectionDivider type="wave" fill="white" className="absolute bottom-0 left-0" />
        </section>

        {/* Projects Section */}
        <section className="relative py-16 md:py-20 px-4 bg-white" id="projects">
          <motion.div
              className="container mx-auto mb-14"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={container}
          >
            <motion.div variants={item} className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl font-bold mb-4">Recent Projects</h2>
              {/*<p className="text-muted-foreground max-w-2xl mx-auto">*/}
              {/*  A selection of my recent work*/}
              {/*</p>*/}
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  title: "App Dashboard",
                  image: "/api/placeholder/800/600",
                  description: "Modern dashboard design"
                },
                {
                  title: "E-commerce Platform",
                  image: "/api/placeholder/800/600",
                  description: "Full-featured online marketplace"
                },
                {
                  title: "Portfolio Website",
                  image: "/api/placeholder/800/600",
                  description: "Personal portfolio showcase"
                }
              ].map((project, index) => (
                  <motion.div
                      key={index}
                      variants={item}
                      whileHover={{ y: -5 }}
                      className="group bg-gray-50 rounded-xl overflow-hidden"
                  >
                    {/*<div className="aspect-video overflow-hidden">*/}
                    {/*  <motion.img*/}
                    {/*      src={project.image}*/}
                    {/*      alt={project.title}*/}
                    {/*      className="w-full h-full object-cover"*/}
                    {/*      whileHover={{ scale: 1.1 }}*/}
                    {/*      transition={{ duration: 0.3 }}*/}
                    {/*  />*/}
                    {/*</div>*/}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      {/*<motion.a*/}
                      {/*    href="#"*/}
                      {/*    className="text-primary hover:text-primary/80 flex items-center gap-1"*/}
                      {/*    whileHover={{ x: 5 }}*/}
                      {/*>*/}
                      {/*  <span>View Details</span>*/}
                      {/*  <ArrowRight className="w-4 h-4" />*/}
                      {/*</motion.a>*/}
                    </div>
                  </motion.div>
              ))}
            </div>
          </motion.div>
          <SectionDivider type="curve" fill="#fff7ed" className="absolute bottom-0 left-0" />
        </section>

        {/* Contact Section */}
        <section className="relative py-16 md:py-20 px-4 bg-orange-50" id="contact">
          <motion.div
              className="container mx-auto max-w-4xl mb-14"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={container}
          >
            <motion.div
                variants={item}
                className="bg-white p-8 md:p-12 rounded-2xl shadow-lg"
            >
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
                <p className="text-muted-foreground">
                  Have a project in mind? Let's create something amazing.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                <motion.a
                    href="mailto:georgehansdev@gmail.com"
                    className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                >
                  <Mail className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.a>
                <motion.a
                    href="assets/GeorgeHansonCV.pdf"
                    download="georgehanscv.pdf"
                    className="border border-primary text-primary px-6 py-3 rounded-full hover:bg-primary/10 transition-colors flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                >
                  <span>Download CV</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="relative py-8 px-4 border-t bg-white">
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex gap-4">
              {[
                { icon: <Github className="w-5 h-5" />, href: "https://github.com/georgehans1" },
                { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/george-hanson-8a287516b/?originalSubdomain=gh" },
                { icon: <Mail className="w-5 h-5" />, href: "mailto:georgehansdev@gmail.com" }
              ].map((social, index) => (
                  <motion.a
                      key={index}
                      href={social.href}
                      target={`_blank`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      whileHover={{ y: -2 }}
                  >
                    {social.icon}
                  </motion.a>
              ))}
            </div>
            <p className="text-muted-foreground text-sm">
              ©2024 Hans. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
  );
}

export default App;