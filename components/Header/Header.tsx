import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  //app header
  //here you can also add top bar custome component
  return (
    <header className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">Instagram Local App</h1>
      </div>
    </header>
  );
};

export default Header;
