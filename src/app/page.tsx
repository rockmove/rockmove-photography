import PhotoList from "./components/PhotoList";

export default function Home() {
  return (
    <div>
      <div className='relative w-full h-screen overflow-hidden'>
        <video
          src='/20240217_am_dm3p.mp4'
          autoPlay
          loop
          muted
          playsInline
          className='absolute top-0 left-0 w-full h-full  object-cover object-center'
        ></video>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white'>
          <h1>こんな感じのが流れるよ…</h1>
        </div>
      </div>
      <PhotoList />
    </div>
  );
}
