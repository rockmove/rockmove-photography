"use client";

import React, { useEffect } from "react";
import NextImage from "next/image"; // next/imageを別名でインポート

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IconSwiperLeft, IconSwiperRight } from "./Icon";

type Photo = {
  id: string;
  image: {
    url: string;
    width: number;
    height: number;
  };
  genre: string;
  pickup: boolean;
};

type PhotoDialogProps = {
  photos: Photo[]; // 写真リストの型をPhotoに変更
  selectedPhotoIndex: number | null; // 現在選択中の写真のインデックス
  onClose: () => void; // ダイアログを閉じる関数
};

const PhotoDialog = ({
  photos,
  selectedPhotoIndex,
  onClose,
}: PhotoDialogProps) => {
  useEffect(() => {
    // ダイアログ表示中にスクロール無効化
    document.body.style.overflow = "hidden";

    // ダイアログが閉じられた時にスクロールを有効に戻す
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      {/* オーバーレイ */}
      <div className='absolute inset-0 bg-black bg-opacity-70'></div>
      <div className='relative p-8'>
        <button
          className='absolute top-12 right-8 md:top-5 md:right-5 w-[50px] h-[50px] bg-black bg-opacity-40 rounded-full text-white hover:opacity-80 z-[10000]'
          onClick={onClose}
        >
          ✕
        </button>
        <Swiper
          initialSlide={selectedPhotoIndex ?? 0}
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          slidesPerView={"auto"}
          speed={400}
          autoplay={false}
          navigation={{
            nextEl: ".swiper-arrowButton-next",
            prevEl: ".swiper-arrowButton-prev",
          }}
          className='h-screen md:h-[95vh]'
        >
          {photos.map((photo) => (
            <SwiperSlide key={photo.id}>
              <div className='relative w-full h-full flex items-center justify-center'>
                <NextImage
                  src={photo.image.url}
                  alt='description'
                  width={photo.image.width}
                  height={photo.image.height}
                  className='object-contain w-full h-full max-w-full max-h-full'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='swiper-arrowButton-next absolute top-1/2 transform -translate-y-1/2 right-2 md:right-8 cursor-pointer z-10'>
          <div className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] bg-black bg-opacity-40 rounded-full flex justify-center items-center'>
            <IconSwiperRight color='#fff' label='arrow' size={40} />
          </div>
        </div>
        <div className='swiper-arrowButton-prev absolute top-1/2 transform -translate-y-1/2 left-2 md:left-8 cursor-pointer z-10'>
          <div className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] bg-black bg-opacity-40 rounded-full flex justify-center items-center'>
            <IconSwiperLeft color='#fff' label='arrow' size={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDialog;
