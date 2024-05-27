import { Dispatch, useContext } from "react";
import { UserContext } from "../../context/auth/UserContext";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { IoMdExit, IoMdPerson } from "react-icons/io";
import { PiTagSimpleFill } from "react-icons/pi";

interface Props {
  showAside: boolean;
  setShowAside: Dispatch<boolean>;
  navigate: (path: string) => void;
}

export function MobileSliderAside({
  showAside,
  setShowAside,
  navigate,
}: Props) {
  const { logout, user } = useContext(UserContext);

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
    </>
  );
}
