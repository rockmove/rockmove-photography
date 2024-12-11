import React, { useEffect, useState } from "react";
import PhotoDetail from "./PhotoDetail";

import { Noto_Serif_JP, DM_Serif_Text } from "next/font/google";
import NextImage from "next/image"; // next/imageを別名でインポート

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const notoSerifJP = Noto_Serif_JP({
  weight: ["200", "400", "700"],
  style: "normal",
  subsets: ["latin"],
});
const dmSerifText = DM_Serif_Text({
  weight: ["400"],
  style: "normal",
  subsets: ["latin"],
});

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

const PickUp = () => {
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
    // <div className='w-full h-full grid grid-cols-4 grid-rows-3 gap-4" p-10'>
    //   {photoList
    //     .filter((photo) => photo.pickup)
    //     .map((photo) => (
    //       <PhotoDetail key={photo.id} photo={photo} />
    //     ))}
    // </div>
    <div className='w-full'>
      <dl className='grid grid-cols-[1fr_2fr]'>
        <dt className='flex flex-col justify-center items-center p-10'>
          <h2 className={`${dmSerifText.className} text-5xl mb-5`}>PICKUP</h2>
          <div className={`${notoSerifJP.className} text-2xl`}>
            こちらにピックアップが表示されます。御覧ください。
          </div>
        </dt>
        <dd className='h-screen'>
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
            className='h-screen'
          >
            {photoList
              .filter((photo) => photo.pickup)
              .map((photo) => (
                <SwiperSlide key={photo.id}>
                  <NextImage
                    className='h-full object-cover'
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
        </dd>
      </dl>
    </div>
  );
};

export default PickUp;
