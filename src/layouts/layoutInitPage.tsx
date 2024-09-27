import React from "react";
import AppBar from "../components/appbar";

const LayoutInitPage = ({ children }: { children?: React.JSX.Element }) => {
  return (
    <div className="layout-init-page">
      <AppBar />
      {children? children : null}
    </div>
  );
};

export default LayoutInitPage;
