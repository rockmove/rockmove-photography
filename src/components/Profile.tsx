import Image from "next/image";
import React from "react";

import { Noto_Serif_JP, DM_Serif_Text } from "next/font/google";
import { IconCamera, IconLength, IconTripod } from "./Icon";

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

const Profile = () => {
  return (
    <div className='w-full'>
      <dl className='grid grid-flow-row lg:grid-flow-col lg:grid-cols-[2fr_1fr]'>
        <dt className='flex justify-center items-center p-10 lg:order-2'>
          <div>
            <h2
              className={`${dmSerifText.className} text-3xl lg:text-5xl mb-3 lg:mb-5 text-center`}
            >
              Prolile
              <span className={`${notoSerifJP.className} ml-3 text-xl`}>
                （自己紹介）
              </span>
            </h2>
            <p className={`${notoSerifJP.className} mb-7 tex-xl lg:text-2xl`}>
              ３０代後半に行った海外旅行で、今まで感じなかった景色がとても素敵という感情に気が付く。その時持って行ってたカメラで景色を写真に収めたのがきっかけで風景写真の虜に。以降頭の中にあるイメージを具現化させるべく撮影、現像のあれこれを学び現在に至る。
            </p>
            <h2
              className={`${dmSerifText.className} text-3xl lg:text-5xl mb-3 lg:mb-5 text-center`}
            >
              Gear
              <span className={`${notoSerifJP.className} ml-3 text-xl`}>
                （撮影機材）
              </span>
            </h2>
            <dl className='flex items-center mb-4 lg:order-1'>
              <dt>
                <IconCamera size={40} color='black' label='Camera Maker' />
              </dt>
              <dd
                className={`${dmSerifText.className} ml-4 text-lg lg:text-xl`}
              >
                <p>SONY α7R IV（ILCE-7RM4）</p>
                <p>SONY α7 IV（ILCE-7M4）</p>
              </dd>
            </dl>
            <dl className='flex items-center mb-4'>
              <dt>
                <IconLength size={40} color='black' label='Camera Maker' />
              </dt>
              <dd
                className={`${dmSerifText.className} ml-4 text-lg lg:text-xl`}
              >
                <p>SONY FE16-35mmF2.8GM</p>
                <p>SONY FE100-400mmF4.5-5.6GMOSS</p>
                <p>TAMRON 28-200mmF/2.8-5.6DiIIIRXD</p>
              </dd>
            </dl>
            <dl className='flex items-center'>
              <dt>
                <IconTripod size={40} color='black' label='Camera Maker' />
              </dt>
              <dd
                className={`${dmSerifText.className} ml-4 text-lg lg:text-xl`}
              >
                <p>Really Right Stuff TVC-34L</p>
                <p>Gitzo GT3542LS</p>
              </dd>
            </dl>
          </div>
        </dt>
        <dd className='h-auto lg:h-screen'>
          <Image
            className='h-full object-cover'
            src='/profile.jpg'
            alt='profile'
            width={2048}
            height={1360}
          />
        </dd>
      </dl>
    </div>
  );
};

export default Profile;
