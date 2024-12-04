"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const VideoHeader = () => {
  const { scrollYProgress } = useScroll(); // スクロール進捗を取得
  const scrollY = useTransform(scrollYProgress, [0, 1], [0, 1300]); // スクロール位置に基づく変換

  // 背景動画のスクロールに応じた動き
  const videoTransform = useTransform(
    scrollY,
    (value) => `translateY(${value * 1.0}px)`
  );

  // テキストのフェードインとスライドインのアニメーション
  const textOpacity = useTransform(scrollY, [0, 150], [0, 1]);
  const textTransform = useTransform(scrollY, [0, 300], [100, 0]);

  return (
    <div className='relative w-full h-screen overflow-hidden'>
      <motion.video
        style={{
          transform: videoTransform,
        }}
        src='/20240217_am_dm3p_hd.mp4'
        autoPlay
        loop
        muted
        playsInline
        className='absolute top-0 left-0 w-full h-full object-cover object-center'
      ></motion.video>
      <motion.div
        style={{
          opacity: textOpacity,
          transform: textTransform,
        }}
        transition={{
          opacity: { duration: 3, ease: "easeInOut" },
          transform: { duration: 1, ease: [0.7, 0, 0.3, 1] },
        }}
        className='absolute bottom-8 w-full text-center'
      >
        <h1 className='text-white text-3xl lg:text-7xl'>
          こんな感じのが流れるよ…
          <br />
          こんな感じのが流れるよ…
          <br />
          こんな感じのが流れるよ…
        </h1>
      </motion.div>
    </div>
  );
};

export default VideoHeader;
