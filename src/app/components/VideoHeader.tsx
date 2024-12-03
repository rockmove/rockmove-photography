"use client";

import React, { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const VideoHeader = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 背景動画のスクロールに応じた動き
  const videoSpring = useSpring({
    transform: `translateY(${scrollY * 0.4}px)`,
  });

  // テキストのフェードインとスライドインのアニメーション
  const textSpring = useSpring({
    opacity: scrollY > 50 ? 1 : 0,
    transform: `translateY(${Math.min(scrollY * 200, 0)}px)`,
  });

  return (
    <div className='relative w-full h-screen overflow-hidden'>
      {/* 背景動画 */}
      <animated.video
        style={{ ...videoSpring }}
        src='/20240217_am_dm3p_hd.mp4'
        autoPlay
        loop
        muted
        playsInline
        className='absolute top-0 left-0 w-full h-full object-cover object-center'
      ></animated.video>

      <animated.div
        style={{ ...textSpring }}
        className='absolute bottom-8 w-full text-center'
      >
        <h1 className='text-white text-7xl'>
          こんな感じのが流れるよ…
          <br />
          こんな感じのが流れるよ…
          <br />
          こんな感じのが流れるよ…
        </h1>
      </animated.div>
    </div>
  );
};

export default VideoHeader;
