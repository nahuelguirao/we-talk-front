import { useContext, useRef, useState } from "react";
import { UserContext } from "../context/auth/UserContext";
import { useScrollMobile } from "../hooks/home/useScrollMobile";
import { IoMdExit, IoMdHome, IoMdSearch, IoMdPerson } from "react-icons/io";
import { IoChatboxEllipses, IoNotifications } from "react-icons/io5";
import { PiTagSimpleFill } from "react-icons/pi";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { FaFeatherPointed } from "react-icons/fa6";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Posts } from "./elements/Posts";
import { Profile } from "./elements/Profile";
import { Search } from "./elements/Search";
import { Chat } from "./elements/Chat";
import { Notifications } from "./elements/Notifications";
import { Saved } from "./elements/Saved";
import parrotImg from "../assets/parrotLogo.png";
import "../styles/home/navigation.css";
import { UserPreview } from "../components/Home/UserPreview";

export function GeneralRoute() {
  //Context utilities
  const { user, logout } = useContext(UserContext);

  //Reference to content section
  const sectionContentRef = useRef(null);

  //Custom hook that handles navigation and header animations in MOBILE
  const { isScrolled } = useScrollMobile(sectionContentRef, 350);

  const [showAside, setShowAside] = useState(false);

  const navigate = useNavigate();

  return (
    <main className="main_home">
      {/* MOBILE HEADER */}
      <header
        className={`home_mobile_header 
        ${isScrolled ? "home_mobile_header_hide" : "home_mobile_header_show"}`}
      >
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
      {/* SLIDER ASIDE */}
      {showAside && (
        <aside
          className={`home_mobile_aside ${
            showAside ? "home_mobile_aside_show" : ""
          }`}
        >
          <BsFillArrowLeftCircleFill
            className="home_mobile_aside_close_svg"
            onClick={() => setShowAside(false)}
          />
          <header className="home_mobile_aside_header">
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
            <h4 className="home_mobile_aside_username">{user.user.username}</h4>
          </header>
          <section className="home_mobile_aside_follower_container">
            <p>
              <span className="home_mobile_aside_strong">33 </span>Siguiendo
            </p>
            <p>
              <span className="home_mobile_aside_strong">33 </span>Seguidores
            </p>
          </section>
          <section className="home_mobile_aside_links_container">
            <h3
              className="home_mobile_aside_links"
              onClick={() => {
                setShowAside(false);
                navigate("/perfil");
              }}
            >
              <IoMdPerson />
              Perfil
            </h3>
            <h3
              className="home_mobile_aside_links"
              onClick={() => {
                setShowAside(false);
                navigate("/guardados");
              }}
            >
              <PiTagSimpleFill />
              Guardados
            </h3>
            <h3 onClick={logout} className="home_mobile_aside_links">
              <IoMdExit />
              Cerrar Sesión
            </h3>
          </section>
        </aside>
      )}

      {/* NORMAL ASIDE (LEFT) > 550px*/}
      <aside className="home_aside">
        <img
          src={parrotImg}
          alt="We talk parrot"
          className="home_aside_logo"
          onClick={() => navigate("/")}
        />
        <div className="home_aside_links_container">
          <div className="home_aside_link_box" onClick={() => navigate("/")}>
            <IoMdHome />
            <h3>Inicio</h3>
          </div>
          <div
            className="home_aside_link_box"
            onClick={() => navigate("/buscar")}
          >
            <IoMdSearch />
            <h3>Buscar</h3>
          </div>
          <div
            className="home_aside_link_box"
            onClick={() => navigate("/chat")}
          >
            <IoChatboxEllipses />
            <h3>Mensajes</h3>
          </div>
          <div
            className="home_aside_link_box"
            onClick={() => navigate("/notificaciones")}
          >
            <IoNotifications />
            <h3>Notificaciones</h3>
          </div>
          <div
            className="home_aside_link_box"
            onClick={() => navigate("/perfil")}
          >
            <IoMdPerson />
            <h3>Perfil</h3>
          </div>
          <div
            className="home_aside_link_box"
            onClick={() => navigate("/guardados")}
          >
            <PiTagSimpleFill />
            <h3>Guardados</h3>
          </div>
          <div className="home_aside_create_post home_aside_link_box">
            <p>+</p>
            <FaFeatherPointed />
            <h3>Postear</h3>
          </div>
          <div className="home_aside_user_container home_aside_link_box">
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
            <h3>{user.user.username}</h3>
          </div>
        </div>
      </aside>

      <section className="home_content_section" ref={sectionContentRef}>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/buscar" element={<Search />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/notificaciones" element={<Notifications />} />
          <Route path="/guardados" element={<Saved />} />
        </Routes>
        {/* NORMAL ASIDE (RIGHT) > 1050px */}
        <aside className="home_aside_recomendations">
          <div className="home_aside_recomendations_search">
            <IoMdSearch />
            <input
              type="text"
              className="general_input"
              placeholder="Busca un usuario por su nombre..."
            />
          </div>
          <div className="home_aside_recomendations_news">
            <h4>¿Quién es nuevo en WeTalk?</h4>
            <div className="user_preview_container">
              <UserPreview user={user} />
              <UserPreview user={user} />
              <UserPreview user={user} />
              <UserPreview user={user} />
              <UserPreview user={user} />
            </div>
          </div>
        </aside>
      </section>
      {/* MOBILE NAVIGATION (bottom) */}
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
    </main>
  );
}
