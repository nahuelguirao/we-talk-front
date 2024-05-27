import { UserPreview } from "./UserPreview";
import { IoMdSearch } from "react-icons/io";
import { UserData } from "../../types";

// Right Aside => Search + Latests users
export function AsideRight({ user }: { user: UserData }) {
  return (
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
  );
}
