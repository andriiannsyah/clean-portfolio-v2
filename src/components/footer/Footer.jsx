import "./footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Andriansyah</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="footer_link">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" className="footer_link">
              Contact
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a href="https://www.instagram.com/andriiannsyah/" className="footer__social-link" target="_blank">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="https://twitter.com/syeahh_" className="footer__social-link" target="_blank">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="https://web.facebook.com/andriansyah.andriansyah.7370" className="footer__social-link" target="_blank">
            <i className="bx bxl-facebook"></i>
          </a>
        </div>
        <span className="footer__copy">&#169; Andriansyah, All rights reserved</span>
      </div>
    </footer>
  );
}

export default Footer;
