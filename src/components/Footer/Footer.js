import React from "react";

const Footer = () => {
  return (
    <div className="mt-auto">
      <footer className="text-center text-lg-start bg-light text-muted">
        <div className="border-top">
          <div className="d-flex justify-content-center">
            <p>Some Footer content here</p>
          </div>
        </div>

        <div className="text-center p-2 border-top">
          © Copyright
          <a className="text-reset fw-bold ms-2" href="/home">
            Ayesha Siddiqua
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
