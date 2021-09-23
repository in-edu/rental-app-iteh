import React, { useState, useEffect } from "react";
import {
  Nav,
  NavbarContainer,
  NavbarLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavBtnBtn,
} from "./NavbarElements";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars, FaRegHeart } from "react-icons/fa";
import Badge from "@material-ui/core/Badge";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import {
  deleteAllLikedApartment,
  deleteLikedApartment,
} from "../../../actions/apartments";
import apartmentServices from "../../../services/apartment.services";

const Navbar = (props) => {
  const { isLoggedIn } = useSelector((state) => state.authReducer);
  const user = useSelector((state) => state.userReducer);
  const likedHomes = useSelector(
    (state) => state.apartmentsReducer
  ).likedApartments;
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  const dispatch = useDispatch();
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
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
  function handleClose() {
    setOpen(false);
  }
  function handleLikeClick() {
    setOpen(!open);
  }
  function removeAllLikedHomes() {
    if (user.user === null) return;
    dispatch(deleteAllLikedApartment(user.user.id))
      .then(() => {
        console.log("Obrisano");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function removeLikedHome(id) {
    if (user.user === null) return;
    dispatch(deleteLikedApartment(user.user.id, id))
      .then(() => {
        console.log("Obrisano");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
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

            {user.isAdmin && (
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
            )}
            {!isLoggedIn && (
              <NavItem>
                <NavLinks to="/signup">Singup</NavLinks>
              </NavItem>
            )}
          </NavMenu>

          {!isLoggedIn ? (
            <NavBtn>
              <NavBtnLink to="/login">Login</NavBtnLink>
            </NavBtn>
          ) : (
            <NavBtn>
              {!user.isAdmin && (
                <Badge
                  badgeContent={likedHomes !== null ? likedHomes.length : 0}
                  onClick={handleLikeClick}
                  color="primary"
                  style={{
                    marginRight: "2vw",
                    marginTop: "1vh",
                    cursor: "pointer",
                  }}
                >
                  <FaRegHeart />
                </Badge>
              )}
              <NavBtn>
                <NavBtnBtn onClick={() => props.logout()}>Logout</NavBtnBtn>
              </NavBtn>
            </NavBtn>
          )}
        </NavbarContainer>
      </Nav>
      <Modal show={open} onHide={handleClose}>
        <Modal.Header closeButton closeLabel={""}>
          <Modal.Title>
            {" "}
            {likedHomes !== null ? likedHomes.length : 0} liked apartments
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {likedHomes !== null &&
            likedHomes.map((home, index) => {
              return (
                <article key={index} className="in_apart">
                  {home && home.images && (
                    <img
                      src={
                        process.env.REACT_APP_BASE_URL_IMAGE +
                        home.images[0].filename
                      }
                      alt={home.name}
                    />
                  )}
                  <div>
                    <h4>{home.name}</h4>
                    <div style={{ display: "contents" }}>
                      <p>${home.price}</p>
                      <img
                        src="http://localhost:3000/images/close.png"
                        alt="close"
                        onClick={() => removeLikedHome(home.id)}
                        style={{
                          float: "right",
                          width: "15px",
                          height: "15px",
                        }}
                      ></img>
                      <p>{home.street}</p>
                      <a href={"/apartment/" + home.id}>view more</a>
                    </div>
                  </div>
                </article>
              );
            })}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => removeAllLikedHomes()}
            style={{ background: "brown" }}
          >
            Clear All
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Open in full screen
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Navbar;
