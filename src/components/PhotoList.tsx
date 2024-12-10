"use client";

import React from "react";
import NextImage from "next/image"; // next/imageを別名でインポート
import { useEffect, useState } from "react";
import EXIF from "exif-js";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  IconApeture,
  IconCamera,
  IconExposure,
  IconIso,
  IconLength,
} from "./Icon";

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
    const updatedPhotos = photoList.filter((photo) => {
      // genreが配列の場合に処理を変更
      const genre = Array.isArray(photo.genre) ? photo.genre[0] : photo.genre;
      return selectedGenres.length ? selectedGenres.includes(genre) : true;
    });
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
    new Set(photoList.flatMap((photo) => photo.genre))
  );

  const handleCheckboxChange = (genre: string) => {
    const updatedGenres = selectedGenres.includes(genre)
      ? selectedGenres.filter((g) => g !== genre)
      : [...selectedGenres, genre];
    setSelectedGenres(updatedGenres);
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

      <div className='px-2 columns-1 gap-0 space-y-3 md:columns-3 md:gap-3 md:space-y-3 md:px-2 lg:columns-4 lg:gap-4 lg:space-y-4 lg:px-4'>
        {filteredPhotos.map((photo) => (
          <dl
            key={photo.id}
            className='border border-gray-200 shadow-md rounded-md break-inside-avoid'
          >
            <dt>
              <NextImage
                className='w-full rounded-t-md'
                src={photo.image.url}
                alt='description'
                width={photo.image.width}
                height={photo.image.height}
                onLoadingComplete={() => fetchExifData(photo)} // Exif情報取得
              />
            </dt>
            <dd className='p-4 space-y-1'>
              <dl className='flex items-center'>
                <dt>
                  <IconCamera color='black' label='Camera Maker' />
                </dt>
                <dd className='ml-2'>
                  {`${exifData[photo.id]?.cameraMake || "Loading..."} / ${
                    exifData[photo.id]?.cameraModel || "Loading..."
                  }`}
                </dd>
              </dl>
              <dl className='flex items-center'>
                <dt>
                  <IconExposure color='black' label='Exposure' />
                </dt>
                <dd className='ml-2'>
                  {`${exifData[photo.id]?.exposureTime || "Loading..."} sec`}
                </dd>
              </dl>
              <dl className='flex items-center'>
                <dt>
                  <IconLength color='black' label='Focal Length' />
                </dt>
                <dd className='ml-2'>
                  {`${exifData[photo.id]?.focalLength || "Loading..."} mm`}
                </dd>
              </dl>
              <dl className='flex items-center'>
                <dt>
                  <IconApeture color='black' label='Apature' />
                </dt>
                <dd className='ml-2'>
                  {`f / ${exifData[photo.id]?.aperture || "Loading..."}`}
                </dd>
              </dl>
              <dl className='flex items-center'>
                <dt>
                  <IconIso color='black' label='iso' size={24} />
                </dt>
                <dd className='ml-2'>
                  {exifData[photo.id]?.iso || "Loading..."}
                </dd>
              </dl>
            </dd>
          </dl>
        ))}
      </div>
    </>
  );
};

export default PhotoList;
