import React from "react";
import SiteNavBar from "./SiteNavBar";
import SiteFooter from "./SiteFooter";

const SiteLayout = ({ children }) => {
  return (
    <>
      <SiteNavBar />
      {children}
      <SiteFooter />
    </>
  );
};

export default SiteLayout;
