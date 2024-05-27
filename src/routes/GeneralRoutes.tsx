import { useContext, useRef, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { UserContext } from "../context/auth/UserContext";
import { useScrollMobile } from "../hooks/home/useScrollMobile";
// COMPONENTS
import { MobileHeader } from "../components/Home/MobileHeader";
import { MobileSliderAside } from "../components/Home/MobileSliderAside";
import { MobileBottomNavigation } from "../components/Home/MobileBottomNavigation";
import { AsideLeft } from "../components/Home/AsideLeft";
import { AsideRight } from "../components/Home/AsideRight";
// ELEMENTS (routes)
import { Posts } from "./elements/Posts";
import { Profile } from "./elements/Profile";
import { Search } from "./elements/Search";
import { Chat } from "./elements/Chat";
import { Notifications } from "./elements/Notifications";
import { Saved } from "./elements/Saved";
// Styles
import parrotImg from "../assets/parrotLogo.png";
import "../styles/home/navigation.css";

export function GeneralRoute() {
  //Context utilities
  const { user } = useContext(UserContext);

  //Reference to content section
  const sectionContentRef = useRef(null);

  //Custom hook that handles navigation and header animations in MOBILE
  const { isScrolled } = useScrollMobile(sectionContentRef, 350);

  //State to control slider aside (In mobile)
  const [showAside, setShowAside] = useState(false);

  const navigate = useNavigate();

  return (
    <main className="main_home">
      {/* MOBILE HEADER */}
      <MobileHeader
        isScrolled={isScrolled}
        parrotImg={parrotImg}
        user={user}
        setShowAside={setShowAside}
      />
      {/* MOBILE SLIDER ASIDE (menu) */}
      <MobileSliderAside
        setShowAside={setShowAside}
        showAside={showAside}
        navigate={navigate}
      />

      {/* NORMAL ASIDE (LEFT) > 550px*/}
      <AsideLeft navigate={navigate} parrotImg={parrotImg} user={user} />

      {/* MIDDLE CHILDREN (routes) */}
      <section className="home_content_section" ref={sectionContentRef}>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/buscar" element={<Search />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/notificaciones" element={<Notifications />} />
          <Route path="/guardados" element={<Saved />} />
        </Routes>
        {/* NORMAL ASIDE/RECOMENDATIONS (RIGHT) > 1050px */}
        <AsideRight user={user} />
      </section>
      {/* MOBILE NAVIGATION (bottom) */}
      <MobileBottomNavigation isScrolled={isScrolled} navigate={navigate} />
    </main>
  );
}
