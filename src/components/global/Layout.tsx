import React from "react";
import Navbar from "./navbar/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout(props: LayoutProps) {
  const {children} = props;

  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
