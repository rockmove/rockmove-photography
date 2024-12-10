"use client";

import React, { useState, useEffect } from "react";
import { IconLogo } from "./Icon";
import SlideMenu from "./SlideMenu";

interface HeaderProps {
  isInView: boolean; // 監視対象の要素がビューポート内かどうか
}

const Header = ({ isInView }: HeaderProps) => {
  const [bgClass, setBgClass] = useState(""); // 背景色のクラス
  const [logoColor, setLogoColor] = useState(""); // ロゴの色

  useEffect(() => {
    if (!isInView) {
      setBgClass("bg-white"); // 要素がビュー外になったとき
      setLogoColor("black"); // ロゴの色を変更
    } else {
      setBgClass("bg-transparent"); // 元の背景色
      setLogoColor("white"); // 元のロゴ色
    }
  }, [isInView]); // トップページ判定やビューポート内外で変更

  return (
    <header
      className={`fixed top-0 left-0 w-full px-10 py-5 z-50 transition-all`}
    >
      <ul className='flex justify-between items-center'>
        <li>
          <IconLogo
            width={350}
            height='auto'
            color={logoColor}
            label='RockmovePhotography'
          />
        </li>
        <li>
          <SlideMenu />
        </li>
      </ul>
    </header>
  );
};

export default Header;
