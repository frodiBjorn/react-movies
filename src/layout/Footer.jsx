import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer purple lighten-2">
      <div className="container"></div>
      <div className="footer-copyright purple lighten-2">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a className="grey-text text-lighten-4 right" href="#!">
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
