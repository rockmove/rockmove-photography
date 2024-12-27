declare module "exif-js" {
  export function getData(
    element: HTMLImageElement,
    callback: (this: ExifData) => void
  ): void;

  export function getTag(
    element: ExifData,
    tag: string
  ): string | number | undefined;
}
