import React, { useState, useEffect } from "react";
import {
  Nav,
  NavbarContainer,
  NavbarLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtnBtn,
} from "./NavbarElements";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars} from "react-icons/fa";

const Navbar = (props) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  function addHome() {
    props.history.push("/form-home/");
  }
  function closeMenu() {
    setClick(false);
  }
  return (
      <Nav scrolled={scrollPosition}>
        <NavbarContainer>
          <NavbarLogo to="/">rent</NavbarLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <AiOutlineClose /> : <FaBars />}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks onClick={closeMenu} to="/">
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks onClick={closeMenu} to="about">
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks onClick={closeMenu} to="/profile">
                Profile
              </NavLinks>
            </NavItem>
              <NavItem>
                <NavBtnBtn
                  onClick={() => addHome()}
                  style={{
                    background: "brown",
                    marginTop: "1rem",
                    color: "white",
                  }}
                >
                  Add Home
                </NavBtnBtn>
              </NavItem>
              <NavItem>
                <NavLinks to="/signup">Singup</NavLinks>
              </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
  );
};

export default Navbar;
