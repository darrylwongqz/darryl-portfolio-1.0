import React from 'react';
import { SocialIcon } from 'react-social-icons';

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <div className="flex flex-row items-center">
        {/* Social Icons */}
        <SocialIcon
          url="https://www.youtube.com/channel/UCKhu0OqltN8pLT8tT_eELrw"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.youtube.com/channel/UCKhu0OqltN8pLT8tT_eELrw"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.youtube.com/channel/UCKhu0OqltN8pLT8tT_eELrw"
          fgColor="grey"
          bgColor="transparent"
        />
      </div>

      <div className="flex flex-row items-center text-gray-300 cursor-pointer">
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="grey"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-gray-400">
          Get In Touch
        </p>
      </div>
    </header>
  );
}

export default Header;
