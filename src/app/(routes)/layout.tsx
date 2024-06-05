"use client";

import { ReactNode, useRef, useState } from "react";
import { useUserContext } from "@/context/auth/userContext";
import { useScrollMobile } from "@/hooks/routes/useScrollMobile";
import { MobileHeader } from "@/components/routes/MobileHeader";
import { MobileSliderAside } from "@/components/routes/MobileSlideAside";
import { MobileBottomNavigation } from "@/components/routes/MobileBottomNavigation";
import { AsideLeft } from "@/components/routes/AsideLeft";
import Loading from "./loading";
import "@/styles/routes/navigation.css";

export default function RoutesLayout({ children }: { children: ReactNode }) {
  //Reference to content section
  const sectionContentRef = useRef(null);

  //Context utilites
  const { user } = useUserContext();

  //Custom hook that handles navigation and header animations in MOBILE
  const { isScrolled } = useScrollMobile(sectionContentRef, 350);

  //State to control slider aside (In MOBILE)
  const [showAside, setShowAside] = useState(false);

  return (
    <main className="main_home">
      {user?.username ? (
        <>
          {/* MOBILE HEADER <750px */}
          <MobileHeader
            isScrolled={isScrolled}
            user={user}
            setShowAside={setShowAside}
          />

          {/* MOBILE SLIDER ASIDE (menu) */}
          <MobileSliderAside
            setShowAside={setShowAside}
            showAside={showAside}
          />

          {/* NOT mobile Aside */}
          <AsideLeft user={user} />

          {/* CHILDREN PROFILE, CHAT, ETC */}
          <section className="home_content_section" ref={sectionContentRef}>
            {children}
          </section>

          {/* MOBILE NAVIGATION (bottom) */}
          <MobileBottomNavigation isScrolled={isScrolled} />
        </>
      ) : (
        <Loading />
      )}
    </main>
  );
}
