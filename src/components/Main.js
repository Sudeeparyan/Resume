import React from "react";
import project1 from "../assets/img/project1.jpg";
import project2 from "../assets/img/project2.jpg";
import project3 from "../assets/img/project3.jpg";
import project4 from "../assets/img/project4.jpg";
import Quadcopter from "./Projects/Quadcopter";
import {Link } from "react-router-dom";
const Main = () => {
  return (
    <div>
      {/* <!--==================== MAIN ====================--> */}
      <main class="main" />
      {/* <!--==================== HOME ====================--> */}
      <section class="home section" id="home">
        <div class="home__container container grid section__border">
          <div class="home__data grid">
            <h1 class="home__title">
              {/* Hi, I'm G.Sudeep Aryan<br>
                            Full Stack Web Developer<br>  */}
            </h1>
            <div class="home__blob grid">
              <div class="home__perfil">
                <img src="assets/img/perfil.png" alt="home perfil" />
              </div>
              <img
                src="assets/img/shape-wawes.svg"
                alt=""
                class="home__shape-wawes"
              />
              <img
                src="assets/img/shape-circle.svg"
                alt=""
                class="home__shape-circle"
              />
            </div>
            <ul class="home__social">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                class="home__social-link"
              >
                <i class="ri-linkedin-box-line"></i>
              </a>
              <a
                href="https://github.com/Sudeeparyan"
                target="_blank"
                class="home__social-link"
              >
                <i class="ri-github-line"></i>
              </a>
            </ul>
          </div>
          {/* <!--==================== HOME INFO 1====================--> */}
          <div class="home__info">
            <div>
              <h3 class="home__info-title">BIOGRAPHY</h3>
              <p class="home__info-description1">
                Seeking opportunity as an entry-level engineer, in a challenging
                environment that builds up an excellent career, while
                shouldering higher responsibilities and by utilising acquired
                skills so as to contribute to the value of the organisation by
                focusing on Embedded Systems, Web Development,Data Structers and
                Algorithams and related areas.
              </p>
            </div>
            <div>
              <h3 class="home__info-title">CONTACT</h3>
              <p class="home__info-description">
                Sudeep Aryan.G
                <br />
                sudeeparyang@gmail.com
                <br />
                8309135484
                <br />
              </p>
            </div>
            <div>
              <h3 class="home__info-title">SERVICES</h3>
              <p class="home__info-description">
                Full Stack Web Developer <br />
                UI/UX Design <br />
                Embedded Systems
                <br />
              </p>
            </div>
          </div>
          {/* <!--==================== HOME INFO 2====================--> */}
          <div class="home__info">
            <div>
              <h3 class="home__info-title">YEARS OF EXPERIENCE</h3>
              <p class="home__info-number">0</p>
            </div>
            <div>
              <h3 class="home__info-title">COMPLETED PROJECTS</h3>
              <p class="home__info-number">7+</p>
            </div>
          </div>
        </div>
      </section>

      {/* <!--==================== SKILLS ====================--> */}
      <section class="skills section" id="skills">
        <h2 class="section__title">Skills</h2>
        <span class="section__subtitle">My favorite skills</span>
        <div class="skills__container container grid section__border">
          {/* <!--==================== SKILLS 1====================--> */}
          <div class="skills__content">
            <h3 class="skills_title">Programming Languages</h3>
            <div class="skills__data">
              <div class="skills__blob">
                <img src="assets/img/c-1.svg" alt="skills image" />
              </div>

              <h3 class="skills__name">C</h3>
              <span class="skills__subtitle">Intermediate</span>
            </div>

            <div class="skills__data">
              <div class="skills__blob">
                <img src="assets/img/c++.svg" alt="skills image" />
              </div>

              <h3 class="skills__name">C++</h3>
              <span class="skills__subtitle">Intermediate</span>
            </div>

            <div class="skills__data">
              <div class="skills__blob">
                <img src="assets/img/java.svg" alt="skills image" />
              </div>

              <h3 class="skills__name">Java</h3>
              <span class="skills__subtitle">Basics</span>
            </div>

            <div class="skills__data">
              <div class="skills__blob">
                <img src="assets/img/python.svg" alt="skills image" />
              </div>

              <h3 class="skills__name">Python</h3>
              <span class="skills__subtitle">Advanced</span>
            </div>
            <h3 class="skills_title">
              <i class="ri-braces-line"></i>Full Stack Web development
            </h3>

            <div class="skills__info">
              <div class="skills__data">
                <div class="skills__blob">
                  <img src="assets/img/html-1.svg" alt="skills image" />
                </div>

                <h3 class="skills__name">HTML</h3>
                <span class="skills__subtitle">Intermediate</span>
              </div>

              <div class="skills__data">
                <div class="skills__blob">
                  <img src="assets/img/css-3.svg" alt="skills image" />
                </div>
                <h3 class="skills__name">CSS</h3>
                <span class="skills__subtitle">Advanced</span>
              </div>

              <div class="skills__data">
                <div class="skills__blob">
                  <img
                    src="assets/img/logo-javascript.svg"
                    alt="skills image"
                  />
                </div>
                <h3 class="skills__name">Javascript</h3>
                <span class="skills__subtitle">Intermediate</span>
              </div>

              <div class="skills__data">
                <div class="skills__blob">
                  <img src="assets/img/react-2.svg" alt="skills image" />
                </div>
                <h3 class="skills__name">React</h3>
                <span class="skills__subtitle">Intermediate</span>
              </div>
              <div class="skills__data">
                <div class="skills__blob">
                  <img src="assets/img/git-icon.svg" alt="skills image" />
                </div>
                <h3 class="skills__name">Git</h3>
                <span class="skills__subtitle">Intermediate</span>
              </div>
              <div class="skills__data">
                <div class="skills__blob">
                  <img src="assets/img/nodejs.svg" alt="skills image" />
                </div>
                <h3 class="skills__name">Node JS</h3>
                <span class="skills__subtitle">Intermediate</span>
              </div>
              <div class="skills__data">
                <div class="skills__blob">
                  <img src="assets/img/mongodb.svg" alt="skills image" />
                </div>
                <h3 class="skills__name">MonogoDB</h3>
                <span class="skills__subtitle">Intermediate</span>
              </div>
            </div>
          </div>

          {/* <!--==================== SKILLS 2====================--> */}
          <div class="skills__content">
            <h3 class="skills_title">
              <i class="ri-pantone-line"></i>Others
            </h3>
            <div class="skills__info">
              <div class="skills__data">
                <div class="skills__blob">
                  <img src="assets/img/arm.svg" alt="skills image" />
                </div>
                <h3 class="skills__name">ARM</h3>
                <span class="skills__subtitle"></span>
              </div>

              <div class="skills__data">
                <div class="skills__blob">
                  <img src="assets/img/nxp.svg" alt="skills image" />
                </div>
                <h3 class="skills__name">NXP</h3>
                <span class="skills__subtitle">Basics</span>
              </div>

              <div class="skills__data">
                <div class="skills__blob">
                  <img src="assets/img/-1.svg" alt="skills image" />
                </div>
                <h3 class="skills__name">Matlab</h3>
                <span class="skills__subtitle">Basic</span>
              </div>
              {/* 
                            <!---<div class="skills__data" >
                                <div class="skills__blob" >
                                    <img src="" alt="skills image">
                                </div>
                                <h3 class="skills__name" ></h3>
                                <span class="skills__subtitle"></span>
                            </div>---> */}
            </div>
          </div>
        </div>
      </section>

      {/* <!--==================== QUALIFICATION ====================--> */}
      <section class="qualification section" id="qualification">
        <h2 class="section_title">Qualification</h2>
        <span class="section__subtitle">Experience & education</span>

        <div class="qualifiaction__container container grid section__border">
          {/* <!-------------------------Qualification 1------------------> */}
          <div class="qualification__content">
            <h3 class="qualification__title">
              <i class="ri-pencil-ruler-2-line"></i>Education
            </h3>
            <div class="qualification__info">
              <div>
                <h3 class="qualification__name">B.Tech</h3>
                <span class="qualification__country">
                  Amrita Vishwa Vidhyapeetham
                </span>
                <span class="qualification__year">2019-2023</span>
              </div>
              <div>
                <h3 class="qualification__name">B.Tech</h3>
                <span class="qualification__country">
                  Higher Secondary Education
                </span>
                <span class="qualification__year">2017-2019</span>
              </div>
              <div>
                <h3 class="qualification__name">B.Tech</h3>
                <span class="qualification__country">Secondary Education</span>
                <span class="qualification__year">2016-2017</span>
              </div>
            </div>
          </div>
          {/* <!-------------------------Qualification 2------------------> */}
          <div class="qualification__content">
            <h3 class="qualification__title">
              <i class="ri-building-4-line"></i>Work
            </h3>
            <div class="qualification__info">
              <div>
                <h3 class="qualification__name">Full Stack Web Developer</h3>
                <span class="qualification__country">online</span>
                <span class="qualification__year">2021-2022</span>
              </div>
              <div>
                <h3 class="qualification__name">VTPS</h3>
                <span class="qualification__country">Implant Tranning</span>
                <span class="qualification__year"></span>
              </div>
            </div>
          </div>
        </div>

        {/* <!--<img src="assets/img/shape-circle.svg"alt="qualification image" class="qualification__img"> */}
      </section>

      {/* <!--==================== SERVICES ====================--> */}
      <section class="services section" id="services">
        <h2 class="" section__title>
          Services
        </h2>
        <span class="section__subtitle">What i offer</span>
        <div class="services__container container grid section__border">
          <div class="services__card">
            <i class="ri-layout-line"></i>

            <h2 class="services__title">
              UI/UX
              <br />
              Designer
            </h2>
            <p class="services__description">
              Service that provides the best quality and at the request of the
              client, with professional wor k and customer support.
            </p>
          </div>
        </div>
      </section>

      {/* <!--==================== PROJECTS ====================--> */}
      <section class="projects section" id="projects">
        <h2 class="section__title">Project</h2>
        <span class="section__subtitle">Most recent work</span>

        <div class="container section__border">
          <div class="projects__container swiper">
            <div class="swiper-wrapper">
              <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li
                    data-target="#myCarousel"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li data-target="#myCarousel" data-slide-to="1"></li>
                  <li data-target="#myCarousel" data-slide-to="2"></li>
                  <li data-target="#myCarousel" data-slide-to="3"></li>
                </ol>

                <div className="carousel-inner">
                  <div className="item active">
                    <Link to={'/quadcopter'}><img src={project3} alt="Qaudcopter" title="Qaudcopter" />  </Link> 
                  </div>

                  <div className="item">
                    <Link to={'/Rover'}><img
                      src={project3}
                      alt="Rover"
                      title="Self Driving Rover"
                    /></Link>                    
                  </div>
                  <div className="item">
                    <Link to={'/Scart'}>
                        <img src={project3} alt="S-cart" title="S-cart" />
                    </Link>                    
                  </div>
                  <div className="item">
                    <Link>
                        <img src={project4} alt="WeatherAPP" title="WeatherAPP" />
                    </Link>                    
                  </div>
                </div>

                <a
                  className="left carousel-control"
                  href="#myCarousel"
                  data-slide="prev"
                >
                  <span className="glyphicon glyphicon-chevron-left"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="right carousel-control"
                  href="#myCarousel"
                  data-slide="next"
                >
                  <span className="glyphicon glyphicon-chevron-right"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--==================== CONTACT ====================--> */}
      <section class="contact section" id="contact">
        <h2 class="section__title">Contact Me</h2>
        <span class="section__subtitle">Get in touch</span>
        <div class="contact__container container grid section__border">
          <div class="contact__content">
            <h3 class="contact__title">
              <i class="ri-chat-3-line"></i>Talk to me
            </h3>
            <div class="contact__info">
              <div class="contact__data">
                <span class="contact__data-title">Email</span>
                <span class="contact__data-info">sudeeparyang@gmial.com</span>
              </div>

              <div class="contact__data">
                <span class="contact__data-title"> Whatsapp</span>
                <span class="contact__data-info"> +91 8309135484</span>
                <a
                  href="https://api.whatsapp.com/send?phone=519876543210&text=Hello, more information!"
                  target="_blank"
                  class="contact__button"
                >
                  Write me <i class="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="contact__content">
            <h3 class="contact__title">
              <i class="ri-send-plane-line"></i> Write me your project
            </h3>

            <form action="" class="contact__form" id="contact-form">
              <div class="contact__form-div">
                <label class="contact__form-tag">Names</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="Write your names"
                  class="contact__form-input"
                  id="contact-name"
                />
              </div>

              <div class="contact__form-div">
                <label class="contact__form-tag">Mail</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="Write your email"
                  class="contact__form-input"
                  id="contact-email"
                />
              </div>

              <div class="contact__form-div contact__form-area ">
                <label class="contact__form-tag">Project</label>
                <textarea
                  name="user_project"
                  placeholder="Write your project"
                  id="contact-project"
                  class="contact__form-input"
                ></textarea>
              </div>

              <p class="contact__message" id="contact-message"></p>

              <button type="submit" class="contact__button">
                Submit<i class="ri-arrow-right-up-line"></i>
              </button>
            </form>
          </div>
        </div>
      </section>
      <main />
      {/* <!--========== SCROLL UP ==========--> */}
      <a href="scrollup" class="scrollup" id="scroll-up">
        <i class="ri-arrow-up-line"></i>
      </a>
    </div>
  );
};

export default Main;
