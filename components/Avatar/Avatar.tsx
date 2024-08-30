import { User } from "@/types/user";
import React from "react";
import Image from "next/image";

interface Props {
  user: User;
  size: string;
  click: () => void;
}

const Avatar: React.FC<Props> = React.memo(
  ({ user, size, click }: { size: string; user: User; click: () => void }) => {
    //show user avatar based on the user and size take from parent component
    //dynamic size makes it reusable
    //on click user story will open or user will be redirected to the profile screen

    return (
      <div
        className={`relative flex-shrink-0 ${size} rounded-full overflow-hidden ${
          user?.seen ? "border-4 border-gray-300" : "border-4 border-red-500"
        }`}
        onClick={click}
      >
        <Image
          key={user?.id}
          src={user?.avatarUrl}
          alt={user?.name}
          fill={true}
          style={{ objectFit: "cover" }}
          className="rounded-full"
        />
      </div>
    );
  }
);

export default Avatar;
