"use client";

import React, { useEffect, useState } from "react";
import NextImage from "next/image"; // next/imageを別名でインポート

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

export default function Contact() {
  const [photoList, setPhotoList] = useState<Photo[]>([]);

  useEffect(() => {
    const fetchPhotoList = async () => {
      const res = await fetch("/api/photolist");
      const data = await res.json();
      setPhotoList(data.contents);
    };
    fetchPhotoList();
  }, []);
  return (
    <>
      <div className='h-screen flex justify-center items-center'>
        <div className='w-1/2 h-auto bg-slate-500'>
          {/* <p>
            <NextImage
              className='h-full object-cover'
              src='/profile.jpg'
              alt='profile'
              width={2048}
              height={1360}
            />
          </p> */}
          <div>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              loop={true}
              slidesPerView={"auto"}
              speed={400}
              autoplay={false}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
            >
              {photoList
                .filter((photo) => photo.pickup)
                .map((photo) => (
                  <SwiperSlide key={photo.id}>
                    <NextImage
                      className='w-full'
                      src={photo.image.url}
                      alt='description'
                      width={photo.image.width}
                      height={photo.image.height}
                    />
                  </SwiperSlide>
                ))}
              <div className='swiper-button-next'></div>
              <div className='swiper-button-prev'></div>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
