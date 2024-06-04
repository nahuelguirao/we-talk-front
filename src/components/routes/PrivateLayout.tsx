"use client";

import { useScrollMobile } from "@/hooks/routes/useScrollMobile";
import { MobileHeader } from "./elements/MobileHeader";
import { ReactNode, useRef, useState } from "react";
import { useUserContext } from "@/context/auth/userContext";
import { MobileSliderAside } from "./elements/MobileSlideAside";
import { MobileBottomNavigation } from "./elements/MobileBottomNavigation";
import { AsideLeft } from "./elements/AsideLeft";

export function PrivateLayout({ children }: { children: ReactNode }) {
  //Context utilites
  const { user } = useUserContext();

  //Reference to content section
  const sectionContentRef = useRef(null);

  //Custom hook that handles navigation and header animations in MOBILE
  const { isScrolled } = useScrollMobile(sectionContentRef, 350);

  //State to control slider aside (In MOBILE)
  const [showAside, setShowAside] = useState(false);

  return (
    <>
      {/* MOBILE HEADER */}
      <MobileHeader
        isScrolled={isScrolled}
        user={user}
        setShowAside={setShowAside}
      />

      {/* MOBILE SLIDER ASIDE (menu) */}
      <MobileSliderAside setShowAside={setShowAside} showAside={showAside} />

      {/* MOBILE NAVIGATION (bottom) */}
      <MobileBottomNavigation isScrolled={isScrolled} />

      {/* NOT mobile Aside */}
      <AsideLeft user={user} />

      <section className="home_content_section" ref={sectionContentRef}>
        {children}
      </section>
    </>
  );
}
