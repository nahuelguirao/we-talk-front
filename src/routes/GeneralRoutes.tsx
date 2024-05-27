import { useContext, useRef, useState } from "react";
import { UserContext } from "../context/auth/UserContext";
import { useScrollMobile } from "../hooks/home/useScrollMobile";
import { IoMdExit, IoMdHome, IoMdSearch, IoMdPerson } from "react-icons/io";
import { IoChatboxEllipses, IoNotifications } from "react-icons/io5";
import { PiTagSimpleFill } from "react-icons/pi";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import parrotImg from "../assets/parrotLogo.png";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Posts } from "./elements/Posts";
import { Profile } from "./elements/Profile";
import { Search } from "./elements/Search";
import { Chat } from "./elements/Chat";
import { Notifications } from "./elements/Notifications";
import { Saved } from "./elements/Saved";
import "../styles/home/navigation.css";

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
    <main className="main_mobile">
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

      {/* NORMAL ASIDE */}
      <aside className="home_aside">
        <h1>Aside</h1>
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
