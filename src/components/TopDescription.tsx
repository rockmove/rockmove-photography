import React from "react";
import { Noto_Serif_JP, DM_Serif_Text } from "next/font/google";
import Image from "next/image";

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

const TopDescription = () => {
  return (
    <div className='w-full'>
      <dl className='grid grid-flow-row lg:grid-flow-col lg:grid-cols-[2fr_1fr]'>
        <dt className='flex flex-col justify-center items-center p-10 lg:order-2'>
          <h2
            className={`${dmSerifText.className} text-3xl md:text-5xl mb-3 lg:mb-5`}
          >
            Whispers of Nature
          </h2>
          <div className={`${notoSerifJP.className} tex-xl lg:text-2xl`}>
            自然が織り成す力強い変化と繊細な美。
            四季の流れ、水の形が静かに刻む美しさ、森が影を落とす場所。
            その全てが、目に見えない何かが自然の息吹として感じられるひととき。
            時の流れが紡ぎ出す、微細な光の舞、柔らかな陰影。
            大地に降り注ぐ、瞬間の美が心に深く残る。
          </div>
        </dt>
        <dd className='w-full h-auto lg:h-screen lg:order-1'>
          <Image
            className='h-full object-cover'
            src='/topdescription.jpg'
            alt='profile'
            width={2048}
            height={1366}
          />
        </dd>
      </dl>
    </div>
  );
};

export default TopDescription;
