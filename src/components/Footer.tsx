import React from "react";
import { IconFacebook, IconInstagram, IconLogo, IconX } from "./Icon";
import { DM_Serif_Text } from "next/font/google";
import Link from "next/link";

const dmSerifText = DM_Serif_Text({
  weight: ["400"],
  style: "normal",
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <footer className='js-observed lg:sticky lg:top-0 flex flex-col justify-between h-auto lg:min-h-screen bg-[#c6bdb5] px-10 py-10 mb-0 lg:px-48 lg:pt-52 lg:pb-24'>
      <ul className='lg:flex lg:flex-row mb-8 lg:mb-0'>
        <li className='lg:flex-1 lg:px-7 lg:border-r lg:border-l lg:border-gray-100 mb-7 lg:mb-0'>
          <p className='mb-1 lg:mb-2 w-3/5'>
            <Link href={"/"}>
              <IconLogo
                width='100%'
                height='auto'
                color='#fff'
                label='RockmovePhotography'
              />
            </Link>
          </p>
          <p className={`${dmSerifText.className} text-white`}>
            Operation by Ryuhei Hosomi
          </p>
        </li>
        <li
          className={`${dmSerifText.className} lg:flex-1 lg:px-7 lg:border-r lg:border-gray-100 mb-7 lg:mb-0`}
        >
          <h2 className='mb-3 lg:mb-6 text-3xl lg:text-4xl text-white'>
            Sitemap
          </h2>
          <ul className='space-y-2 lg:space-y-3'>
            <li className='text-2xl text-white'>
              <Link href={"/"} className='hover:opacity-60'>
                HOME
              </Link>
            </li>
            <li className='text-2xl text-white'>
              <Link href={"/gallery"} className='hover:opacity-60'>
                GALLERY
              </Link>
            </li>
            <li className='text-2xl text-white'>CONTACT</li>
          </ul>
        </li>
        <li className='lg:flex-1 lg:px-7 lg:border-r lg:border-gray-100'>
          <h2
            className={`${dmSerifText.className} mb-6 text-3xl lg:text-4xl text-white`}
          >
            SNS
          </h2>
          <ul className='space-y-3 lg:space-y-5'>
            <li>
              <Link
                href={"https://x.com/rockmoveworks1"}
                target='_blank'
                className='flex items-center space-x-1 w-fit hover:opacity-60'
              >
                <p>
                  <IconX size={28} />
                </p>
                <p className={`${dmSerifText.className} text-2xl text-white`}>
                  （rockmoveworks1）
                </p>
              </Link>
            </li>
            <li>
              <Link
                href={"https://www.instagram.com/rockmove/"}
                target='_blank'
                className='flex items-center space-x-1 w-fit hover:opacity-60'
              >
                <p>
                  <IconInstagram size={30} />
                </p>
                <p className={`${dmSerifText.className} text-2xl text-white`}>
                  （rockmove）
                </p>
              </Link>
            </li>
            <li>
              <Link
                href={"https://www.facebook.com/rockmove"}
                target='_blank'
                className='flex items-center space-x-1 w-fit hover:opacity-60'
              >
                <p>
                  <IconFacebook size={30} />
                </p>
                <p className={`${dmSerifText.className} text-2xl text-white`}>
                  （rockmove）
                </p>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
      <p
        className={`${dmSerifText.className} text-center text-xs lg:text-xl text-white`}
      >
        &copy; 2024 RockmovePhotograpy. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
