import { Dispatch } from "react";
import { UserData } from "../../types";

interface Props {
  isScrolled: boolean;
  user: UserData;
  setShowAside: Dispatch<boolean>;
  parrotImg: string;
}

export function MobileHeader({
  isScrolled,
  user,
  setShowAside,
  parrotImg,
}: Props) {
  return (
    // MOBILE HEADER ( < 550px)
    <header
      className={`home_mobile_header 
      ${isScrolled ? "home_mobile_header_hide" : "home_mobile_header_show"}`}
    >
      {/* IF the user has an image use it, if not uses username's firts letter */}
      {user.user.imageURL ? (
        <img
          src={user.user.imageURL}
          alt="User image"
          className="home_mobile_header_user_image"
          onClick={() => setShowAside(true)}
        />
      ) : (
        <p
          className="home_mobile_header_no_image"
          onClick={() => setShowAside(true)}
        >
          {user.user.username ? user.user.username[0].toUpperCase() : "W"}
        </p>
      )}
      <img
        src={parrotImg}
        alt="We talk logo"
        className="home_mobile_header_logo"
      />
      <div />
    </header>
  );
}
