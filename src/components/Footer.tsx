import React from "react";
import { IconFacebook, IconInstagram, IconLogo, IconX } from "./Icon";
import { Noto_Serif_JP, DM_Serif_Text } from "next/font/google";
import Link from "next/link";

const notoSerifJP = Noto_Serif_JP({
  weight: ["200", "400", "700"],
  style: "normal",
  subsets: ["latin"],
});
const dmSerifText = DM_Serif_Text({
  weight: ["400"],
  style: "normal",
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <footer className='js-observed md:sticky md:top-0 flex flex-col justify-between h-auto md:min-h-screen bg-[#c6bdb5] px-10 py-10 mb-0 md:px-48 md:pt-52 md:pb-24'>
      <ul className='md:flex md:flex-row mb-8 md:mb-0'>
        <li className='md:flex-1 md:px-7 md:border-r md:border-l md:border-gray-100 mb-7 md:mb-0'>
          <p className='mb-1 md:mb-2'>
            <IconLogo
              width={280}
              height='auto'
              color='#fff'
              label='RockmovePhotography'
            />
          </p>
          <p className={`${dmSerifText.className} text-white`}>
            Operation by Ryuhei Hosomi
          </p>
        </li>
        <li
          className={`${dmSerifText.className} md:flex-1 md:px-7 md:border-r md:border-gray-100 mb-7 md:mb-0`}
        >
          <h2 className='mb-3 md:mb-6 text-3xl md:text-4xl text-white'>
            Sitemap
          </h2>
          <ul className='space-y-2 md:space-y-3'>
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
            <li className='text-2xl text-white'>
              <Link href={"/contact"} className='hover:opacity-60'>
                CONTACT
              </Link>
            </li>
          </ul>
        </li>
        <li className='md:flex-1 md:px-7 md:border-r md:border-gray-100'>
          <h2
            className={`${dmSerifText.className} mb-6 text-3xl md:text-4xl text-white`}
          >
            SNS
          </h2>
          <ul className='space-y-3 md:space-y-5'>
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
        className={`${dmSerifText.className} text-center text-xs md:text-xl text-white`}
      >
        &copy; 2024 RockmovePhotograpy. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
