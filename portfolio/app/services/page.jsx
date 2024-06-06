"use client";
import React from "react";
import Link from "next/link";
import { MoveDownRight } from "lucide-react";
import { motion } from "framer-motion";

function Services() {
  const services = [
    {
      num: "01",
      title: "Responsive Web Design",
      description:
        "Create visually appealing and highly responsive websites that look great on any device, from desktops to smartphones.",
      href: "",
    },
    {
      num: "02",
      title: "HTML/CSS Development",
      description:
        "Write clean, maintainable code adhering to the latest standards for functional, accessible, and easy-to-maintain websites.",
      href: "",
    },
    {
      num: "03",
      title: "SPA Development",
      description:
        "Develop fast and interactive single-page applications using modern frameworks for a seamless user experience.",
      href: "",
    },
    {
      num: "04",
      title: " Version Control (Git)",
      description:
        "Track changes and streamline collaboration with repository setup, branching strategies, and code reviews.",
      href: "",
    },
  ];

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500 ">
                    {item.num}
                  </div>
                  <Link
                    href={item.href}
                    className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <MoveDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 ">
                  {item.title}
                </h2>
                <p className="text-white/60">{item.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
