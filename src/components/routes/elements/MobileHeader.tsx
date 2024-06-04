import { UserData } from "@/types";
import Image from "next/image";
import { Dispatch } from "react";

interface Props {
  isScrolled: boolean;
  user: UserData | undefined;
  setShowAside: Dispatch<boolean>;
}

export function MobileHeader({ isScrolled, user, setShowAside }: Props) {
  return (
    // MOBILE HEADER ( < 550px)
    <header
      className={`home_mobile_header 
      ${isScrolled ? "home_mobile_header_hide" : "home_mobile_header_show"}`}
    >
      {/* IF the user has an image use it, if not uses username's firts letter */}
      {user?.imageURL ? (
        <Image
          width={40}
          height={40}
          src={user.imageURL}
          alt="User image"
          className="home_mobile_header_user_image"
          onClick={() => setShowAside(true)}
        />
      ) : (
        <p
          className="home_mobile_header_no_image"
          onClick={() => setShowAside(true)}
        >
          {user?.username ? user.username[0].toUpperCase() : "W"}
        </p>
      )}
      <Image
        width={40}
        height={40}
        src="/parrotLogo.png"
        alt="We talk logo"
        className="home_mobile_header_logo"
      />
      <div />
    </header>
  );
}
