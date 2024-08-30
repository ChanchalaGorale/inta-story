import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import useSWR from "swr";
import { User } from "@/types/user";
import { Users } from "@/types/users";
import { Progress } from "antd";

const Modal = dynamic(() => import("@/components/Modal/Modal"));
const UserProfile = dynamic(
  () => import("@/components/UserProfile/UserProfile")
);
const ShowStory = dynamic(() => import("@/components/Story/Story"));
const Avatar = dynamic(() => import("@/components/Avatar/Avatar"));

const fetcher = async (url: string): Promise<any> => {
  //fetch all active user stories from backend >>  view further integration at /api/stories/route

  const response = await fetch(url);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`An error occurred: ${response.status} - ${errorText}`);
  }

  // extract users
  const resData: Users[] = await response.json();

  return resData;
};

const Stories: React.FC = () => {
  //stories will be lined with horizontal scroll
  //latest stories will be shown first
  //if user avatar is clicked the stories reel will start till its closed or reached last users last story

  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const { data, error, isLoading } = useSWR<User[]>("/api/stories", fetcher);
  const [users, setUsers] = useState<User[]>([]);
  const [currentUser, setCurrentUser] = useState<number>(0);
  const [currentStory, setCurrentStory] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    //start animation is story model is open
    if (isModalOpen) setIsAnimating(true);
  }, [isModalOpen]);

  useEffect(() => {
    //handle next and previous story 5sec timeout & progress bar for continues interval

    if (!isModalOpen || !data) return;

    if (timer) clearTimeout(timer);

    setProgress(0);

    const newTimer = setTimeout(nextStory, 5000);
    const interval = setInterval(() => setProgress((prev) => prev + 2), 100);

    setTimer(newTimer);

    markSeen();

    return () => {
      clearInterval(interval);
      clearTimeout(newTimer);
    };
  }, [currentStory, currentUser, isModalOpen, data]);

  useEffect(() => {
    //we need to save lates data fetched from api to users
    //as will be handling seen case using the state management

    setUsers(data ? data : []);
  }, [data]);

  if (!users || error || isLoading) {
    // if no stories found, dont show any UI
    // if error occured, dont show any UI
    // if api call is in progress,  dont show any UI
    return null;
  }

  const showStoryModal = (index: number) => {
    //show story model and set current user and current story using the current user index
    // we will show current user story from selected user
    setIsModalOpen(true);
    setCurrentUser(index);
    setCurrentStory(0);
  };

  const markSeen = () => {
    //mark user as seen if at least one story is viewed

    setUsers((prev) =>
      prev.map((user, idx) => {
        if (
          idx === currentUser &&
          !user.seen &&
          !user?.stories[currentStory]?.seen
        ) {
          let updateUser = user;

          updateUser.stories[currentStory].seen = true;

          updateUser.seen = updateUser.stories.every((story) => story.seen);

          return { ...updateUser };
        }
        return user;
      })
    );
  };

  const closeStoryModal = () => {
    //close story modal with animation
    setIsAnimating(false);
    setTimeout(() => {
      setIsModalOpen(false);
      setCurrentUser(0);
      setCurrentStory(0);
    }, 200);
  };

  const nextStory = () => {
    // swipe to next story

    if (currentStory < users[currentUser].stories.length - 1) {
      // go to next story for same user

      return setCurrentStory(currentStory + 1);
    } else if (currentUser < users.length - 1) {
      // go to next user an start showing stories from beginning

      setCurrentUser(currentUser + 1);
      setCurrentStory(0);
      return;
    } else {
      // No more users/stories to swipe then close the modal

      return closeStoryModal();
    }
  };

  const previousStory = () => {
    if (currentStory > 0) {
      // go to previous story for same use

      return setCurrentStory(currentStory - 1);
    } else if (currentUser > 0) {
      // go to previous user an start showing stories from the end

      setCurrentUser(currentUser - 1);
      setCurrentStory(users[currentUser - 1].stories.length - 1);
      return;
    } else {
      // No more users/stories to swipe then close the modal

      return closeStoryModal();
    }
  };

  const handleStorySwipe = (e: React.MouseEvent<HTMLDivElement>) => {
    // handle next or previous story swipe based on where user taps on story image

    if (e.clientX > window.innerWidth / 2) {
      // user tapped on right side of story

      nextStory();
    } else {
      // user tapped on left side of story

      previousStory();
    }
  };

  return (
    <div>
      <div className={"flex overflow-x-auto space-x-4 py-4"}>
        {users.map((user: User, index: number) => (
          <Avatar
            size={"size-20"}
            key={user.id}
            user={user}
            click={() => {
              showStoryModal(index);
            }}
          />
        ))}
      </div>

      <Modal isModalOpen={isModalOpen} onClose={closeStoryModal}>
        <div
          className={`relative w-full max-w-lg h-screen overflow-hidden transform transition-transform ${
            isAnimating ? "animate-zoomIn" : "animate-zoomOut"
          }`}
        >
          <div className="absolute top-4 z-50 w-full">
            <div className="flex p-2 gap-2 w-full ">
              {users[currentUser]?.stories?.map((story, index) => (
                <Progress
                  key={story.id}
                  percent={
                    index === currentStory
                      ? progress
                      : index < currentStory
                      ? 100
                      : 0
                  }
                  size="small"
                  strokeColor={"white"}
                  trailColor="rgba(255, 255, 255, 0.3)"
                  className=" flex-1"
                  showInfo={false}
                />
              ))}
            </div>
            <UserProfile user={users[currentUser]} onClose={closeStoryModal} />
          </div>

          <ShowStory
            story={users[currentUser]?.stories[currentStory]}
            swipe={handleStorySwipe}
          />
        </div>
      </Modal>
    </div>
  );
};

export default Stories;
