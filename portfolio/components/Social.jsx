import React from "react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";

export default function Social({ containerStyles, iconStyles }) {
  const Icons = [
    {
      icons: <IoLogoGithub />,
      path: "",
    },
    {
      icons: <FaLinkedin />,
      path: "",
    },
  ];
  return (
    <>
      <div className={containerStyles}>
        {Icons.map((item, index) => {
          return (
            <Link key={index} href={item.path} className={iconStyles}>
              {item.icons}
            </Link>
          );
        })}
      </div>
    </>
  );
}
