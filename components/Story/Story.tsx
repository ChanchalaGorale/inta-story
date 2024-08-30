import { Story } from "@/types/story";
import Image from "next/image";
import React from "react";

interface Prop {
  story: Story;
  swipe: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const ShowStory: React.FC<Prop> = React.memo(({ story, swipe }) => {
  // each story image will be shown here
  // swipe will decide to go to next or previous story/user

  const handleSwipe = (e: React.MouseEvent<HTMLDivElement>) => {
    swipe(e);
  };
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <Image
        src={story.imageUrl}
        alt={story.title}
        fill={true}
        style={{ objectFit: "cover" }}
        onClick={handleSwipe}
      />
    </div>
  );
});

export default ShowStory;
