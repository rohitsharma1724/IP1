import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar() {
  document.addEventListener("scroll", function (e) {
    if (window.screen.width < 768 && window.scrollY > 690) {
      const gotop = document.querySelector(".gotop");
      gotop.classList.add("display");

      const nav = document.querySelector(".navbar");

      nav.classList.add("navopened");
    } else if (window.screen.width > 768 && window.scrollY > 220) {
      const gotop = document.querySelector(".gotop");
      gotop.classList.add("display");

      const nav = document.querySelector(".navbar");

      nav.classList.add("navopened");
    } else {
      const nav = document.querySelector(".navbar");
      const gotop = document.querySelector(".gotop");
      gotop.classList.remove("display");
      nav.classList.remove("navopened");
    }
  });
  function openBar() {
    const bar = document.querySelector(".bar");

    bar.classList.toggle("opened");
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="row">
          <h1 className="logo">
            <Link
              spy={true}
              smooth={true}
              duration={1000}
              to="headerbg"
              style={{
                cursor: "pointer",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              MAVVEX
            </Link>
          </h1>
          <ul className="bar">
            <li className="nav-list">
              Use Cases
              <ul>
                <li>
                  <a href="#">Resources</a>
                </li>
                <li>
                  <a href="#">Links</a>
                </li>
              </ul>
            </li>
            <li className="nav-list">
              Industries
              <ul>
                <li>
                  <a href="#">Healthcare</a>
                </li>
                <li>
                  <a href="#">Retail</a>
                </li>
                <li>
                  <a href="#">Agriculture</a>
                </li>
                <li>
                  <a href="#">Conversational AI</a>
                </li>
                <li>
                  <a href="#">Security and Privacy in AI</a>
                </li>
              </ul>
            </li>
            <li>
              <Link
                onClick={openBar}
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Customers
              </Link>
            </li>
            <li className="nav-list">
              Research
              <ul>
                <li>
                  <a href="#">Publications </a>
                </li>
                <li>
                  <a href="#">Research Team</a>
                </li>
              </ul>
            </li>
            <li className="nav-list">
              Company
              <ul>
                <li>
                  <a href="#">About us </a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </li>
            <li>
              <Link
                onClick={openBar}
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Blog
              </Link>
            </li>
          </ul>
          <div className="button" onClick={openBar}>
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
