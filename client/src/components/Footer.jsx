import React from "react";

const Footer = () => {
  return (
    <footer className="bg-header-blue header-tcolor py-4">
      <div className="text-center text-sm">
        © {new Date().getFullYear()} Utility Limited. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
