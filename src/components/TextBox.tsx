"use client";

import React from "react";
import { motion } from "framer-motion";

const TextBox = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }} // 初期状態（透明で少し下に）
      whileInView={{ opacity: 1, y: 0 }} // ビューに入ったときの状態
      transition={{ duration: 1.1, ease: "easeOut", delay: 0.3 }} // アニメーションの設定
      viewport={{ once: true }} // 一度だけアニメーションを実行
    >
      <h1 className=' text-3xl lg:text-7xl font-semibold'>
        スクロールしてフェードイン
      </h1>
    </motion.div>
  );
};

export default TextBox;
