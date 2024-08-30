"use client";
import useIsMobile from "../hooks/useIsMobile";
import Stories from "@/components/Stories/Stories";

const Home: React.FC = () => {
  //show stories only in mobile view
  const isMobile = useIsMobile();
  return <div>{isMobile ? <Stories /> : <h2>Desktop view</h2>}</div>;
};

export default Home;
