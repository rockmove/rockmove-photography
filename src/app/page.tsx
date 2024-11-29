"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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

export default function Home() {
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
    <div>
      <p>ここに内容が表示されます。</p>
      {photoList.map((photo) => (
        <div key={photo.id}>
          <p>
            <Image
              src={photo.image.url as string}
              alt='description'
              width={300}
              height={200}
            />
          </p>
          <p>{photo.id}</p>
          <p>{photo.genre}</p>
          <p>{photo.image.width}</p>
          <p>{photo.image.height}</p>
        </div>
      ))}
    </div>
  );
}
