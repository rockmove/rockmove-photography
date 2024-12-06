"use client";

import React, { useEffect } from "react";

export default function Contact() {
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
            previousSection.classList.add("blur-sm");
          }
        } else {
          // セクションがビューポートから外れたとき
          if (previousSection) {
            previousSection.classList.remove("blur-sm");
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
      <div className='relative'>
        <section className='js-observed sticky top-0 bg-slate-400 flex justify-center items-center min-h-screen text-white text-8xl'>
          コンテンツ１
        </section>
        <section className='js-observed sticky top-0 bg-slate-500 flex justify-center items-center min-h-screen text-white text-8xl'>
          コンテンツ２
        </section>
        <section className='js-observed sticky top-0 bg-slate-600 flex justify-center items-center min-h-screen text-white text-8xl'>
          コンテンツ３
        </section>
        <section className='js-observed sticky top-0 bg-slate-700 flex justify-center items-center min-h-screen text-white text-8xl'>
          コンテンツ４
        </section>
        <section className='js-observed sticky top-0 bg-slate-800 flex justify-center items-center min-h-screen text-white text-8xl'>
          コンテンツ５
        </section>
      </div>
    </>
  );
}
