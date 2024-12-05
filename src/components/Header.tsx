import React from "react";
import { IconLogo } from "./Icon";

const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-full px-10 py-5 bg-transparent z-50'>
      <ul className='flex justify-between items-center'>
        <li>
          <IconLogo
            width={350}
            height='auto'
            color='#0f172a'
            label='RockmovePhotography'
          />
        </li>
        <li>
          <p>ここにメニューとか配置</p>
        </li>
      </ul>
    </header>
  );
};

export default Header;
