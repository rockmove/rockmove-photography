"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import TextBox from "@/components/TextBox";
import VideoHeader from "@/components/VideoHeader";
import TopDescription from "@/components/TopDescription";
import Profile from "@/components/Profile";

export default function Home() {
  const [isInView, setIsInView] = useState(false); // 要素がビューポート内かどうか

  useEffect(() => {
    // IntersectionObserverの設定
    const options = {
      root: null, // ビューポートを基準に
      rootMargin: "0px",
      threshold: 0.3, // 30%が表示されたタイミングで反応
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
      <section className='js-observed sticky top-0 bg-white flex justify-center items-center min-h-screen'>
        <TopDescription />
      </section>
      <section className='js-observed sticky top-0 bg-slate-500 flex justify-center items-center min-h-screen text-white text-7xl'>
        ここにはピックアップコンテンツが入る
      </section>
      <section className='js-observed sticky top-0 bg-white flex justify-center items-center min-h-screen'>
        <Profile />
      </section>
    </>
  );
}
