"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import TextBox from "@/components/TextBox";
import VideoHeader from "@/components/VideoHeader";

export default function Home() {
  const [isInView, setIsInView] = useState(false); // 要素がビューポート内かどうか

  return (
    <div className='relative'>
      <Header isInView={isInView} />
      <VideoHeader setIsInView={setIsInView} />
      <div className='h-screen w-screen flex justify-center items-center bg-slate-300'>
        <TextBox />
      </div>
      <div className='h-screen w-screen flex justify-center items-center bg-white'>
        <TextBox />
      </div>
      <div className='h-screen w-screen flex justify-center items-center bg-slate-300'>
        <TextBox />
      </div>
      <div className='h-screen w-screen flex justify-center items-center bg-white'>
        <TextBox />
      </div>
    </div>
  );
}
