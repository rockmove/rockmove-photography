"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Photo = {
  id: string;
  image: {
    url: string;
  };
  genre: string;
  pickup: boolean;
};

export default function Home() {
  const [photoList, setPhotoList] = useState<Photo[]>([]);

  useEffect(() => {
    const fetchPhotoList = async () => {
      const res = await fetch("/api/photolist");
      const data = await res.json();
      setPhotoList(data.contents);
      console.log(data.contents);
    };
    fetchPhotoList();
  }, []);
  return (
    <div>
      <p>ここに内容が表示されます。</p>
      {photoList.map((photo) => (
        <div key={photo.id}>
          <p>{photo.id}</p>
          <p>{photo.genre}</p>
        </div>
      ))}
    </div>
  );
}
