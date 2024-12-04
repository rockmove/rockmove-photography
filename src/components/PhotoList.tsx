"use client";

import React from "react";
import NextImage from "next/image"; // next/imageを別名でインポート
import { useEffect, useState } from "react";
import EXIF from "exif-js";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

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

const PhotoList = () => {
  const [photoList, setPhotoList] = useState<Photo[]>([]);
  const [exifData, setExifData] = useState<Record<string, ExifData>>({});
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]); // 選択されたジャンル
  const [filteredPhotos, setFilteredPhotos] = useState<Photo[]>([]); // 絞り込んだ写真リスト

  useEffect(() => {
    const fetchPhotoList = async () => {
      const res = await fetch("/api/photolist");
      const data = await res.json();
      setPhotoList(data.contents);
      setFilteredPhotos(data.contents); // 初期値としてすべての写真を表示
    };
    fetchPhotoList();
  }, []);

  useEffect(() => {
    // 選択されたジャンルで写真を絞り込む
    const updatedPhotos = photoList.filter((photo) =>
      selectedGenres.length ? selectedGenres.includes(photo.genre) : true
    );
    setFilteredPhotos(updatedPhotos);
  }, [selectedGenres, photoList]);

  const fetchExifData = (photo: Photo) => {
    const img = new window.Image(); // ネイティブのImageオブジェクトを明示的に使用
    img.crossOrigin = "Anonymous";
    img.src = photo.image.url;

    img.onload = () => {
      EXIF.getData(img, function (this: any) {
        const cameraMake = String(EXIF.getTag(this, "Make") || "N/A");
        const cameraModel = String(EXIF.getTag(this, "Model") || "N/A");
        const exposureTime = String(EXIF.getTag(this, "ExposureTime") || "N/A");
        const focalLength = String(EXIF.getTag(this, "FocalLength") || "N/A");
        const aperture = String(EXIF.getTag(this, "FNumber") || "N/A");
        const iso = String(EXIF.getTag(this, "ISOSpeedRatings") || "N/A");

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

  // ジャンルごとのユニークなキーを生成
  const genreWithIds = photoList.map((photo) => ({
    genre: photo.genre,
    id: photo.id,
  }));

  // 重複を排除
  const uniqueGenres = Array.from(
    new Set(genreWithIds.map((item) => item.genre))
  );

  const handleCheckboxChange = (genre: string) => {
    setSelectedGenres((prevGenres) =>
      prevGenres.includes(genre)
        ? prevGenres.filter((g) => g !== genre)
        : [...prevGenres, genre]
    );
  };

  // 状態をリセットする関数
  const handleClearFilters = () => {
    setSelectedGenres([]); // 選択されたジャンルを空にする
  };

  return (
    <>
      <div className='flex flex-col justify-center container mx-auto space-y-6 mb-10'>
        <p className='text-center text-slate-500'>ジャンルで絞り込み</p>
        <ul className='flex justify-center flex-wrap space-x-7'>
          {uniqueGenres.map((genre) => {
            // それぞれのgenreに対応するphoto.idを取り出す
            const photoId = genreWithIds.find(
              (item) => item.genre === genre
            )?.id;

            return (
              <li className='flex mb-3' key={`${genre}-${photoId}`}>
                <Checkbox
                  id={genre}
                  className='w-6 h-6 border-slate-300 cursor-pointer'
                  checked={selectedGenres.includes(genre)}
                  onCheckedChange={() => handleCheckboxChange(genre)}
                />
                <label
                  className='cursor-pointer pl-2 text-slate-500 md:text-xl'
                  htmlFor={genre}
                >
                  {genre}
                </label>
              </li>
            );
          })}
        </ul>
        <p className='flex justify-center items-center'>
          <Button variant='search' onClick={handleClearFilters}>
            全表示（絞り込みクリア）
          </Button>
        </p>
      </div>

      <div className='columns-4 gap-4 px-4'>
        {filteredPhotos.map((photo) => (
          <div key={photo.id} className='break-inside-avoid'>
            <NextImage
              className='w-full'
              src={photo.image.url}
              alt='description'
              width={photo.image.width}
              height={photo.image.height}
              onLoadingComplete={() => fetchExifData(photo)} // Exif情報取得
            />
            <p>Genre: {photo.genre}</p>
            <p>Width: {photo.image.width}</p>
            <p>Height: {photo.image.height}</p>
            <p>CameraMake: {exifData[photo.id]?.cameraMake || "Loading..."}</p>
            <p>
              CameraModel: {exifData[photo.id]?.cameraModel || "Loading..."}
            </p>
            <p>
              ExposureTime: {exifData[photo.id]?.exposureTime || "Loading..."}
            </p>
            <p>
              FocalLength: {exifData[photo.id]?.focalLength || "Loading..."}
            </p>
            <p>Aperture: {exifData[photo.id]?.aperture || "Loading..."}</p>
            <p>Iso: {exifData[photo.id]?.iso || "Loading..."}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default PhotoList;
