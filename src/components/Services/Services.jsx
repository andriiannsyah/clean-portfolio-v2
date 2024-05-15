import { useState } from "react";
import "./services.css";
function Services() {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">What I Offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Web Jobhunt <br /> with React Js
            </h3>
          </div>

          <span
            className="services__button"
            onClick={() => {
              toggleTab(1);
            }}
          >
            View More <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => {
                  toggleTab(0);
                }}
              ></i>
              <h3 className="services__modal-title">Web Jobhunt With React Js</h3>
              <p className="services__modal-description">Web Pencari Kerja Sistem CRUD menggukanan data API</p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Integration with Data API</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Implementation Authentication & Authorized</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Implementation Context Management</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Using CRUD Admin</p>
                </li>
                <a href="https://jobhunt-react.netlify.app/" className="services__modal-project" target="_blank">
                  View Project
                </a>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Web Courses
              <br /> Multiple Page
            </h3>
          </div>

          <span
            className="services__button"
            onClick={() => {
              toggleTab(2);
            }}
          >
            View More <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => {
                  toggleTab(0);
                }}
              ></i>
              <h3 className="services__modal-title">Web Courses Multiple Page</h3>
              <p className="services__modal-description">Web Kursus dibuat dengan React Js Multi Page</p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Using React JS and Boostrap</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Using Animation on scroll Library</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Implementation React Router</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I Developer user Interface</p>
                </li>
                <a href="https://multipage-web-course.netlify.app/" className="services__modal-project" target="_blank">
                  View Project
                </a>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Web portfolio <br /> with ScSS
            </h3>
          </div>

          <span
            className="services__button"
            onClick={() => {
              toggleTab(3);
            }}
          >
            View More <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => {
                  toggleTab(0);
                }}
              ></i>
              <h3 className="services__modal-title"> Web Portfolio with ScSS</h3>
              <p className="services__modal-description">Web Portfolio murni dengan HTML dan ScSS</p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Using Pure HTML & CSS</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Implementation ScSS Preeprocessor</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Using Animation On Scroll Library</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Responsive Web Pure Media Querys</p>
                </li>
                <a href="https://andriansyah.web.id" className="services__modal-project" target="_blank">
                  View Project
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
