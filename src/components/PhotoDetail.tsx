import React, { useState } from "react";
import NextImage from "next/image"; // next/imageを別名でインポート
import EXIF from "exif-js";

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

type PhotoDetailProps = {
  photo: Photo;
  onPhotoClick: () => void;
};

const PhotoDetail = ({ photo, onPhotoClick }: PhotoDetailProps) => {
  const [exifData, setExifData] = useState<Record<string, ExifData>>({});

  const fetchExifData = (photo: Photo) => {
    const img = new window.Image(); // ネイティブのImageオブジェクトを明示的に使用
    img.crossOrigin = "Anonymous";
    img.src = photo.image.url;

    img.onload = () => {
      EXIF.getData(img, function (this: ExifData) {
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

  return (
    <>
      <dl
        onClick={onPhotoClick}
        key={photo.id}
        className='border border-gray-200 shadow-md rounded-md break-inside-avoid cursor-pointer'
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
            <dd className='ml-2'>{exifData[photo.id]?.iso || "Loading..."}</dd>
          </dl>
        </dd>
      </dl>
    </>
  );
};

export default PhotoDetail;
