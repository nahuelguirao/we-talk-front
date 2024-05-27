import { UserData } from "../../types";
import "../../styles/home/userPreview.css";

// BOX TO SHOW USER PREVIEW IMG + USERNAME + BUTTON FOLLOW
export function UserPreview({ user }: { user: UserData }) {
  return (
    <div className="user_preview_box">
      <div className="user_preview_info">
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
        <h3>@{user.user.username}</h3>
      </div>
      <button className="button_general">Seguir</button>
    </div>
  );
}
