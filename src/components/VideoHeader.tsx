"use client";

import { div } from "framer-motion/client";
import React, { useEffect, useRef } from "react";

interface MovieSectionProps {
  setIsInView: (isInView: boolean) => void; // 親コンポーネントにisInView状態を渡す関数
}

const VideoHeader = ({ setIsInView }: MovieSectionProps) => {
  const targetRef = useRef<HTMLDivElement>(null); // 監視対象の要素を参照

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting); // 要素がビューポートに表示されたか
      },
      {
        threshold: 0,
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current); // 監視を開始
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current); // 監視解除
      }
    };
  }, [setIsInView]);

  return (
    <>
      <div className='sticky top-0 w-full min-h-screen'>
        <video
          src='/20240217_am_dm3p_hd.mp4'
          autoPlay
          loop
          muted
          playsInline
          className='absolute w-full h-full object-cover object-center'
        ></video>
      </div>
      <div ref={targetRef}></div>
    </>
  );
};

export default VideoHeader;
