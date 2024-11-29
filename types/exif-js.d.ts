declare module "exif-js" {
  export function getData(
    element: HTMLImageElement,
    callback: (this: any) => void
  ): void;

  export function getTag(
    element: any,
    tag: string
  ): string | number | undefined;
}
