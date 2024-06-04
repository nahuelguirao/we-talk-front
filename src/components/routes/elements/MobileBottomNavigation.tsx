import Link from "next/link";
import { IoMdHome, IoMdSearch } from "react-icons/io";
import { IoChatboxEllipses, IoNotifications } from "react-icons/io5";

interface Props {
  isScrolled: boolean;
}

export function MobileBottomNavigation({ isScrolled }: Props) {
  return (
    // MOBILE NAVIGATION (bottom)
    <nav
      className={`home_mobile_navigation ${
        isScrolled
          ? "home_mobile_navigation_hide"
          : "home_mobile_navigation_show"
      }`}
    >
      <Link href={"/inicio"}>
        <IoMdHome />
      </Link>
      <Link href={"/buscar"}>
        <IoMdSearch />
      </Link>
      <Link href={"/chat"}>
        <IoChatboxEllipses />
      </Link>
      <Link href={"/notificaciones"}>
        <IoNotifications />
      </Link>
    </nav>
  );
}
