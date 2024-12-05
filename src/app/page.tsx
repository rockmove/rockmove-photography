import Header from "@/components/Header";
import TextBox from "@/components/TextBox";
import VideoHeader from "@/components/VideoHeader";

export default function Home() {
  return (
    <div className='relative'>
      <Header />
      <VideoHeader />
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
