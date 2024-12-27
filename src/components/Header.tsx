"use client";

import React, { useState, useEffect } from "react";
import { IconLogo } from "./Icon";
import SlideMenu from "./SlideMenu";
import Link from "next/link";

interface HeaderProps {
  isInView: boolean; // 監視対象の要素がビューポート内かどうか
}

const Header = ({ isInView }: HeaderProps) => {
  const [logoColor, setLogoColor] = useState(""); // ロゴの色

  useEffect(() => {
    if (!isInView) {
      setLogoColor("black"); // ロゴの色を変更
    } else {
      setLogoColor("white"); // 元のロゴ色
    }
  }, [isInView]); // トップページ判定やビューポート内外で変更

  return (
    <header
      className={`fixed top-0 left-0 w-full px-5 md:px-10 py-4 md:py-5 z-50 transition-all`}
    >
      <ul className='flex justify-between items-center'>
        <li className='w-3/5 md:w-72'>
          <Link href={"/"}>
            <IconLogo
              width='100%'
              height='auto'
              color={logoColor}
              label='RockmovePhotography'
            />
          </Link>
        </li>
        <li>
          <SlideMenu />
        </li>
      </ul>
    </header>
  );
};

export default Header;
