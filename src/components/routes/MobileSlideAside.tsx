import { Dispatch } from "react";
import { useUserContext } from "@/context/auth/userContext";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { IoMdExit, IoMdPerson } from "react-icons/io";
import { PiTagSimpleFill } from "react-icons/pi";
import Image from "next/image";
import Link from "next/link";

interface Props {
  showAside: boolean;
  setShowAside: Dispatch<boolean>;
}

export function MobileSliderAside({ showAside, setShowAside }: Props) {
  const { user } = useUserContext();

  return (
    <>
      {/* MOBILE SLIDER ASIDE */}
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
          {/* MENU HEADER */}
          <header className="home_mobile_aside_header">
            {user?.imageURL ? (
              <Image
                width={40}
                height={40}
                src={user.imageURL}
                alt="User image"
                className="home_mobile_header_user_image"
                onClick={() => setShowAside(true)}
              />
            ) : (
              <p
                className="home_mobile_header_no_image"
                onClick={() => setShowAside(true)}
              >
                {user?.username ? user.username[0].toUpperCase() : "W"}
              </p>
            )}
            <h4 className="home_mobile_aside_username">{user?.username}</h4>
          </header>
          {/* FOLLOWS DATA */}
          <section className="home_mobile_aside_follower_container">
            <p>
              <span className="home_mobile_aside_strong">33 </span>Siguiendo
            </p>
            <p>
              <span className="home_mobile_aside_strong">33 </span>Seguidores
            </p>
          </section>
          {/* LINKS */}
          <section className="home_mobile_aside_links_container">
            <Link href={"/perfil"}>
              <h3
                className="home_mobile_aside_links"
                onClick={() => {
                  setShowAside(false);
                }}
              >
                <IoMdPerson />
                Perfil
              </h3>
            </Link>
            <Link href={"/guardados"}>
              <h3
                className="home_mobile_aside_links"
                onClick={() => {
                  setShowAside(false);
                }}
              >
                <PiTagSimpleFill />
                Guardados
              </h3>
            </Link>
            {/* onClick={logout} */}
            <h3 className="home_mobile_aside_links">
              <IoMdExit />
              Cerrar Sesión
            </h3>
          </section>
        </aside>
      )}
    </>
  );
}
