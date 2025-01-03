import React, { useState, useEffect } from "react";

import { Noto_Serif_JP } from "next/font/google";
import Link from "next/link";
import MenuButtonComponent from "./MenuButton";

const notoSerifJP = Noto_Serif_JP({
  weight: ["200", "400", "700"],
  style: "normal",
  subsets: ["latin"],
});

const SlideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // メニューの開閉に応じてスクロールを無効化する
  useEffect(() => {
    if (isOpen) {
      // メニューが開いたらスクロールを無効化
      document.body.style.overflow = "hidden";
    } else {
      // メニューが閉じたらスクロールを有効化
      document.body.style.overflow = "auto";
    }

    // クリーンアップ関数でコンポーネントがアンマウントされたときにスクロールを有効化
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <MenuButtonComponent isOpen={isOpen} onClick={toggleMenu} />

      {/* メニュー */}
      <div
        className={`fixed top-0 right-0 w-[27rem] h-full bg-[#c6bdb5] text-white z-20 transition-all
          ${
            isOpen
              ? "opacity-100 translate-x-0 duration-300 ease-out pointer-events-auto" // 開くときのアニメーション: 速さと滑らかさ
              : "opacity-0 translate-x-[5%] duration-200 ease-in pointer-events-none" // 閉じるときのアニメーション: 速さを少し速くして、右からの動きを少し残す
          }
        `}
      >
        <div className='relative pt-28 px-20'>
          <ul className='text-white text-3xl space-y-4'>
            <li
              className={`${notoSerifJP.className} border-b border-white pb-4`}
            >
              <Link href={"/"} className='block w-full'>
                ホーム
              </Link>
            </li>
            <li
              className={`${notoSerifJP.className} border-b border-white pb-4`}
            >
              <Link href={"/gallery"} className='block w-full'>
                ギャラリー
              </Link>
            </li>
            <li
              className={`${notoSerifJP.className} border-b border-white pb-4`}
            >
              お問い合わせ
            </li>
          </ul>
        </div>
      </div>

      {/* メニュー背景を暗くするオーバーレイ */}
      {isOpen && (
        <div
          className='fixed inset-0 bg-gray-500 opacity-60 z-10'
          onClick={toggleMenu} // オーバーレイをクリックしてメニューを閉じる
        />
      )}
    </>
  );
};

export default SlideMenu;
