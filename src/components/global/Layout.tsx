import React from "react";
import Navbar from "./navbar/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout(props: LayoutProps) {
  const {children} = props;

  return (
    <div className="max-w-[1920px] m-auto">
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
