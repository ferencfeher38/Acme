import "../../styles/layout/Footer.scss";

const Footer = function () {
  const year: number = new Date().getFullYear();

  return (
    <div className="footer-container">
      <p>© {year} Acme, Inc.</p>
      <div className="text">Terms</div>
      <div className="text">Privacy</div>
      <div className="dot-wrapper">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default Footer;
