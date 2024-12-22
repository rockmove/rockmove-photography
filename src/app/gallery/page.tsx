import Header from "@/components/Header";
import PhotoList from "@/components/PhotoList";
import React from "react";

export default function Gallery() {
  return (
    <>
      <Header isInView={false} />
      <div className='mt-20'>
        <PhotoList />
      </div>
    </>
  );
}
