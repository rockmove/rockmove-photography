import React, { useEffect, useState } from "react";
import PhotoDetail from "./PhotoDetail";

import { Noto_Serif_JP, DM_Serif_Text } from "next/font/google";
import NextImage from "next/image"; // next/imageを別名でインポート

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IconSwiperLeft, IconSwiperRight } from "./Icon";

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
    <div className='w-full'>
      <dl className='grid grid-cols-[1fr_2fr]'>
        <dt className='flex flex-col justify-center items-center p-10'>
          <h2 className={`${dmSerifText.className} text-5xl mb-5`}>PICKUP</h2>
          <div className={`${notoSerifJP.className} text-xl`}>
            注目の写真をトップページでお届けします。選りすぐりの風景写真たちが、この場所に特別な雰囲気をもたらしています。それぞれの写真が持つ美しさや魅力をぜひご覧いただき、お気に入りの一枚を見つけてください。
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
              nextEl: ".swiper-arrowButton-next",
              prevEl: ".swiper-arrowButton-prev",
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
            <div className='swiper-arrowButton-next absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer z-10'>
              <IconSwiperRight color='#fff' label='arrow' size={60} />
            </div>
            <div className='swiper-arrowButton-prev absolute top-1/2 transform -translate-y-1/2 left-4 cursor-pointer z-10'>
              <IconSwiperLeft color='#fff' label='arrow' size={60} />
            </div>
          </Swiper>
        </dd>
      </dl>
    </div>
  );
};

export default PickUp;