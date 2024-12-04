import TextBox from "@/components/ TextBox";
import PhotoList from "@/components/PhotoList";
import VideoHeader from "@/components/VideoHeader";

export default function Home() {
  return (
    <div>
      <VideoHeader />
      {/* <PhotoList /> */}
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
