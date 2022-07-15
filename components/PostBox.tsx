import { useSession } from "next-auth/react";
import React from "react";
import Avatar from "./Avatar";
import { LinkIcon, PhotographIcon } from "@heroicons/react/outline";
import { useForm } from "react-hook-form";


function PostBox() {
  const { data: session } = useSession();
  return (
    <form className="sticky top-16 z-50 bg-white border border-gray-300 rounded-md p-2">
      <div className="flex items-center space-x-3 mr-2">
        <Avatar />

        <input
          disabled={!session}
          className=" flex-1 rounded-md bg-gray-50 p-2 pl-5 outline-none"
          type="text"
          placeholder={
            session ? "Create a post by entering a title!" : "sign in to post"
          }
        />
        <PhotographIcon className={`icon h-6 cursor-pointer text-gray-500`} />
        <LinkIcon className="icon h-6 text-gray-500" />
      </div>
    </form>
  );
}

export default PostBox;
