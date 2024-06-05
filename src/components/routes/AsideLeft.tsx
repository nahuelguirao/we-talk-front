import { FaFeatherPointed } from "react-icons/fa6";
import { IoMdHome, IoMdPerson, IoMdSearch } from "react-icons/io";
import { IoChatboxEllipses, IoNotifications } from "react-icons/io5";
import { PiTagSimpleFill } from "react-icons/pi";
import { UserData } from "@/types";
import Link from "next/link";
import Image from "next/image";

interface Props {
  user: UserData | undefined;
}

export function AsideLeft({ user }: Props) {
  return (
    <aside className="home_aside">
      <Link href={"/"}>
        <img
          src="/parrotLogo.png"
          alt="We talk parrot"
          className="home_aside_logo"
        />
      </Link>
      <div className="home_aside_links_container">
        {/* HOME/POSTS */}
        <Link href={"/"}>
          <div className="home_aside_link_box">
            <IoMdHome />
            <h3>Inicio</h3>
          </div>
        </Link>
        {/* SEARCH */}
        <Link href={"/buscar"}>
          <div className="home_aside_link_box">
            <IoMdSearch />
            <h3>Buscar</h3>
          </div>
        </Link>
        {/* CHAT */}
        <Link href={"/chat"}>
          <div className="home_aside_link_box">
            <IoChatboxEllipses />
            <h3>Mensajes</h3>
          </div>
        </Link>
        {/* NOTIFICATIONS */}
        <Link href={"/notificaciones"}>
          <div className="home_aside_link_box">
            <IoNotifications />
            <h3>Notificaciones</h3>
          </div>
        </Link>
        {/* PROFILE */}
        <Link href={"/perfil"}>
          <div className="home_aside_link_box">
            <IoMdPerson />
            <h3>Perfil</h3>
          </div>
        </Link>
        {/* SAVED */}
        <Link href={"/guardados"}>
          <div className="home_aside_link_box">
            <PiTagSimpleFill />
            <h3>Guardados</h3>
          </div>
        </Link>
        {/* CREATE POST */}
        <div className="home_aside_create_post home_aside_link_box">
          <p>+</p>
          <FaFeatherPointed />
          <h3>Postear</h3>
        </div>
        {/* BOTTOM USER DATA (To logout)*/}
        {/* TODO: Create box to logout with hover */}
        <div className="home_aside_user_container home_aside_link_box">
          {user?.imageURL ? (
            <Image
              width={40}
              height={40}
              src={user.imageURL}
              alt="User image"
              className="home_mobile_header_user_image"
            />
          ) : (
            <p className="home_mobile_header_no_image">
              {user?.username ? user.username[0].toUpperCase() : "W"}
            </p>
          )}
          <h3>{user?.username}</h3>
        </div>
      </div>
    </aside>
  );
}
