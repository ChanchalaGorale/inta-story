import React from "react";
import Avatar from "../Avatar/Avatar";
import { User } from "@/types/user";
interface Props {
  user: User;
  onClose: () => void;
}
const UserProfile: React.FC<Props> = React.memo(({ user, onClose }) => {
  //show user profile in the story view
  //access to close the story modal

  const goToUserprofile = () => {
    //go to users profile page
  };

  return (
    <div className="flex items-center justify-between p-2 w-full ">
      <div className="flex items-center">
        <Avatar size={"size-12"} user={user} click={goToUserprofile} />
        <span className="ml-2 text-white">{user.name}</span>
      </div>
      <button onClick={onClose} className="text-xl text-white ">
        X
      </button>
    </div>
  );
});

UserProfile.displayName = "UserProfile";

export default UserProfile;
