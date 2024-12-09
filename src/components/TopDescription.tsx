import React from "react";
import { Noto_Serif_JP, DM_Serif_Text } from "next/font/google";

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
    <div className='container flex flex-col justify-center items-center space-y-8'>
      <h2 className={`${dmSerifText.className} text-8xl`}>
        Whispers of Nature
      </h2>
      <div className={`${notoSerifJP.className} text-4xl text-center`}>
        自然が織り成す力強い変化と繊細な美。
        <br />
        四季の流れ、水の形が静かに刻む美しさ、森が影を落とす場所。
        <br />
        その全てが、目に見えない何かが自然の息吹として感じられるひととき。
        <br />
        時の流れが紡ぎ出す、微細な光の舞、柔らかな陰影。
        <br />
        大地に降り注ぐ、瞬間の美が心に深く残る。
      </div>
    </div>
  );
};

export default TopDescription;
