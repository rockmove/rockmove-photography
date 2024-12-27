import React from "react";

interface IconProps {
  width?: string;
  height?: string;
  color?: string;
  size?: number;
  label?: string;
}

// サイトのロゴ
export const IconLogo = ({
  color = "black",
  width = 100,
  height = "auto",
  label = "icon",
}: IconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 761.36 112.131'
      fill={color}
      aria-label={label}
    >
      <path d='M40.46,8.15c3,1.7,7.1,3.5,9.9,6.3,2.6,2.6,4.2,6.5,4.2,9.8s-2,6.7-5.7,9.6c-1.8,1.4-3.4,2.3-5.1,3.1-1.7.9-3.2,1.9-4.8,2.5-1.7.7-3.7,2.2-5,2.8-2.2,1-3.4,1.1-5.1,2.1-1.4.9-2.9,1.4-5,2.3-1,.5-3.6,1.2-4,3.2,1.3,3.6,5.8,6.6,9.2,9.7,3.4,3.2,6.2,5.3,10,8.3q5.1,4.1,10.2,8.1c1.5,1.2,3.5,2.4,4.9,4.5,1,1.5.9,3.5.6,4.8-.6,3-2.9,1.5-4.8.1-1.6-1.3-3.3-1.8-5.1-2.7-1.7-.9-3.3-1.3-5.3-2.7-1.4-1-3.4-1.9-5-3.1-1.1-.8-1.6-1.6-2.7-2.5-.7-.5-1.6-1-2.4-1.5-2.1-1-3.8-2.3-5.2-3.4-2.8-2.1-6.2-5.1-10.2-6.9-1.2,2.1-1.7,4.5-2.1,6.8-.4,2.4-.8,4.3-1.3,6.7-.3,1.1-.6,2.2-.7,3.3-.2,1.4-.9,2.1-2.3,1.9-1.3-.2-2.5-1.5-3.1-2.5-.8-1.2-.4-1.9-.4-3.3,0-4.6,1.1-8.8,1.6-13.3.1-.9.3-2.5.3-3.1,0-2-.3-2.3-1.3-3.3-1.7-1.9-3.5-4.1-1.7-6.6.8-1.1,2.4-1.7,3.3-2.3,1.5-1,1.3-2,1.5-3.3.1-1.2.1-2.3.1-3.4q.2-1.6.4-3.2c0-4.3.5-8.5.5-13.2,0-2.2-.3-4.4-.5-6.6-.3-2.4.1-4.3.7-6.6,1.2-4.9,6.6-7.3,11.4-7.4,3.8,0,6.3.5,10.2,1.3,2.6.6,7.3,2.3,9.8,3.7ZM13.96,20.65q.2.2.4.5c2.5,0,4.8-3,6.3-.1.6,1.1,1,2.3.8,3.3-.2,1.3-.8,2.4-.9,3.6-.4,4.5-2.6,8.8-2.9,13.8,1.1.2,2.3-.6,3.1-.8,1.5-.4,1.9-.2,3.5-.9,2.4-1,4.8-2.7,6.5-3.4,2.6-1.1,4.5-2.6,6.7-4.1,2.2-1.4,5.3-3.9,5.7-6.3.4-2-1.7-4.4-4-6.3-2.2-1.8-4.7-2.5-6.6-3.2-5.2-1.9-9.1-2.2-13.5-2.4-4-.9-6.6,2.7-5.1,6.3Z' />
      <path d='M82.26,48.55c1.5,0,3,.4,4.4,1,3.1,1.3,4.7,5.1,4.7,8,0,3.2-1.5,6.5-2.7,8.8-.7,1.3-1.7,2.7-2.9,4.5-1,1.4-2.2,2.5-3.6,4-2.8,3.2-5.7,5.4-8.6,6.2-1.6.5-3.3,1.4-4.4,1.5-1.4.5-2.7.3-4.2.5-1.4.1-3.1-.5-4.5-1.2-.6-.4-1.4-1-2-1.7-.6-.9-.6-1.4-.7-2.2-.4-1.3-.2-3-.4-4.2-.2-1.6,0-2.6.3-4.3q-.3-.2-.6-.3-1.7.8-3.5,1.6c-2-2.3-.7-5.3,1.3-7.1,2.4-2.1,4.1-4.6,6.6-6.7,4.5-3.6,7.6-9.8,13.3-11.3,1.4-.7,4.5.5,3,2.9,1.6.8,2.9,0,4.5,0ZM72.96,61.95c-.9,1.2-1.2,1.6-2.6,2.3-1.1.5-1.5,1.3-2.1,2.5-.8,1.6-1,4-1,5.7,0,1.3-.3,2.2.6,3,.8.7,2,1,3.1.7,1-.3,1.9-.9,2.7-1.4,1-.6,2.1-.9,2.9-1.8,1.6-1.6,3.7-3.8,4.3-5.8.7-2.1,2-3.7,1.8-5.9-.4-2.2-1.9-4.2-4.5-3.4-2.4.1-3.9,2.5-5.2,4.1ZM90.96,75.55c-1,.7-2.3,2.1-3.3,2.2-2.3.3-2-1.4-1.2-2.7.8-1.2,2-1.9,2.6-3.4.5-1.4,1.7-2.4,3-3.4,1.2-1,1.9-2.5,3.2-3,2.2,1.4.6,5.3-.8,7.1-1.1,1.3-2,2.2-3.5,3.2Z' />
      <path d='M124.26,49.15c-.8,1.4-2.4,2.4-3.5,3.1s-2.1,1.8-3.4,2.6c-1.2.8-2.6,2.3-3.8,3.1-.9.7-2.7,1.3-3.6,2.1-3.2,3.1-4.6,4.7-5.2,7.2-.3,1-.8,2.4-.4,3.7.4,1.2,1.3,2.6,2.6,3.2,2.5,1.2,4.7.8,7.2,0,2.4-.7,5.1-2.4,7.4-3.4,1.1-.6,2.5-1.9,3.5-2.7q1.8-1.4,3.6-2.8.1.2.3.5c-.1,1.6,1.1,4.2-.7,5.7q-1.4,1.2-2.9,2.4c-.9.8-1.6,1.1-2.8,1.8-3.6,2.2-7.3,5.2-11,5.8-.9.1-2.1.8-2.9,1-1,.3-1.9.2-2.8.2-1.9.1-3.6-.1-5.5-1.3-2.2-1.4-4.2-2.7-5-4.8-.8-1.9-.2-3.3-1.5-5.5q-.9-.1-1.7-.1l-.5-.5c-1.5-4.3,3.2-5.7,5.4-8.5,1.2-1.6,1.9-3.1,3.4-4.6s2.9-2.3,4.4-3.7c2.6-2.5,5.7-4.6,8.9-6.3,1.5-.8,2.9-2.1,4.5-2.9,1.5-.7,2.6-1.5,4.4-1.4,1.6-.7,2.5,1.3,2.7,2.4.1,1.4-.5,2.5-1.1,3.7Z' />
      <path d='M155.06,26.25c-.4.9-1.2,2.6-1.7,4.1-.4,1.3-1.1,2.5-1.7,3.9-.6,1.6-1.6,2.6-2.1,4.2-.4,1.2-.9,2.5-1.7,4-1.4,2.8-3,5.4-3.3,8.4-.2,2.7-1.5,5.1-2.4,8q-.6,2.1-1.3,4.2c-.5,1.7-1.1,2.7-1.1,4.1,0,2.8-3.1,5.3-1,7.9,2-.9,2.5-2.6,3.3-4.4.8-1.6,1.9-3.3,2.4-4.8.5-1.7.7-3,1.4-5,.2-.6.8-1.6,1.4-2.3.4-.4.9-.7,1.2-.9q.5-.1,1.1-.2c1.8-.6,3.5-2,4.3-3.9.6-1.4,1.7-2.9,2.8-4.7.5-.9,1-1.7,1.8-2.5,1-1.1,1-1.5,1.2-2.4.3-1.6,1.2-3,2.8-4.3q.4-.1.8-.1c.9-.4,1.7,1.4,1.8,1.8.1,1.2,0,1.4-.1,2.7-.1.8-1.3,3.5-2,4.6-1.2,1.7-1.5,2.8-2.9,4.9-.9,1.4-1.7,3.1-2.6,4.5-1,1.7-2.2,3.2-1.2,4.9.7,1.1,1.9,3.4,3.2,4.6,1.9,1.7,3.2,1.6,4.8.9,1.9-.8,2.8-.9,4.4-3.1q.5,0,.9.1.1.3.2.6c.2,1.5.2,2.8-.3,4.1-.5,1.5-1.8,2.9-3.3,3.7-.9.5-1.5,1.5-2,2-.7.8-1.2,1.1-2.1,1.5-1.1.7-2.6,1.1-4,.8-2.4-.4-5.4-3.6-7.8-5.5-1.7-1.3-2.8-.1-4.1,1.5l-3.4,4c-1.3,1.5-2.1,2.8-3.5,4.3-.6.5-1.5,1.5-2.2,2.1-.7.5-1.2.6-2,1-1.3.6-2.8.3-4-1.1-.9-1.1-1-2.6-1-4,0-2.8.6-5.2,1-8.3.4-2.8,1.5-5.2,1-8q-.3.1-.7.3c-2.9,2-3.5,4.7-6.4,6.4-1.5-2.7-.2-5.5,1.6-8,1.5-2.1,4.5-4.7,5.5-7.5.5-1.4,1.7-2.5,2.3-4,.5-1.3,1.4-2.4,2.1-3.7,1.3-2.6,2.3-4.9,3.4-7.7,1-2.5,1.6-5.3,2.8-7.9.6-1.3,1.1-2.6,1.9-3.9.5-1.1.8-2.5,1.3-3.7.5-1.4,1.5-2.6,2-4,.4-1.4.7-2.4,1.4-3.8,1-2.3,1.8-5.8,4.8-6.5,2.7,1.1,3.7,4.3,3.3,7.8-.3,2.7-.9,5.4-2.3,8.3Z' />
      <path d='M209.46,54.55c-.3,3.2-.6,6.1-1.4,10.3h.6q2.1-2,4.2-3.9c1.1-1,2.7-2.3,4-3.3,3.7-2.6,6.1-2.5,8.8.4,2.2,2.4,3,5.7,5,8.4,1.3,1.8,2.7,1.6,4.3,1.3.8-.1,1.2-.2,2-1.1.6-.7,1.2-1.2,2-1.3q.3.1.7.3c.6,1.9.6,2.9-.2,4.8-.3.8-1.2,1.2-2.1,2-.7.7-1.1,1.3-2,1.9-1.1.9-3,1.9-4.6,2.1-1.6.2-2.9-.6-4.5-1.5-3.3-1.9-5.1-6.3-8.3-7.7-2.6-1.1-5.4,1.3-8.7,5-4,4.5-4.1,4.5-8.1,9.1-1.6,1.8-3.1,2.4-4.4,2-2.5-.8-1.5-3.3-1.3-4.3.7-3,1.8-6.2,2.4-9.1.5-2.3.4-2.3.8-4.6.2-1.3,1-2.7-.2-4.4-1.9-.1-3.7,2.5-5.6,3.9-2,1.6-4.2,3.4-5.4,4.9-1.8,2.2-3.1,3.7-4.9,5.4-1.6,1.5-3.1,3.6-4.8,5.3-1.3,1.3-2,1.5-3,1.5-.8,0-2-.4-2.5-1.3-.5-1,.2-1.8.5-2.8q.3-1.4.6-2.8c.5-1.6,1.8-3.5,2-5.5q.2-1.4.4-2.8c.1-.7.6-1.6-.4-2.5q-.3,0-.7.1c-1.4.6-2.9,2.2-4.5,3.1-1.4.8-1.9,2.4-3.7,4-1.9-.7-1.8-3.6-1-5,1.4-2.6,2.9-3.6,4.3-5.3,1.9-2.3,3.1-3.4,4.9-5.2,2.2-2.2,3.1-3.3,5.1-5.1,2-1.8,3.9-2.5,5.3-2.6,2.8-.2,3.1,2.3,3.1,4,0,1.8-.9,3.5-.9,5.4,0,1.8-1.3,3.1-.7,5.4q.4-.2.7-.4c4.8-4.7,4.7-4.7,9.5-9.5,3-3,5.6-6.2,9.6-7.2,2.5-1,3.2,1.9,3.4,3.3.3,1.9-.2,3.5-.3,5.3Z' />
      <path d='M264.86,48.55c1.5,0,3,.4,4.4,1,3.1,1.3,4.7,5.1,4.7,8,0,3.2-1.5,6.5-2.7,8.8-.7,1.3-1.7,2.7-2.9,4.5-1,1.4-2.2,2.5-3.6,4-2.8,3.2-5.7,5.4-8.6,6.2-1.6.5-3.3,1.4-4.4,1.5-1.4.5-2.7.3-4.2.5-1.4.1-3.1-.5-4.5-1.2-.6-.4-1.4-1-2-1.7-.6-.9-.6-1.4-.7-2.2-.4-1.3-.2-3-.4-4.2-.2-1.6,0-2.6.3-4.3q-.3-.2-.6-.3-1.7.8-3.5,1.6c-2-2.3-.7-5.3,1.3-7.1,2.4-2.1,4.1-4.6,6.6-6.7,4.5-3.6,7.6-9.8,13.3-11.3,1.4-.7,4.5.5,3,2.9,1.6.8,2.9,0,4.5,0ZM255.56,61.95c-.9,1.2-1.2,1.6-2.6,2.3-1.1.5-1.5,1.3-2.1,2.5-.8,1.6-1,4-1,5.7,0,1.3-.3,2.2.6,3,.8.7,2,1,3.1.7,1-.3,1.9-.9,2.7-1.4,1-.6,2.1-.9,2.9-1.8,1.6-1.6,3.7-3.8,4.3-5.8.7-2.1,2-3.7,1.8-5.9-.4-2.2-1.9-4.2-4.5-3.4-2.4.1-3.9,2.5-5.2,4.1ZM273.56,75.55c-1,.7-2.3,2.1-3.3,2.2-2.3.3-2-1.4-1.2-2.7.8-1.2,2-1.9,2.6-3.4.5-1.4,1.7-2.4,3-3.4,1.2-1,1.9-2.5,3.2-3,2.2,1.4.6,5.3-.8,7.1-1.1,1.3-2,2.2-3.5,3.2Z' />
      <path d='M315.06,49.55c-.4,1.8-.4,2.8-1,4.1-.6,1.3-1.2,2.6-1.9,4s-.8,2.4-1.9,4.1c-3.6,5.3-6.2,10.3-10.2,15.5-1.4,1.8-2.3,2.8-3.6,4-.9.9-2.4,2.5-3.6,3.2-2.3,1.4-5.8.1-7-3.5-1.7-5-2.4-10.5-3.4-15.5h-.6c-2.9.7-4.5,5-7.4,5.3-.5-1.2-.4-2.4-.4-3.6,0-1.3.7-2,1.9-3.5,1.7-2.1,3.4-4.4,4.7-6.7,1-1.7.9-1.7,1.9-3.5.7-1.2,1.1-2.3,1.8-3.5s2-1.8,3.2-2.6c1.2-.9,2.2-1.2,3.2-.9,1.7.5,2.1,2.1,2,3.2-.2,1.8-.1,1.8-.3,3.5-.2,2.1-.1,4.4-.1,6.7,0,1.2,0,2.4-.2,3.5-.3,1.1.2,2.4.3,3.5.3,2.4.1,4.3,1.5,6.6,3-1.2,4.2-4.4,6.4-6.7,1.9-2,2.9-4.9,4.4-7.3,1.5-2.3,2.4-4.9,3.7-7.4,1.3-2.3,1.8-5.5,4.8-6.4q.6,0,1.2-.1c1.2,1.3.9,2.9.6,4ZM315.76,70.85c-.6,1-2,2.1-3,2.9q-1.5,1.4-3,2.7-.4.1-.8.1h-.6c-2.1-2.2,1.2-4,2.4-5.7.6-1.1.9-1.8,1.9-2.8.9-.7,1.6-1.7,2.4-2.6,1.6-.7,1.6,1,1.6,2.2,0,1.3,0,2-.9,3.2Z' />
      <path d='M337.45,50.85c-1.1,2-2.9,4.6-5.1,6.5-2.4,2-5.1,4.1-6.4,5.2-1.1.9-2.6,2.2-3.2,3.2-.7,1.2.2,2.4.7,3.3,1.4,2.9,4.6,2.9,6.4,2.7,2.2-.2,4.3-.5,6.6-2.2,1.3-1,2.1-1.5,3.5-2.2.8-.4,1.9-1.9,3.1-2.1q.3.1.7.3c1,1.6.6,3.5-.1,5.3-.4.9-1.4,1.1-2.3,1.7-.9.5-1.6,1.4-2.6,2.2-2.6,1.9-6.7,4.4-9.8,5-1.4.3-3.7.6-4.9.6-2.2-.1-3.3-.4-5.2-1.6-.7-.5-1.6-.8-2.3-1.6-.8-.9-1.2-1.7-1.7-2.5-.4-.6-.8-1.8-1-2.4-.4-1.4-.9-.9-2-1.6-.2-1.4-.1-2.7.1-4.5.1-1.2,1.4-2.6,1.8-4.1q.5-2.2,1-4.3c.4-1.5,1.6-2.6,2.1-4.2.5-1.6,1.7-2.9,2.8-4.3,1.2-1.6,2.5-2.8,4.1-4.1,2.5-1.9,5-4.4,8.3-4.5,2.1-.4,5,1,6.1,3.5,1,2.3.4,4.6-.7,6.7ZM323.15,56.75q-.1.3-.1.7c1.3.1,2.5-1.2,3.6-2.1,1.3-1,2.4-2,2.9-3.6q0-.4-.1-.7-.5-.1-1-.1c-2.3,1.1-3.9,3.7-5.3,5.8Z' />
      <path d='M375.75,14.15c1.8,1.3,4.1,3.6,5.9,5.6,1.9,2.1,3.4,4.3,4.6,6.7,1.2,2.2,2.1,3.9,2.7,6.5.9,4,1.8,8.3,1,13-.7,4.5-2.6,9.9-7,12.7q-3.4,2.2-6.8,4.3c-1.7,1-4.1,2.3-6.2,3.1-4.5,1.6-8.7,3.3-13.1,4.9-2.7.9-2.5,3.4-2.7,5.7-.2,2.6-.1,4.1.5,6.2.9,3.4,1.8,3.7-.7,6.8-1.5,1.8-3.6,5.1-6.1,3.3-1.7-1.2-2.3-4-2.3-6.6,0-1.8.3-4.3.5-6.1.3-3.4-.4-4.8-1.4-5.7-4.4-3.8-1-4.7.9-6.3,1.9-1.7,1.4-4.2,1.7-6.6.2-2.1.2-4.4.7-6.4.6-2.2.4-4.3.7-6.8.2-1.9.7-4.2,1-6.3q.6-3.3,1.1-6.5c.4-2.1.5-4.4,1.1-6.5.5-2.1,1.1-4.3,1.1-6.6,0-2.8-2.1-4.4-3.6-6.3-2.4-2.8-1.9-4.2.4-6.7,1.7-2,3.7-3.6,6.1-4.6,5.1-.2,9.2,2.1,13.3,4.5,2.4,1.4,4,2.8,6.6,4.7ZM363.05,23.15c1.1,2,1.4,3.5,1,5.9-.7,4-2.2,7.6-3.3,11.5-1,3.8-1.9,7.7-2.6,11.4-.8,4.2-1.9,7.7-1.7,11.8,2.4.5,4.9-1.1,7.3-2.1,2.5-1.1,5.1-3,7.5-4.1,1.4-.7,2.4-1.8,3.7-2.8,1.4-1,2-2.1,2.8-3.5,1.4-2.6,1.9-4.9,1.8-7.7,0-2.3-.8-5-1.5-7.2-.9-2.6-2.7-5.3-4.1-7.5-1.9-3-4.4-5.1-6.9-7.1-3.1-2.5-5-4.4-7.7-4.1,1.2,1.9,2.6,3.5,3.7,5.5Z' />
      <path d='M429.55,12.55c-.1,1.7-.7,3-1,4.5-.4,1.7-1.2,2.9-1.8,4.5-.8,2.4-.9,2.4-1.9,4.8-.4,1.4-1.7,3.1-2.2,4.4-.6,1.6-1.7,3.2-3,4.5-1.7,1.8-1.3,2.6-2.4,4.4-2.2,3.3-4.2,6.1-6.8,9.2-1.3,1.5-2.3,3.2-3.5,4.7-1.3,1.5-2.9,2.6-3.6,4.1-.7,1.4-2.4,2.9-3.5,4.6-.9,1.4-.6,2.9-.8,4.5-.3,2.8-1.5,5.2-.9,8.9q.4.1.8.2.3-.1.6-.3c1.8-2.2,2.9-4,4-6q.9-1.5,1.7-2.9c.5-.8,1.5-2,1.9-2.8.8-1.8,1-3.7,2.9-5.8,1.6-1.9,3.4-2.5,5.7-2.5,1.6,1.9,1.8,3.5,1.9,5.3.1.9.7,1.8,1.1,2.7s.7,1.5,1.2,2.3c1.6,2.4,3.2,2.1,5,1.9,1.2-.1,1.5.2,2.8-1.1.5-.4,1.4-1.3,2.3-1.4q.3.2.6.3c.7,2.2.7,4.7-1.7,6.7-1.3,1.1-2.4,1.8-3.3,2.3-1.5,1-2,1.4-3.4,1.8-1.9.6-4.5.8-6.6-.2-1-.5-2.3-1.9-3.1-2.8-.7-.9-1.4-2.4-2.7-2.4-1.5.9-2.5,2.6-3.9,4.3-1.1,1.3-1.7,2.6-3.1,4.3-1.1,1.5-2.2,3.1-3.4,4.4-1.5,1.8-2.8,2.5-4.2,2.6-1.5.2-3-.1-4.4-1.6-1.1-1.3-1-2.9-1.2-4.3-.1-1.3.1-3.1-.2-4.3-.3-1.5.3-2.6,0-4.3l-.5-.5c-1.4-.7-1.2-2.9-1-4.3.2-1.6,1.1-2.9,2.1-4.3,1.9-2.5,1.5-5.6,2.5-8.6.5-1.4.9-3,1.3-4.4.4-1.5,1.1-2.6,1.5-4.2.8-3,2.3-5.7,3.5-8.5,1.4-3.1,3.1-5.7,4.8-8.7,1.7-3,3.4-5.9,5.6-8.7.6-.8,1.5-1.3,2-2.1.5-.6.9-1.4,1.4-2,1.3-1.5,2.6-2.6,4.1-4.1,2.4-2.4,5-5,8.4-5.6,1.6-.5,3.8.4,4.3,2,.5,1.3.2,3,.1,4.5ZM403.45,48.85h.1c1.1-.2,2.5-2.6,3.1-3.3,1.3-1.4,2.1-2.6,3.2-4.1,1-1.4,2.3-3,2.9-3.9,1.2-1.9,1.8-3.1,2.7-4.3,1.4-1.8,1.4-2.6,2.4-4.2.9-1.5,1.5-2.6,2.2-4.2,1.3-2.8,3.2-5.5,2.9-8.5q-.3-.2-.6-.3c-1.2.1-3,2.3-3.6,3.1-.8,1-1.2,1.3-1.9,2.2-.4.7-.6,1.4-1,2.2-.8,1.3-2.1,2.8-2.6,3.8-.8,1.6-2.3,3.1-2.9,4.6-.5,1.4-1.3,2.6-2.1,4-.9,1.7-1.5,3-2.1,4.1-1,1.7-1.3,2.9-1.9,4.5-.5,1.5-.8,2.5-.8,4.3Z' />
      <path d='M455.85,48.55c1.5,0,3,.4,4.4,1,3.1,1.3,4.7,5.1,4.7,8,0,3.2-1.5,6.5-2.7,8.8-.7,1.3-1.7,2.7-2.9,4.5-1,1.4-2.2,2.5-3.6,4-2.8,3.2-5.7,5.4-8.6,6.2-1.6.5-3.3,1.4-4.4,1.5-1.4.5-2.7.3-4.2.5-1.4.1-3.1-.5-4.5-1.2-.6-.4-1.4-1-2-1.7-.6-.9-.6-1.4-.7-2.2-.4-1.3-.2-3-.4-4.2-.2-1.6,0-2.6.3-4.3q-.3-.2-.6-.3-1.7.8-3.5,1.6c-2-2.3-.7-5.3,1.3-7.1,2.4-2.1,4.1-4.6,6.6-6.7,4.5-3.6,7.6-9.8,13.3-11.3,1.4-.7,4.5.5,3,2.9,1.6.8,2.9,0,4.5,0ZM446.55,61.95c-.9,1.2-1.2,1.6-2.6,2.3-1.1.5-1.5,1.3-2.1,2.5-.8,1.6-1,4-1,5.7,0,1.3-.3,2.2.6,3,.8.7,2,1,3.1.7,1-.3,1.9-.9,2.7-1.4,1-.6,2.1-.9,2.9-1.8,1.6-1.6,3.7-3.8,4.3-5.8.7-2.1,2-3.7,1.8-5.9-.4-2.2-1.9-4.2-4.5-3.4-2.4.1-3.9,2.5-5.2,4.1ZM464.55,75.55c-1,.7-2.3,2.1-3.3,2.2-2.3.3-2-1.4-1.2-2.7.8-1.2,2-1.9,2.6-3.4.5-1.4,1.7-2.4,3-3.4,1.2-1,1.9-2.5,3.2-3,2.2,1.4.6,5.3-.8,7.1-1.1,1.3-2,2.2-3.5,3.2Z' />
      <path d='M496.45,25.55q-.3,1-.6,1.9c-.2.9-.1,1.1.2,1.8.5,1.3,2.4,1.9,2.5,3.4.2,2.4-.7,5.6-3.5,6.3-1.2.3-2.7.3-3.3,2-.6,1.5-.4,2.2-.9,3.6-1.7,4.8-2.8,10-3.9,14.8-.6,2.9-1.3,4.8-1.5,7.3-.2,1.9-.1,1.9-.3,3.8-.1,1.2-.4,2,.7,3.5,1.2-.2,1.8-1.1,3-2.2.9-.8,1.9-1.4,2.9-2.2,2-1.8,3.7-4.2,5.7-4.4,1.2,2.3.6,4.2-.7,6.7-.5.9-1.9,1.8-2.7,2.9-.8,1.1-1.8,2-2.8,3-3.3,3-3.3,2.9-6.5,5.8-1.9,1.7-3.9,3.5-6.4,2.1-1.1-.6-2.4-1.5-2.9-2.7s-.5-2.1-.5-3.3c0-2.3.1-4.2.4-6.4.4-2.6.9-4.2,1.1-6.6q.2-1.6.5-3.3c.1-.7.9-2,0-2.7-3.5,3.4-6.5,6.9-10.3,9.9q-.4.1-.7.1h-.5c-.5-1.2-.5-2.4-.4-4,0-1.4,1.8-2.4,2.8-3.7q2.9-4,5.7-7.9c.7-.9,2.2-2.6,2.8-4,.6-1.3,1.4-2.3,2.2-3.8.8-1.3,1.5-2.6,2.1-3.9.6-1.2,1.8-2.2,1.4-3.7-4.4-.6-9.6.2-13.4-1-1.7-.5-2.5-.6-2.7-2.3-.1-1.6-.2-1.6-.2-3.2-.1-3,2.3-3.5,4.9-3.3,2.3.1,4.6.3,6.9,0,1.3-.1,2.2.1,3.5.3.8.1,2.2-.5,3-.5,1.7.1,2.6.4,3.6-.8.5-.5.6-1.1.8-1.7q.4-.8.8-1.5c1-2.2,2.1-5,4.6-5.6,1.3-.6,2.9.5,3,1.9,0,1.2.2,2.2-.4,3.6Z' />
      <path d='M523.35,48.55c1.5,0,3,.4,4.4,1,3.1,1.3,4.7,5.1,4.7,8,0,3.2-1.5,6.5-2.7,8.8-.7,1.3-1.7,2.7-2.9,4.5-1,1.4-2.2,2.5-3.6,4-2.8,3.2-5.7,5.4-8.6,6.2-1.6.5-3.3,1.4-4.4,1.5-1.4.5-2.7.3-4.2.5-1.4.1-3.1-.5-4.5-1.2-.6-.4-1.4-1-2-1.7-.6-.9-.6-1.4-.7-2.2-.4-1.3-.2-3-.4-4.2-.2-1.6,0-2.6.3-4.3q-.3-.2-.6-.3-1.7.8-3.5,1.6c-2-2.3-.7-5.3,1.3-7.1,2.4-2.1,4.1-4.6,6.6-6.7,4.5-3.6,7.6-9.8,13.3-11.3,1.4-.7,4.5.5,3,2.9,1.6.8,2.9,0,4.5,0ZM514.05,61.95c-.9,1.2-1.2,1.6-2.6,2.3-1.1.5-1.5,1.3-2.1,2.5-.8,1.6-1,4-1,5.7,0,1.3-.3,2.2.6,3,.8.7,2,1,3.1.7,1-.3,1.9-.9,2.7-1.4,1-.6,2.1-.9,2.9-1.8,1.6-1.6,3.7-3.8,4.3-5.8.7-2.1,2-3.7,1.8-5.9-.4-2.2-1.9-4.2-4.5-3.4-2.4.1-3.9,2.5-5.2,4.1ZM532.05,75.55c-1,.7-2.3,2.1-3.3,2.2-2.3.3-2-1.4-1.2-2.7.8-1.2,2-1.9,2.6-3.4.5-1.4,1.7-2.4,3-3.4,1.2-1,1.9-2.5,3.2-3,2.2,1.4.6,5.3-.8,7.1-1.1,1.3-2,2.2-3.5,3.2Z' />
      <path d='M565.35,38.25c.1,2-1.9,4.4-2.8,5.7-1.5,2-3,3.6-5,5.7-1.1,1.3-1.2,1.2-2.5,2.4-1.3,1.3-1.6.9-2.7,2.2-.6.7-1.4,1.9-2.3,2.8-1.1.8-2.2,1.5-2.4,2.2-.7,2.5-.9,3.8-.5,5.9.4,2.2,1.1,3.5,2.8,5.8,1.1,1.6,2,4,4.3,5.1q5.9-5.5,11.8-10.9.5.2.9.3c.3,1.2.4,2.4.3,3.7-.2,1.4-.8,1.9-2.1,3.3-.9.9-2,2.2-2.9,3.2q-1.4,1.7-2.7,3.4c-1.6,1.7-1.9,2.3-.9,3.7.8,1,1.5,2.1,2.2,3.3,1.4,2.5,2,4.6,2.3,6.8.1,1.3.1,2.5-.1,3.7s-.8,2.2-1,3.5c-.4,1.9-2.3,4.8-4.2,6.5-2.5,2.4-3.8,3.5-7,5.5-2.1,1.4-4.4,2.5-6.7,2.8-2,.2-4.6.9-6.8-.1-3.6-1.7-3.7-3.6-4-6.1-.3-2.9.4-5,1.4-7,1.2-2.3,1.5-4.4,3.7-6.9,2-2.3,3.9-4.4,5.7-7,.8-1.2,1.8-2.2,2.5-3.6.4-.8-.4-2.1-1.4-3.2-2.2-2.2-4.1-4.2-5.4-6.7-1.1-2.1-.8-4.2-2.2-6.4-1.6.1-2.7,2.8-4.5,2.9q-.2-.3-.5-.5c-.2-1.8-.3-3.7.6-5.2,1.2-1.9,3.2-3.1,4.6-4.6,2.9-3.1,3.6-7,5.9-10.2.7-.9,1.2-1.8,2-2.7.9-.8,1.7-1.1,2.3-2,1.2-1.7,2.3-3.1,4-4.5,1.9-1.5,2.7-3,4.8-4.3,1.5-.9,3.1-2.1,4.9-2.5,1.1-.5,2.1,0,3,1,.8.9.5,1.9.6,3ZM545.75,94.45c-1.7,2.2-3.1,4.2-4.5,6.3-1.4,2.1-2.6,3.5-2.9,6.2-.4,2.8,2.5,3.4,4.7,2.9,1-.3,1.9-.9,2.9-1.3,1-.5,2.3-.7,3-1.4,2-2.2,3.9-3.7,4.9-6.2.8-1.9,1.5-3.8,1.2-6.1-.3-2.4-1.7-5-3.9-5.8-2.3,1-4,3.5-5.4,5.4Z' />
      <path d='M589.45,54.05c.5,1,1.2,2.4,1.3,3.9.3,2.6.1,4.6-.9,8.1q-.5,2-1.2,4.1c-.3,1.1-1.4,2.6-.2,3.7,1.8-.7,4.6-2.7,6.4-4.2,1-.8,2.2-1.4,3.3-2.5.8-.8,1.7-2.3,2.9-1.9.7,1.3.4,3.1.2,4.6-.3,1.6-2.2,3.1-3.7,4.3-3,2.5-5.6,5.3-8.8,6.7-1.3.6-3.3,1.9-4.6,2.6-1.6,1-3,1-4.3.8-2.3-.4-2.9-1.9-2.6-3.4.1-.7.5-1.5.7-2.2.3-.8.1-1.3.5-2.2,1.2-2.6,1.5-5.4,2.3-9.1.8-3.5.7-6.4-.9-8.6-1.5-2-3-.6-4.6.6-1.3,1-2.5,2.5-4,4.3-1.7,1.9-2.9,2.6-4.2,4.2-1,1.2-2.3,3.2-4,3-1.3-2.4-.5-5.2,1-7.2q2.7-3.4,5.3-6.9c.8-1.1,1.7-2.3,1.9-3.6.2-1.4-.3-2.1.5-3.3,1.6-2.3,4.4-3.4,6.7-4.5,2.3-.5,5.1.9,8.2,4.4,1.5,1.7,2,2.7,2.8,4.3Z' />
      <path d='M631.05,44.75c-2.3,2-5.1,4.9-8.1,7.6-2.9,2.6-5.2,5.3-8,8.2-1.1,1.2-2.7,2.5-4.1,4.2q-.9,1.1-1.7,2.2c-.4.5-1.1,1.2-.3,1.9,1.6-.2,3.2-1.8,5.4-3.4,2-1.4,3.2-2.5,5.2-4.1,2.8-2.4,6.4-7.2,9.9-7.1,2.8,0,2.6,2.5,2.6,4,0,2-.1,3.2.1,5.2.2,1.7,1.2,3.7,3.4,4.1,1.5.2,3-.9,4.9-2.2.4,1.2.7,2.4.7,3.6,0,1.1-.4,2.3-2.1,3.2-1.1.6-2,2.1-3.3,2.8-1.2.7-2,.8-3.5.9-1.9.2-4.9-.4-6.9-2.8-1.9-2.2-1.1-4.1-2.4-6.9-1.9.4-3.3,1.7-4.8,3.1-1.3,1.3-2.7,2.6-4.2,3.9-.8.7-1.6,1-2.4,1.7-.7.5-1.2,1.3-2,1.9-1.3,1.1-3,1.7-4.4,2.5-3,1.9-7.3.5-7.3-3.4,0-1.4.8-3.3.3-4.5-.3-.9-1.2-.8-1.3-2q-.1-1-.2-1.9c0-2.7,1.2-3.1,2.9-4.4,1.6-1.2,2.8-2.7,4.2-4.1,1.5-1.6,2.6-3.1,4.4-4.1,1.7-1,2.6-2.4,4.1-3.6q1.2-.9,2.4-1.9c.8-.6,1.3-1,2.1-1.7,1.4-1.2,2.8-2.1,4.3-3.4,2.7-2.3,5.3-4.8,8.9-5.2,1.3-.3,3.4-.3,4,1.5.4,1.3-1.2,2.7-2.8,4.2Z' />
      <path d='M657.75,46.05c-1.5,3.6-2.2,5.8-3.1,8.2-.7,2.1-1.4,5.6-2.3,7.7-.6,1.4-1.1,2.7-1.5,4.1-.5,1.3-.8,2.4-1.2,4.1-.5,1.9-1.8,5.3-2.1,7.4-.4,3.2-1.4,4.9-1.9,8.2-.3,2.3-1.7,5.4-.9,7.6q.2-.3.4-.5c-.1-1.4.8-2.5,1.3-3.8q.6-1.8,1.2-3.6c.5-1.5.6-2.5,1.1-3.8q.7-1.8,1.5-3.6c1.3-3.2.9-4.5,2.3-7.5,1.4-3,2-5.1,3.2-7.3.6-1.2,1.3-2.4,2.3-3.9,1-1.4,2.2-2.1,3.5-3.1,2.2-1.9,4.8-1.1,7.1.1,2.8,1.4,4.3,4.4,6.1,6.9.8,1.2,1.7,2.7,3.3,3.4,1,.4,2.4-.6,3.4-1.2.2-.5.5,0,.7.2.9,1.3.3,2.6,0,3.9-.2,1.3-.8,2.3-2.2,3.6-2.3,2.2-5,1.7-7.3,0-2.6-1.8-5-4.8-7.4-5.4-2.8-.8-4.8,1.7-6.1,4.6-.9,2.1-1.7,4.6-3.5,7.4-.8,1.2-.8,2.4-1.3,3.7q-.7,1.8-1.3,3.6c-.8,2.5-1.9,4.8-2.8,7.4-.9,2.5-2.3,4.8-2.9,7.2-.3,1.4-.8,2.6-1.3,3.9-.5,1.1-.8,2.6-1.3,3.6-.9,1.5-1.8,2.6-3.1,3.1-1.5.5-2.2.6-3.5-.7-1-1-.9-2.6-.9-3.6v-3.6c0-3.1.2-5,.2-7.3,0-5.1.7-9.4,1.4-14.9.2-2.1.3-4.9,1.2-7.2.7-1.6.5-2.2.5-3.9,0-.7.6-2.6-.7-3.1-.8.8-1.8,2.4-2.9,2.6-2.2-3.5.5-7.3,2.5-9.8,1.4-1.8,2-3.3,3.1-5,1-1.6,2.1-3.1,2.9-4.7,1-1.8,2-3.3,2.9-5,.8-1.7,1.9-2.9,2.5-4.8,1-3.4,3.3-6.5,5.5-9.4,3.5-.7,4,4.5,3.8,6.3-.4,3.1-1.4,5.4-2.4,7.9Z' />
      <path d='M719.45,12.55c-.1,1.7-.7,3-1,4.5-.4,1.7-1.2,2.9-1.8,4.5-.8,2.4-.9,2.4-1.9,4.8-.4,1.4-1.7,3.1-2.2,4.4-.6,1.6-1.7,3.2-3,4.5-1.7,1.8-1.3,2.6-2.4,4.4-2.2,3.3-4.2,6.1-6.8,9.2-1.3,1.5-2.3,3.2-3.5,4.7-1.3,1.5-2.9,2.6-3.6,4.1-.7,1.4-2.4,2.9-3.5,4.6-.9,1.4-.6,2.9-.8,4.5-.3,2.8-1.5,5.2-.9,8.9q.4.1.8.2.3-.1.6-.3c1.8-2.2,2.9-4,4-6q.9-1.5,1.7-2.9c.5-.8,1.5-2,1.9-2.8.8-1.8,1-3.7,2.9-5.8,1.6-1.9,3.4-2.5,5.7-2.5,1.6,1.9,1.8,3.5,1.9,5.3.1.9.7,1.8,1.1,2.7s.7,1.5,1.2,2.3c1.6,2.4,3.2,2.1,5,1.9,1.2-.1,1.5.2,2.8-1.1.5-.4,1.4-1.3,2.3-1.4q.3.2.6.3c.7,2.2.7,4.7-1.7,6.7-1.3,1.1-2.4,1.8-3.3,2.3-1.5,1-2,1.4-3.4,1.8-1.9.6-4.5.8-6.6-.2-1-.5-2.3-1.9-3.1-2.8-.7-.9-1.4-2.4-2.7-2.4-1.5.9-2.5,2.6-3.9,4.3-1.1,1.3-1.7,2.6-3.1,4.3-1.1,1.5-2.2,3.1-3.4,4.4-1.5,1.8-2.8,2.5-4.2,2.6-1.5.2-3-.1-4.4-1.6-1.1-1.3-1-2.9-1.2-4.3-.1-1.3.1-3.1-.2-4.3-.3-1.5.3-2.6,0-4.3l-.5-.5c-1.4-.7-1.2-2.9-1-4.3.2-1.6,1.1-2.9,2.1-4.3,1.9-2.5,1.5-5.6,2.5-8.6.5-1.4.9-3,1.3-4.4.4-1.5,1.1-2.6,1.5-4.2.8-3,2.3-5.7,3.5-8.5,1.4-3.1,3.1-5.7,4.8-8.7,1.7-3,3.4-5.9,5.6-8.7.6-.8,1.5-1.3,2-2.1.5-.6.9-1.4,1.4-2,1.3-1.5,2.6-2.6,4.1-4.1,2.4-2.4,5-5,8.4-5.6,1.6-.5,3.8.4,4.3,2,.5,1.3.2,3,.1,4.5ZM693.35,48.85h.1c1.1-.2,2.5-2.6,3.1-3.3,1.3-1.4,2.1-2.6,3.2-4.1,1-1.4,2.3-3,2.9-3.9,1.2-1.9,1.8-3.1,2.7-4.3,1.4-1.8,1.4-2.6,2.4-4.2.9-1.5,1.5-2.6,2.2-4.2,1.3-2.8,3.2-5.5,2.9-8.5q-.3-.2-.6-.3c-1.2.1-3,2.3-3.6,3.1-.8,1-1.2,1.3-1.9,2.2-.4.7-.6,1.4-1,2.2-.8,1.3-2.1,2.8-2.6,3.8-.8,1.6-2.3,3.1-2.9,4.6-.5,1.4-1.3,2.6-2.1,4-.9,1.7-1.5,3-2.1,4.1-1,1.7-1.3,2.9-1.9,4.5-.5,1.5-.8,2.5-.8,4.3Z' />
      <path d='M759.15,53.25c-.6,2.4-1.2,4.3-2,6.8-1.2,4-2.7,7.8-3.9,12.8q.4.2.9.5l8.4-8.2.6.4c1.1,2.9.4,4.6-1.5,6.8-1.2,1.4-2.2,1.6-3.4,2.7-1,1-1.7,1.9-2.8,3q-3.3,3.1-6.6,6.2c-1.7,1.6-3.2,4.6-4.3,6.4-.7,1.2-.9,1.9-1.9,3.4-.7,1-1.5,2.2-2.2,3.3-1.6,2.5-2.7,4.5-4.3,6.5q-2.8,3.4-5.6,6.7c-1.6,1.9-4.3,3.8-6.2,4.3-1.3.3-2.4.7-3.3-.7-.7-1-.2-2,.4-3.2.4-.9,1.4-2.4,2-3.3s1-1.9,2-3.1c1-1.2,1.8-2.4,2.4-3.2.9-1.5,1.4-2.1,2.3-3.5.5-.8,2-2,2.7-3.1.6-1.1,1.2-1.9,2.4-3.2,2-2.2,4.1-4.4,5.5-6.6,1.3-2.1,1.8-4.4,2.4-6.5.2-1.1.8-2.4,1.2-3.4.5-1.3.4-2,.8-3.4.6-1.9,1.6-3.8.5-6.3q-.4,0-.8.1c-2.2,2-5.6,5.3-8.2,7.7-1.4,1.3-2.6,1.9-4.1,3.5-1.1,1.2-2.6,2.3-3.9,3-1.3.6-3,.7-4.1.5-2.1-.4-2.4-2.2-2.6-3.5q-.2-2.1-.4-4.2c0-.7.6-2.8-1-3.5q-.4.1-.7.1-1.4.9-2.7,1.8c-1.5-1.6-1.2-3.1-.5-5,.6-1.5,2.5-3.1,4-4.6,3.5-3.5,5.7-7.1,8.6-8.7,1.9-1,3.9.3,4.4,2.5.2,1.1-.4,3.2-.9,4.8-1,3-1.6,5.7-1.8,9.5q.4.3.9.6c4.8-2.9,8.3-6.7,12.5-10.9,2.1-2.1,3.9-3.8,6.1-5.8,1.9-1.6,3.2-4,5.8-4.3,1.2-.4,2.5-.2,3.2,1.2.4.8-.1,2.1-.3,3.1Z' />{" "}
    </svg>
  );
};

export const IconCamera = ({
  color = "black",
  size = 24,
  label = "icon",
}: IconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      aria-label={label}
    >
      <path d='M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z' />
      <circle cx='12' cy='13' r='3' />
    </svg>
  );
};

export const IconApeture = ({
  color = "black",
  size = 24,
  label = "icon",
}: IconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 32 32'
      fill={color}
      stroke={color}
      aria-label={label}
    >
      <path d='M16 1.25c-8.146 0-14.75 6.604-14.75 14.75s6.604 14.75 14.75 14.75c8.146 0 14.75-6.604 14.75-14.75v0c-0.010-8.142-6.608-14.74-14.749-14.75h-0.001zM18.453 20.25h-4.907l-2.454-4.25 2.454-4.25h4.923l2.439 4.248zM20.198 11.75h8.34c0.451 1.272 0.712 2.74 0.712 4.268 0 2.788-0.868 5.374-2.349 7.501l0.028-0.043zM27.919 10.25h-13.506l4.181-7.242c4.137 0.858 7.512 3.548 9.29 7.164l0.035 0.078zM16 2.75c0.331 0 0.656 0.026 0.982 0.050l-6.755 11.701-4.172-7.226c2.433-2.777 5.985-4.522 9.945-4.524h0zM5.056 8.544l6.758 11.706h-8.353c-0.451-1.272-0.712-2.739-0.712-4.268 0-2.78 0.863-5.358 2.335-7.482l-0.029 0.044zM4.081 21.75h13.506l-4.18 7.242c-4.138-0.858-7.513-3.548-9.291-7.164l-0.035-0.078zM16 29.25c-0.331 0-0.656-0.026-0.982-0.050l6.754-11.697 4.157 7.241c-2.432 2.766-5.977 4.503-9.929 4.506h-0z'></path>
    </svg>
  );
};

export const IconExposure = ({
  color = "black",
  size = 24,
  label = "icon",
}: IconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill={color}
      aria-label={label}
    >
      <path d='M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z' />
      <path d='M12 5C11.4477 5 11 5.44771 11 6V12.4667C11 12.4667 11 12.7274 11.1267 12.9235C11.2115 13.0898 11.3437 13.2343 11.5174 13.3346L16.1372 16.0019C16.6155 16.278 17.2271 16.1141 17.5032 15.6358C17.7793 15.1575 17.6155 14.5459 17.1372 14.2698L13 11.8812V6C13 5.44772 12.5523 5 12 5Z' />
    </svg>
  );
};

export const IconLength = ({
  color = "black",
  size = 24,
  label = "icon",
}: IconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 508 508'
      fill={color}
      aria-label={label}
    >
      <path
        d='M432.4,73.3H163.9c-15.6,0-28.8,9-39.7,24H66.8C22.9,97.3,0,176.1,0,254s22.9,156.7,66.8,156.7h57.5
			c10.8,15.1,24.1,24,39.7,24h268.4c49.7,0,75.6-90.9,75.6-180.7S482,73.3,432.4,73.3z M109.3,382.5H66.8
			c-13.1,0-38.6-45.4-38.6-128.5s25.5-128.5,38.6-128.5h42.5c-13.8,34.4-21,81.6-21,128.5S95.4,348.1,109.3,382.5z M163.9,406.5
			c-19.3,0-47.4-59.4-47.4-152.5s28.1-152.5,47.4-152.5h92.5c-21.8,33.8-33.1,93.4-33.1,152.5s11.3,118.7,33.1,152.5H163.9z
			 M298.9,406.4v0.1c-19.3,0-47.4-59.4-47.4-152.5s28.1-152.5,47.4-152.5h90.9c-6.9,10.7-12.7,23.9-17.5,38.8h-69.6
			c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1H365c-1.9,9.1-3.5,18.5-4.7,28.2h-29.4c-7.8,0-14.1,6.3-14.1,14.1
			c0,7.8,6.3,14.1,14.1,14.1h26.7c-0.6,9.6-0.9,19.3-0.9,29c0,59.1,11.3,118.7,33.1,152.5H298.9z M432.4,406.5
			c-19.3,0-47.4-59.4-47.4-152.5s28.1-152.5,47.4-152.5s47.4,59.4,47.4,152.5S451.7,406.5,432.4,406.5z'
      />
      <path d='M204,120.9h-28.2c-7.8,0-14.1,6.3-14.1,14.1s6.3,14.1,14.1,14.1H204c7.8,0,14.1-6.3,14.1-14.1S211.8,120.9,204,120.9z' />
      <path
        d='M150,131.25h-50c-3.456,0-6.25,2.794-6.25,6.25s2.794,6.25,6.25,6.25h50c3.456,0,6.25-2.794,6.25-6.25
           S153.456,131.25,150,131.25z'
      />
      <path
        d='M189.6,180.4h-28.2c-7.8,0-14.1,6.3-14.1,14.1s6.3,14.1,14.1,14.1h28.2c7.8,0,14.1-6.3,14.1-14.1S197.4,180.4,189.6,180.4
			z'
      />
      <path
        d='M185.6,239.9h-28.2c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h28.2c7.8,0,14.1-6.3,14.1-14.1
			C199.7,246.2,193.4,239.9,185.6,239.9z'
      />
      <path
        d='M189.6,299.4h-28.2c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h28.2c7.8,0,14.1-6.3,14.1-14.1
			S197.4,299.4,189.6,299.4z'
      />
      <path
        d='M204,358.8h-28.2c-7.8,0-14.1,6.3-14.1,14.1S168,387,175.8,387H204c7.8,0,14.1-6.3,14.1-14.1
			C218.2,365.2,211.8,358.8,204,358.8z'
      />
    </svg>
  );
};

export const IconIso = ({
  color = "black",
  size = 24,
  label = "ISO icon",
}: {
  color?: string;
  size?: number;
  label?: string;
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 32 32'
      fill='none'
      aria-label={label}
    >
      <title>{label}</title>
      <path
        d='M24,21H21a2,2,0,0,1-2-2V13a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2v6A2,2,0,0,1,24,21Zm-3-8v6h3V13Z'
        fill={color}
      />
      <path
        d='M15,21H10V19h5V17H12a2,2,0,0,1-2-2V13a2,2,0,0,1,2-2h5v2H12v2h3a2,2,0,0,1,2,2v2A2,2,0,0,1,15,21Z'
        fill={color}
      />
      <rect x='6' y='11' width='2' height='10' fill={color} />
      <path
        d='M28,6H4A2,2,0,0,0,2,8V24a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V8A2,2,0,0,0,28,6ZM4,24V8H28V24Z'
        fill={color}
      />
    </svg>
  );
};

export const IconTripod = ({
  color = "black",
  size = 24,
  label = "icon",
}: IconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 44.99 44.99'
      fill={color}
      aria-label={label}
    >
      <path
        d='M35.558,43.886c0.041-0.282-0.019-0.582-0.188-0.834L30.51,35.97c0.121,0.072,0.275,0.074,0.397-0.012
		c0.168-0.117,0.209-0.347,0.095-0.515l-1.687-2.422c-0.115-0.168-0.344-0.209-0.512-0.092c-0.113,0.078-0.162,0.207-0.15,0.334
		l-4.981-7.26v-3.166c0.644-0.297,1.093-0.944,1.093-1.698c0-0.754-0.449-1.399-1.093-1.697V3.013h0.759
		c0.832,0,1.508-0.674,1.508-1.506S25.263,0,24.431,0h-3.877c-0.832,0-1.506,0.675-1.506,1.507s0.674,1.506,1.506,1.506h0.166
		l-5.428,6.168c-0.447-0.214-0.91-0.196-1.156,0.083l-2.039,2.32c-0.326,0.372-0.145,1.064,0.408,1.55l0.115,0.103
		c0.551,0.483,1.264,0.576,1.588,0.204l2.039-2.319c0.245-0.28,0.202-0.743-0.066-1.161l5.133-5.834v15.316
		c-0.643,0.298-1.094,0.944-1.094,1.698c0,0.754,0.451,1.4,1.094,1.698v3.166l-4.999,7.283c0.021-0.136-0.032-0.275-0.149-0.357
		c-0.168-0.116-0.396-0.075-0.515,0.093l-1.684,2.422c-0.117,0.168-0.076,0.396,0.092,0.514c0.137,0.096,0.313,0.08,0.437-0.02
		l-4.881,7.11c-0.175,0.254-0.23,0.554-0.189,0.834c-0.965,0.093-1.639,0.293-1.639,0.524c0,0.32,1.254,0.58,2.803,0.58
		c1.547,0,2.803-0.26,2.803-0.58c0-0.223-0.611-0.411-1.496-0.51l9.418-13.727v10.279c0,0.137,0.029,0.266,0.072,0.389
		c-0.996,0.09-1.693,0.293-1.693,0.533c0,0.32,1.254,0.58,2.802,0.58c1.549,0,2.803-0.26,2.803-0.58c0-0.24-0.697-0.443-1.693-0.533
		c0.043-0.123,0.072-0.252,0.072-0.389V30.173L33.095,43.9c-0.887,0.098-1.496,0.287-1.496,0.51c0,0.32,1.256,0.58,2.803,0.58
		c1.549,0,2.803-0.26,2.803-0.58C37.196,44.177,36.522,43.977,35.558,43.886z'
      />
    </svg>
  );
};

export const IconX = ({ size = 24, label = "icon" }: IconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 1200 1227'
      fill='none'
      aria-label={label}
    >
      <path
        d='M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z'
        fill='white'
      />
    </svg>
  );
};

export const IconInstagram = ({ size = 24, label = "icon" }: IconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 1000 1000'
      fill='#fff'
      aria-label={label}
    >
      <path
        d='M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34'
        transform='translate(-2.5 -2.5)'
      />
    </svg>
  );
};

export const IconFacebook = ({ size = 24, label = "icon" }: IconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 500 500'
      aria-label={label}
    >
      <path
        d='M500,250C500,111.93,388.07,0,250,0S0,111.93,0,250c0,117.24,80.72,215.62,189.61,242.64v-166.24h-51.55v-76.4h51.55v-32.92c0-85.09,38.51-124.53,122.05-124.53,15.84,0,43.17,3.11,54.35,6.21v69.25c-5.9-.62-16.15-.93-28.88-.93-40.99,0-56.83,15.53-56.83,55.9v27.02h81.66l-14.03,76.4h-67.63v171.77c123.79-14.95,219.71-120.35,219.71-248.17Z'
        fill='#fff'
      />
      <path
        d='M347.92,326.4l14.03-76.4h-81.66v-27.02c0-40.37,15.84-55.9,56.83-55.9,12.73,0,22.98.31,28.88.93v-69.25c-11.18-3.11-38.51-6.21-54.35-6.21-83.54,0-122.05,39.44-122.05,124.53v32.92h-51.55v76.4h51.55v166.24c19.34,4.8,39.57,7.36,60.39,7.36,10.25,0,20.36-.63,30.29-1.83v-171.77h67.63Z'
        fill='none'
      />
    </svg>
  );
};

export const IconSwiperRight = ({
  color = "black",
  size = 24,
  label = "icon",
}: IconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      stroke={color}
      aria-label={label}
    >
      <path d='m9 18 6-6-6-6' />
    </svg>
  );
};

export const IconSwiperLeft = ({
  color = "black",
  size = 24,
  label = "icon",
}: IconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      stroke={color}
      aria-label={label}
    >
      <path d='m15 18-6-6 6-6' />
    </svg>
  );
};
