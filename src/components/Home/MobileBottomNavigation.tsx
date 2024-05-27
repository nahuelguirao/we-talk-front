import { IoMdHome, IoMdSearch } from "react-icons/io";
import { IoChatboxEllipses, IoNotifications } from "react-icons/io5";

interface Props {
  isScrolled: boolean;
  navigate: (path: string) => void;
}

export function MobileBottomNavigation({ isScrolled, navigate }: Props) {
  return (
    // MOBILE NAVIGATION (bottom)
    <nav
      className={`home_mobile_navigation ${
        isScrolled
          ? "home_mobile_navigation_hide"
          : "home_mobile_navigation_show"
      }`}
    >
      <IoMdHome onClick={() => navigate("/")} />
      <IoMdSearch onClick={() => navigate("/buscar")} />
      <IoChatboxEllipses onClick={() => navigate("/chat")} />
      <IoNotifications onClick={() => navigate("/notificaciones")} />
    </nav>
  );
}
