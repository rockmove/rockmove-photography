"use client";

import NextImage from "next/image"; // next/imageを別名でインポート
import { useEffect, useState } from "react";
import EXIF from "exif-js";

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

type ExifData = {
  cameraMake: string;
  cameraModel: string;
  exposureTime: string;
  focalLength: string;
  aperture: string;
  iso: string;
};

export default function Home() {
  const [photoList, setPhotoList] = useState<Photo[]>([]);
  const [exifData, setExifData] = useState<Record<string, ExifData>>({});

  useEffect(() => {
    const fetchPhotoList = async () => {
      const res = await fetch("/api/photolist");
      const data = await res.json();
      setPhotoList(data.contents);
    };
    fetchPhotoList();
  }, []);

  const fetchExifData = (photo: Photo) => {
    const img = new window.Image(); // ネイティブのImageオブジェクトを明示的に使用
    img.crossOrigin = "Anonymous";
    img.src = photo.image.url;

    img.onload = () => {
      EXIF.getData(img, function (this: any) {
        const cameraMake = String(EXIF.getTag(this, "Make") || "N/A"); // カメラメーカーを文字列に変換
        const cameraModel = String(EXIF.getTag(this, "Model") || "N/A"); // カメラ名を文字列に変換
        const exposureTime = String(EXIF.getTag(this, "ExposureTime") || "N/A"); // 露出時間を文字列に変換
        const focalLength = String(EXIF.getTag(this, "FocalLength") || "N/A"); // 焦点距離を文字列に変換
        const aperture = String(EXIF.getTag(this, "FNumber") || "N/A"); // 絞り値を文字列に変換
        const iso = String(EXIF.getTag(this, "ISOSpeedRatings") || "N/A"); // ISO感度を文字列に変換

        setExifData((prev) => ({
          ...prev,
          [photo.id]: {
            cameraMake,
            cameraModel,
            exposureTime,
            focalLength,
            aperture,
            iso,
          },
        }));
      });
    };

    img.onerror = () => {
      console.error(`画像の読み込みに失敗しました: ${photo.image.url}`);
    };
  };

  return (
    <div>
      <p>ここに内容が表示されます。</p>
      {photoList.map((photo) => (
        <div key={photo.id}>
          <NextImage
            src={photo.image.url}
            alt='description'
            width={300}
            height={200}
            onLoadingComplete={() => fetchExifData(photo)} // Exif情報取得
          />
          {/* <p>ID: {photo.id}</p> */}
          <p>Genre: {photo.genre}</p>
          <p>Width: {photo.image.width}</p>
          <p>Height: {photo.image.height}</p>
          <p>CameraMake: {exifData[photo.id]?.cameraMake || "Loading..."}</p>
          <p>CameraModel: {exifData[photo.id]?.cameraModel || "Loading..."}</p>
          <p>
            ExposureTime: {exifData[photo.id]?.exposureTime || "Loading..."}
          </p>
          <p>FocalLength: {exifData[photo.id]?.focalLength || "Loading..."}</p>
          <p>Aperture: {exifData[photo.id]?.aperture || "Loading..."}</p>
          <p>Iso: {exifData[photo.id]?.iso || "Loading..."}</p>
        </div>
      ))}
    </div>
  );
}
