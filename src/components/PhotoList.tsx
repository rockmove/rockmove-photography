"use client";

import React from "react";
import { useEffect, useState } from "react";
import EXIF from "exif-js";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import PhotoDetail from "./PhotoDetail";

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
          <PhotoDetail key={photo.id} photo={photo} />
        ))}
      </div>
    </>
  );
};

export default PhotoList;
