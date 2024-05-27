import { FaFeatherPointed } from "react-icons/fa6";
import { IoMdHome, IoMdPerson, IoMdSearch } from "react-icons/io";
import { IoChatboxEllipses, IoNotifications } from "react-icons/io5";
import { PiTagSimpleFill } from "react-icons/pi";
import { UserData } from "../../types";

interface Props {
  parrotImg: string;
  user: UserData;
  navigate: (path: string) => void;
}

export function AsideLeft({ parrotImg, user, navigate }: Props) {
  return (
    <aside className="home_aside">
      <img
        src={parrotImg}
        alt="We talk parrot"
        className="home_aside_logo"
        onClick={() => navigate("/")}
      />
      <div className="home_aside_links_container">
        {/* HOME/POSTS */}
        <div className="home_aside_link_box" onClick={() => navigate("/")}>
          <IoMdHome />
          <h3>Inicio</h3>
        </div>
        {/* SEARCH */}
        <div
          className="home_aside_link_box"
          onClick={() => navigate("/buscar")}
        >
          <IoMdSearch />
          <h3>Buscar</h3>
        </div>
        {/* CHAT */}
        <div className="home_aside_link_box" onClick={() => navigate("/chat")}>
          <IoChatboxEllipses />
          <h3>Mensajes</h3>
        </div>
        {/* NOTIFICATIONS */}
        <div
          className="home_aside_link_box"
          onClick={() => navigate("/notificaciones")}
        >
          <IoNotifications />
          <h3>Notificaciones</h3>
        </div>
        {/* PROFILE */}
        <div
          className="home_aside_link_box"
          onClick={() => navigate("/perfil")}
        >
          <IoMdPerson />
          <h3>Perfil</h3>
        </div>
        {/* SAVED */}
        <div
          className="home_aside_link_box"
          onClick={() => navigate("/guardados")}
        >
          <PiTagSimpleFill />
          <h3>Guardados</h3>
        </div>
        {/* CREATE POST */}
        <div className="home_aside_create_post home_aside_link_box">
          <p>+</p>
          <FaFeatherPointed />
          <h3>Postear</h3>
        </div>
        {/* BOTTOM USER DATA (To logout)*/}
        {/* TODO: Create box to logout with hover */}
        <div className="home_aside_user_container home_aside_link_box">
          {user.user.imageURL ? (
            <img
              src={user.user.imageURL}
              alt="User image"
              className="home_mobile_header_user_image"
            />
          ) : (
            <p className="home_mobile_header_no_image">
              {user.user.username ? user.user.username[0].toUpperCase() : "W"}
            </p>
          )}
          <h3>{user.user.username}</h3>
        </div>
      </div>
    </aside>
  );
}
