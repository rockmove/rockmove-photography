import { IconLogo } from "@/components/Icon";
import PhotoList from "@/components/PhotoList";
import React from "react";

export default function Gallery() {
  return (
    <div className='mt-5'>
      <IconLogo
        width={350}
        height='auto'
        color='#0f172a'
        label='RockmovePhotography'
      />
      <PhotoList />
    </div>
  );
}
