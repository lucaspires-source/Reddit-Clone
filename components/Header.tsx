import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div>
      <div className="relative h-10 w-20 flex-shrink-0">
        <Image
            objectFit="contain"
          src="https://logosmarcas.net/wp-content/uploads/2020/11/Reddit-Logo.png"
          layout="fill"
        />
      </div>
    </div>
  );
}

export default Header;
