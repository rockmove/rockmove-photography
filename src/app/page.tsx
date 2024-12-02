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
    <div className='p-4'>
      <div>
        <p>ジャンルで絞り込み:</p>
        {uniqueGenres.map((genre) => {
          // それぞれのgenreに対応するphoto.idを取り出す
          const photoId = genreWithIds.find((item) => item.genre === genre)?.id;

          return (
            <label key={`${genre}-${photoId}`}>
              <input
                type='checkbox'
                checked={selectedGenres.includes(genre)}
                onChange={() => handleCheckboxChange(genre)}
              />
              {genre}
            </label>
          );
        })}
      </div>
      <p>
        <button onClick={handleClearFilters}>全表示（絞り込みクリア）</button>
      </p>

      <div className='columns-4 gap-4'>
        {filteredPhotos.map((photo) => (
          <div key={photo.id}>
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
    </div>
  );
}
