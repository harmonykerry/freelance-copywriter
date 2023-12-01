import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleNav = () => {
    setShowMenu(!showMenu);
  };

  // Function to add the black background
  const addBlackBackground = () => {
    document.body.classList.add("overlay");
    document.body.classList.add("black-background-mobile");
  };

  // Function to remove the black background
  const removeBlackBackground = () => {
    document.body.classList.remove("black-background-mobile");
    document.body.classList.remove("overlay");
  };

  // Add or remove the black background class based on showMenu
  if (showMenu) {
    addBlackBackground();
  } else {
    removeBlackBackground();
  }
  return (
    <div className="section-header">
      {" "}
      <header className="top-header">
        <a href="" className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 48 48"
          >
            <path d="M 24 4 C 22.130312 4 20.318079 4.2542879 18.595703 4.7460938 L 17.761719 4.984375 L 17.878906 5.84375 C 18.290762 8.854472 20.885739 11.181641 24 11.181641 C 27.114261 11.181641 29.709238 8.854472 30.121094 5.84375 L 30.238281 4.984375 L 29.404297 4.7460938 C 27.681921 4.2542878 25.869688 4 24 4 z M 24 6 C 25.330385 6 26.584099 6.2515673 27.826172 6.5273438 C 27.211273 8.0651642 25.763751 9.1816406 24 9.1816406 C 22.236249 9.1816406 20.788727 8.0651642 20.173828 6.5273438 C 21.415901 6.2515672 22.669615 6 24 6 z M 14.957031 6.1367188 L 14.199219 6.5644531 C 11.007866 8.3643254 8.3641966 11.009147 6.5644531 14.199219 L 6.1367188 14.957031 L 6.8300781 15.486328 C 9.2523405 17.331066 12.730198 17.138011 14.9375 14.941406 L 14.939453 14.939453 L 14.941406 14.9375 C 17.138011 12.730198 17.331066 9.2523405 15.486328 6.8300781 L 14.957031 6.1367188 z M 33.042969 6.1367188 L 32.513672 6.8300781 C 30.668934 9.2523405 30.861989 12.730198 33.058594 14.9375 L 33.060547 14.939453 L 33.0625 14.941406 C 35.269802 17.138011 38.74766 17.331066 41.169922 15.486328 L 41.863281 14.957031 L 41.435547 14.199219 C 39.635627 11.008908 36.990998 8.3642786 33.800781 6.5644531 L 33.042969 6.1367188 z M 14.351562 8.9375 C 15.007492 10.460842 14.771185 12.27352 13.523438 13.527344 C 12.26972 14.771728 10.459219 15.006794 8.9375 14.351562 C 10.338592 12.174079 12.173761 10.33864 14.351562 8.9375 z M 33.648438 8.9375 C 35.825854 10.338693 37.661307 12.174145 39.0625 14.351562 C 37.540781 15.006794 35.73028 14.771728 34.476562 13.527344 L 34.474609 13.525391 C 34.474609 13.525391 34.472656 13.523438 34.472656 13.523438 C 33.228366 12.269813 32.993206 10.459219 33.648438 8.9375 z M 24 13.636719 A 1.727 1.727 0 1 0 24 17.091797 A 1.727 1.727 0 1 0 24 13.636719 z M 17.892578 16.166016 A 1.727 1.727 0 1 0 17.892578 19.619141 A 1.727 1.727 0 1 0 17.892578 16.166016 z M 30.107422 16.166016 A 1.727 1.727 0 1 0 30.107422 19.619141 A 1.727 1.727 0 1 0 30.107422 16.166016 z M 4.984375 17.761719 L 4.7460938 18.595703 C 4.2542878 20.318079 4 22.130312 4 24 C 4 25.869688 4.2542879 27.681921 4.7460938 29.404297 L 4.984375 30.238281 L 5.84375 30.121094 C 8.854472 29.709238 11.181641 27.114261 11.181641 24 C 11.181641 20.885739 8.854472 18.290762 5.84375 17.878906 L 4.984375 17.761719 z M 43.015625 17.761719 L 42.15625 17.878906 C 39.145528 18.290762 36.818359 20.885739 36.818359 24 C 36.818359 27.114261 39.145528 29.709238 42.15625 30.121094 L 43.015625 30.238281 L 43.253906 29.404297 C 43.745712 27.681921 44 25.869688 44 24 C 44 22.130312 43.745712 20.318079 43.253906 18.595703 L 43.015625 17.761719 z M 6.5273438 20.173828 C 8.0651642 20.788727 9.1816406 22.236249 9.1816406 24 C 9.1816406 25.763751 8.0651642 27.211273 6.5273438 27.826172 C 6.2515672 26.584099 6 25.330385 6 24 C 6 22.669615 6.2515673 21.415901 6.5273438 20.173828 z M 41.472656 20.173828 C 41.748433 21.415901 42 22.669615 42 24 C 42 25.330385 41.748433 26.584099 41.472656 27.826172 C 39.934836 27.211273 38.818359 25.763751 38.818359 24 C 38.818359 22.236249 39.934836 20.788727 41.472656 20.173828 z M 15.363281 22.273438 A 1.727 1.727 0 1 0 15.363281 25.726562 A 1.727 1.727 0 1 0 15.363281 22.273438 z M 32.636719 22.273438 A 1.727 1.727 0 1 0 32.636719 25.726562 A 1.727 1.727 0 1 0 32.636719 22.273438 z M 17.892578 28.380859 A 1.727 1.727 0 1 0 17.892578 31.833984 A 1.727 1.727 0 1 0 17.892578 28.380859 z M 30.107422 28.380859 A 1.727 1.727 0 1 0 30.107422 31.833984 A 1.727 1.727 0 1 0 30.107422 28.380859 z M 24 30.908203 A 1.727 1.727 0 1 0 24 34.363281 A 1.727 1.727 0 1 0 24 30.908203 z M 10.962891 31.271484 C 9.5145196 31.179284 8.0412093 31.591303 6.8300781 32.513672 L 6.1367188 33.042969 L 6.5644531 33.800781 C 8.3643254 36.992134 11.009147 39.635803 14.199219 41.435547 L 14.957031 41.863281 L 15.486328 41.169922 C 17.331066 38.74766 17.138011 35.269802 14.941406 33.0625 L 14.939453 33.060547 L 14.9375 33.058594 C 13.833849 31.960291 12.411261 31.363685 10.962891 31.271484 z M 37.037109 31.271484 C 35.588739 31.363684 34.166151 31.960291 33.0625 33.058594 L 33.060547 33.060547 L 33.058594 33.0625 C 30.861989 35.269802 30.668934 38.74766 32.513672 41.169922 L 33.042969 41.863281 L 33.800781 41.435547 C 36.992134 39.635675 39.635803 36.990853 41.435547 33.800781 L 41.863281 33.042969 L 41.169922 32.513672 C 39.958885 31.591209 38.48548 31.179284 37.037109 31.271484 z M 10.832031 33.261719 C 11.810411 33.323019 12.773995 33.726865 13.527344 34.476562 C 14.771728 35.73028 15.006795 37.540781 14.351562 39.0625 C 12.174079 37.661408 10.33864 35.826239 8.9375 33.648438 C 9.5455556 33.386617 10.182061 33.220995 10.832031 33.261719 z M 37.167969 33.261719 C 37.817939 33.220999 38.454444 33.386617 39.0625 33.648438 C 37.661408 35.825921 35.826239 37.66136 33.648438 39.0625 C 32.993206 37.540781 33.228272 35.73028 34.472656 34.476562 L 34.474609 34.474609 C 34.474609 34.474609 34.476562 34.472656 34.476562 34.472656 C 35.229315 33.725509 36.191324 33.32291 37.167969 33.261719 z M 24 36.818359 C 20.885739 36.818359 18.290762 39.145528 17.878906 42.15625 L 17.761719 43.015625 L 18.595703 43.253906 C 20.318079 43.745712 22.130312 44 24 44 C 25.869688 44 27.681921 43.745712 29.404297 43.253906 L 30.238281 43.015625 L 30.121094 42.15625 C 29.709238 39.145528 27.114261 36.818359 24 36.818359 z M 24 38.818359 C 25.763751 38.818359 27.211273 39.934836 27.826172 41.472656 C 26.584099 41.748433 25.330385 42 24 42 C 22.669615 42 21.415901 41.748433 20.173828 41.472656 C 20.788727 39.934836 22.236249 38.818359 24 38.818359 z"></path>
          </svg>
        </a>
        <div className="hidden-callme">
          {" "}
          <a href="" className="callme">
            <span>Call Me</span>
          </a>
        </div>

        <div className="" onClick={handleNav}>
          {" "}
          {showMenu ? (
            <button
              className="menu_btn mobile_btn"
              onClick={() => setShowMenu(showMenu)}
            >
              <span className="block_button_text back_btn">
                <span>B</span>
                <span>A</span>
                <span>C</span>
                <span>K</span>
              </span>
              <svg viewBox="0 0 240 240" preserveAspectRatio="xMinYMin meet">
                <circle r="50" cx="50%" cy="50%" class=""></circle>
              </svg>
            </button>
          ) : (
            <button className="menu_btn" onClick={() => setShowMenu(false)}>
              <span className="block_button_text showMenu_btn">
                <span>M</span>
                <span>E</span>
                <span>N</span>
                <span>U</span>
              </span>
              <svg viewBox="0 0 240 240" preserveAspectRatio="xMinYMin meet">
                <circle r="50" cx="50%" cy="50%" class=""></circle>
              </svg>
            </button>
          )}
        </div>
      </header>
      <div
        className="mobile-menu"
        style={{ display: showMenu ? "flex" : "none" }}
      >
        <Link
          activeClass="active"
          to="section_home"
          spy={true}
          offset={-100}
          duration={500}
          className="ListItemMenu"
          onClick={() => setShowMenu(false)}
        >
          <span>01 </span>
          Home
        </Link>
        <Link
          activeClass="active"
          to="section_Lead"
          spy={true}
          smooth={true}
          duration={500}
          className="ListItemMenu"
          onClick={() => setShowMenu(false)}
        >
          <span>02 </span>
          Lead
        </Link>
        <Link
          activeClass="active"
          to="section_services"
          spy={true}
          smooth={true}
          duration={500}
          className="ListItemMenu"
          onClick={() => setShowMenu(false)}
        >
          <span>03 </span>
          Section
        </Link>
        <Link
          activeClass="active"
          to="section_testimonials "
          spy={true}
          smooth={true}
          duration={500}
          className="ListItemMenu"
          onClick={() => setShowMenu(false)}
        >
          <span>04 </span>
          Testimonials
        </Link>
      </div>
    </div>
  );
};

export default Header;