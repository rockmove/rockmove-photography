"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import VideoHeader from "@/components/VideoHeader";
import TopDescription from "@/components/TopDescription";
import Profile from "@/components/Profile";
import PickUp from "@/components/PickUp";

export default function Home() {
  const [isInView, setIsInView] = useState(false); // 要素がビューポート内かどうか

  useEffect(() => {
    // IntersectionObserverの設定
    const options = {
      root: null, // ビューポートを基準に
      rootMargin: "0px",
      threshold: 0.5, // 30%が表示されたタイミングで反応
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const currentSection = entry.target;
        const previousSection = currentSection.previousElementSibling;

        // 次の要素がビューポートに30%〜50%入ったとき
        if (entry.isIntersecting) {
          // 前のセクションにブラーを適用
          if (previousSection) {
            previousSection.classList.add("blur-[2px]");
          }
        } else {
          // セクションがビューポートから外れたとき
          if (previousSection) {
            previousSection.classList.remove("blur-[2px]");
          }
        }
      });
    }, options);

    // 各セクションに対して監視を開始
    const sections = document.querySelectorAll(".js-observed");
    sections.forEach((section) => {
      observer.observe(section);
    });

    // クリーンアップ
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <Header isInView={isInView} />
      <VideoHeader setIsInView={setIsInView} />
      <section className='js-observed lg:sticky lg:top-0 bg-white flex justify-center items-center h-auto lg:min-h-screen'>
        <TopDescription />
      </section>
      <section className='js-observed lg:sticky lg:top-0 bg-white flex justify-center items-center h-auto lg:min-h-screen'>
        <PickUp />
      </section>
      <section className='js-observed lg:sticky lg:top-0 bg-white flex justify-center items-center h-auto lg:min-h-screen'>
        <Profile />
      </section>
    </>
  );
}
