import React, { useEffect } from "react";
import "./App.css";
import aboutImgMe from "./assets/images/about-img-me.jpg";
import profileImg from "./assets/images/profile-image.png";
import "@fortawesome/fontawesome-free/css/all.css";
function App() {
  useEffect(() => {
    // Active Tab
    window.addEventListener('scroll', () => {
      const sections = document.querySelectorAll('section');
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector('.nav-items a[href*=' + id + ']')
            .classList.add('active');
        } else {
          document
            .querySelector('.nav-items a[href*=' + id + ']')
            .classList.remove('active');
        }
      });
    });
    
    // Switch theme
    const themeBtn = document.querySelector(".theme-btn");
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
      themeBtn.classList.toggle("sun");

      localStorage.setItem("saved-theme", getCurrentTheme());
      localStorage.setItem("saved-icon", getCurrentIcon());
    });

    const getCurrentTheme = () =>
      document.body.classList.contains("dark-theme") ? "dark" : "light";
    const getCurrentIcon = () =>
      themeBtn.classList.contains("sun") ? "sun" : "moon";

    const savedTheme = localStorage.getItem("saved-theme");
    const savedIcon = localStorage.getItem("saved-icon");

    if (savedTheme) {
      document.body.classList[savedTheme === "dark" ? "add" : "remove"](
        "dark-theme"
      );
      themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
    }
  }, []);

  return (
    <div>
      <div className="scrollToTop-btn flex-center">
        <i className="fas fa-arrow-up"></i>
      </div>

      <div className="theme-btn flex-center">
        <i className="fas fa-moon"></i>
        <i className="fas fa-sun"></i>
      </div>

      <header>
        <div className="nav-bar">
          <a href="/" className="logo">
            Adithya
          </a>
          <div className="navigation">
            <div className="nav-items">
              <div className="nav-close-btn"></div>
              <a className="active" href="#home">
                Home
              </a>
              <a href="#about">About</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#contact">Contact Me</a>
            </div>
          </div>
          <div className="nav-menu-btn"></div>
        </div>
      </header>

      <section className="home flex-center" id="home">
        <div className="home-container">
          <div className="media-icons">
            <a
              href="https://www.linkedin.com/in/adithya-ram-achari"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://instagram.com/ig_arjun19?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://twitter.com/adithyaramarjun"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://github.com/ig-arjun19"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
          <div className="info">
            <h2>Hi! I am Adithya Ram </h2>
            <h3>Web Developer | Data Analyst</h3>
            <p>
              I am very much passionate about Web Development and Data Analyst and also a quick learner
            </p>
            <a href="/" className="btn">
              Contact Me <i className="fas fas-arrow-circle"></i>
            </a>
          </div>
          <div className="home-img">
            <img src={profileImg} alt="" />
          </div>
        </div>
        <a href="#about" className="scroll-down">
          Scroll Down <i className="fas fa-arrow-down"></i>
        </a>
      </section>

      <section className="about section" id="about">
        <div className="container flex-center">
          <h2 className="section-title-02">About Me</h2>
          <div className="content flex-center">
            <div className="about-img">
              <img src={aboutImgMe} alt="" />
            </div>
            <div className="about-info">
              <div className="description">
                <h3>I'm Adithya Ram Achari K</h3>
                <h4>
                  A passionate <span>Web Developer</span> and{" "}
                  <span>Data Analyst</span>
                </h4>
                <p>
                As a web developer and data analyst, I'm fueled by enthusiasm and a positive attitude. I embrace a culture of perpetual learning, swiftly adapting to fresh challenges with remarkable agility.
                </p>
              </div>
              <a href="./assets/images/resume.pdf" className="btn">
                Download Resume <i className="fas fa-download"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="skills section" id="portfolio">
        <div className="container flex-center">
          
          <h2 className="section-title-02">Portfolio</h2>
          <div className="content">
            <div className="skills-description">
              <h3>Education & Skills</h3>
            </div>
            <div className="skills-info education-all">
              <div className="education">
                <h4>
                  <label>Education</label>
                </h4>
                <ul className="edu-list">
                  <li className="item">
                    <span className="year">2021-2025</span>
                    <p>
                      <span>B.Tech in CSE</span> - Vellore Institute of
                      Technology, Amaravathi,AP,India
                    </p>
                    <p>
                      CGPA : 8.64
                    </p>
                  </li>
                  <li className="item">
                    <span className="year">2019-2021</span>
                    <p>
                      <span>10+2</span> - SDRs Akanksha Junior College
                    </p>
                  </li>
                </ul>
              </div>
              <div className="education">
                <h4>
                  <label>Skills</label>
                </h4>
                <ul className="bars">
                  <li className="bar">
                    <div className="info">
                      <span>HTML</span>
                      <span>90%</span>
                    </div>
                    <div className="line html"></div>
                  </li>
                  <li className="bar">
                    <div className="info">
                      <span>JAVA</span>
                      <span>85%</span>
                    </div>
                    <div className="line css"></div>
                  </li>
                  <li className="bar">
                    <div className="info">
                      <span>JavaScript</span>
                      <span>85%</span>
                    </div>
                    <div className="line js"></div>
                  </li>
                  <li className="bar">
                    <div className="info">
                      <span>Python</span>
                      <span>85%</span>
                    </div>
                    <div className="line js"></div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="skills-description">
              <h3>Projects</h3>
            </div>
            <div className="skills-info">
              <div className="experience-card">
                <div className="upper">
                  <h3>Product Designer</h3>
                  <h5>Remote</h5>
                  <span>Aug'2022 - Dec'2022</span>
                </div>
                <div className="hr"></div>
                <h4>
                  <label>Home Automation Security</label>
                </h4>
                <p>
                Home automation security using a laser trip alarm wire is a system 
                designed to enhance the security of a property by creating a laser-based 
                perimeter detection system.Laser beam interruption triggers an alarm, 
                alerting home owners or security personnel. 
                </p>
              </div>
              <div className="experience-card">
                <div className="upper">
                  <h3>Bird species detection </h3>
                  <h5>Research paper</h5>
                  <span>Jun'2023 - Aug'2023</span>
                </div>
                <div className="hr"></div>
                <h4>
                  <label>Using CNN</label>
                </h4>
                <p>
                Bird species detection using Convolutional Neural Networks (CNNs) leverages deep learning to analyze avian images. CNNs identify distinctive features and patterns, enabling precise classification of bird species from visual data. This technology aids ornithologists and conservationists in monitoring and protecting diverse bird populations. CNNs revolutionize bird species identification through automation and accuracy.
                </p>
              </div>
              <div className="experience-card">
                <div className="upper">
                  <h3>Web Developer</h3>
                  <h5>Core Commitee Member</h5>
                  <span>Nov'2022-Present</span>
                </div>
                <div className="hr"></div>
                <h4>
                  <label>Skillship VIT-AP</label>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Pariatur sit fugiat ipsam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact section" id="contact">
        <div className="container flex-center">
          <h2 className="section-title-02">Contact Me</h2>
          <div className="content">
            <div className="contact-left">
              <h2>Let's discuss something productive</h2>
              <ul className="contact-list">
                <li>
                  <h3 className="item-title">
                    <i className="fas fa-phone"></i>Phone
                  </h3>
                  <span>+91 6300682877</span>
                </li>
                <li>
                  <h3 className="item-title">
                    <i className="fas fa-envelope"></i>Email Address
                  </h3>
                  <span>
                    <a href="mailto:royaku6@gmail.com">adithya.media369@gmail.com</a>
                  </span>
                </li>
                <li>
                  <h3 className="item-title">
                    <i className="fas fa-map-marker-alt"></i>Official Address
                  </h3>
                  <span>Amaravathi, AP,522237</span>
                </li>
              </ul>
            </div>

            <div className="contact-right">
              <form action="" className="contact-form">
                <div className="first-row">
                  <input type="text" placeholder="Name" />
                </div>
                <div className="second-row">
                  <input type="email" placeholder="Email" />
                  <input type="text" placeholder="Subject" />
                </div>
                <div className="third-row">
                  <textarea
                    name="message"
                    id=""
                    rows="7"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button type="submit" className="btn">
                  Send Message <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-container">
          <div className="about group">
            <h2>Adithya</h2>
            <p>Web Developer</p>
            <a href="#about">About Me</a>
          </div>
          <div className="hr"></div>
          <div className="info group">
            <h3>More</h3>
            <ul>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="hr"></div>
          <div className="follow group">
            <h3>Follow</h3>
            <ul>
              <li>
                <a href="/">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-copyright group">
          <p> &#169; 2023 by Adithya Ram. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default App;