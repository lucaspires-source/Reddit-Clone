import Image from "next/image";
import React from "react";
import {
  ChevronDownIcon,
  HomeIcon,
  SearchIcon,
  MenuIcon,
} from "@heroicons/react/solid";
import {
  BellIcon,
  ChatIcon,
  GlobeIcon,
  PlusIcon,
  SparklesIcon,
  SpeakerphoneIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/react";

function Header() {
  const { data: session } = useSession();
  return (
    <div className="sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm">
      <div className="relative h-10 w-20 flex-shrink-0">
        <Image
          objectFit="contain"
          src="https://logosmarcas.net/wp-content/uploads/2020/11/Reddit-Logo.png"
          layout="fill"
          alt="logo"
        />
      </div>
      <div className="flex items-center mx-7 xl:min-w-[300px] ">
        <HomeIcon className=" h-5 w-5" />
        <p className="flex-1 ml-2 hidden lg:inline">Home</p>
        <ChevronDownIcon className=" h-5 w-5" />
      </div>
      <form className="flex flex-1  items-center space-x-2 border border-gray-200 rounded-sm  bg-gray-100  px-3 py-1">
        <SearchIcon className="h-6 w-6 text-gray-400" />
        <input
          type="text"
          placeholder="Search Reddit "
          className=" bg-transparent flex-1 outline-none"
        />
        <button hidden type="submit" />
      </form>
      <div className="flex text-gray-500 space-x-2 mx-5 hidden lg:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border border-gray-100" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <SpeakerphoneIcon className="icon" />
      </div>
      <div className="ml-5 flex items-center  lg:hidden">
        <MenuIcon className="icon" />
      </div>

      {session ? (
        <div
          onClick={() => signOut()}
          className="hidden lg:flex items center space-x-2 border border-gray-100 p-2 cursor-pointer"
        >
          <div className="relative h-6 w-6 flex-shrink-0">
            <Image
              objectFit="contain"
              src="http://cdn.onlinewebfonts.com/svg/img_155542.png"
              alt="Sign In logo"
              layout="fill"
            />
          </div>
          <p className="text-gray-400">Sign Out</p>
        </div>
      ) : (
        <div
          onClick={() => signIn()}
          className="hidden lg:flex items center space-x-2 border border-gray-100 p-2 cursor-pointer"
        >
          <div className="relative h-6 w-6 flex-shrink-0">
            <Image
              objectFit="contain"
              src="http://cdn.onlinewebfonts.com/svg/img_155542.png"
              alt="Sign In logo"
              layout="fill"
            />
          </div>
          <p className="text-gray-400">Sign In</p>
        </div>
      )}
    </div>
  );
}

export default Header;
