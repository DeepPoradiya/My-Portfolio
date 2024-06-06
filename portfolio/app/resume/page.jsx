"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
  SiMui,
} from "react-icons/si";

function Resume() {
  const aboutData = [
    {
      title: "Personal Information",
      description: "Basic personal information and contact details.",
      info: [
        { fieldName: "Name", fieldValue: "Deep Poradiya" },
        { fieldName: "Experience", fieldValue: "1 year" },
        { fieldName: "Phone Number", fieldValue: "6355669731" },
        { fieldName: "Email", fieldValue: "deepporadiya@gmail.com" },
        { fieldName: "Nationality", fieldValue: "Indian" },
        { fieldName: "Languages", fieldValue: "Gujarati, Hindi" },
      ],
    },
  ];

  const experience = {
    title: "My Experience",
    description: "Details of my professional experience.",
    items: [
      {
        company: "Sulok Digital Solutions Pvt Ltd",
        position: "Frontend Developer",
        duration: "2023 - Present",
      },
    ],
  };

  const education = {
    title: "My Education",
    description: "Educational background and qualifications.",
    items: [
      {
        institution: "Nandanvan High School",
        degree: "SSC",
        duration: "2019 - 2020",
      },
      {
        institution: "Nandanvan High School",
        degree: "HSC",
        duration: "2020 - 2021",
      },
      {
        institution: "Dr Subhash College Of Computer Science",
        degree: "BCA",
        duration: "2021 - 2024",
      },
    ],
  };

  const skills = {
    title: "My Skills",
    description: "Technical skills and proficiencies.",
    skillLists: [
      { name: "HTML 5", icons: <FaHtml5 /> },
      { name: "CSS", icons: <FaCss3Alt /> },
      { name: "JavaScript", icons: <SiJavascript /> },
      { name: "Bootstrap", icons: <FaBootstrap /> },
      { name: "React.js", icons: <FaReact /> },
      { name: "Next.js", icons: <SiNextdotjs /> },
      { name: "Redux", icons: <SiRedux /> },
      { name: "Git & GitHub", icons: <FaGithub /> },
      { name: "Tailwind CSS", icons: <SiTailwindcss /> },
      { name: "MUI", icons: <SiMui /> },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mt-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            {/* //experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent ">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-5">
                          <span className="bg-accent w-[6px] h-[6px] rounded-full"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* //education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent ">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-5">
                          <span className="bg-accent w-[6px] h-[6px] rounded-full"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* //skills */}
            <TabsContent value="skills" className="w-full h-full ">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4  gap-4 xl:gap-[30px]">
                    {skills.skillLists.map((skill, index) => (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-500 ">
                                {skill.icons}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* //about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent ">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-5">
                          <span className="bg-accent w-[6px] h-[6px] rounded-full"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}

export default Resume;
