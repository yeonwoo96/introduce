import { useRef, useState } from "react";
import Footer from "./pages/Footer";
import styled from "styled-components";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const Container = styled.div`
  .container {
    box-sizing: border-box;
    padding: 0 40px;
  }
`;
const HeaderWrapper = styled.nav`
  height: 80px;
  background-color: #fff;
  box-sizing: border-box;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.09);
  align-items: center;
  display: flex;
  justify-content: space-between;
  left: 0;
  padding: 0 40px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 200;
  h3 {
    font-size: 1.17em;
  }
  .menu {
    display: flex;
    gap: 2rem;
    @media (max-width: 900px) {
      display: none;
    }
  }
  .hamburger,
  .close {
    &:hover {
      color: #147efb;
    }
    display: none;
    @media (max-width: 900px) {
      display: block;
    }
  }
`;
type IBurgerPage = {
  on: boolean;
};
const BurgerPage = styled.div<IBurgerPage>`
  position: fixed;
  top: 0;
  right: 100vw;
  translate: ${(props) => (props.on ? "100vw" : 0)};
  transition: translate 0.3s;
  background: #fff;
  width: 100vw;
  height: 100vh;
  display: flex;
  .Xbox {
    padding: 0 40px;
    box-sizing: border-box;
    display: flex;
    justify-content: right;
    align-items: center;
    height: 80px;
    width: 100vw;
  }
  .Menubox {
    display: flex;
    height: 100%;
    gap: 3rem;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding-bottom: 180px;
    p {
      color: #000;
      font-weight: 500;
      font-size: 1.5rem;
      &:hover {
        color: #147efb;
        transition: all 0.3s;
      }
    }
  }
`;
const Box = styled.div``;

const App: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };
  const [HamburgerIsOn, setHamburgerIsOn] = useState(false);
  const BurgerClick = () => setHamburgerIsOn((cur) => !cur);
  return (
    <Container>
      <HeaderWrapper>
        <BurgerPage on={HamburgerIsOn}>
          <Box>
            <Box className="Xbox">
              <AiOutlineClose className="close" onClick={BurgerClick} />
            </Box>
            <Box className="Menubox">
              <p
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                  BurgerClick();
                }}
              >
                Home
              </p>
              <p
                onClick={() => {
                  BurgerClick();
                  scrollToRef(aboutRef);
                }}
              >
                About
              </p>
              <p
                onClick={() => {
                  BurgerClick();
                  scrollToRef(projectsRef);
                }}
              >
                Projects
              </p>
              <p
                onClick={() => {
                  BurgerClick();
                  scrollToRef(contactRef);
                }}
              >
                Contacts
              </p>
            </Box>
          </Box>
        </BurgerPage>
        <h3 className="Hilite">Yeon.dev</h3>
        <div className="menu Hilite">
          <p
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            Home
          </p>
          <p onClick={() => scrollToRef(aboutRef)}>About</p>
          <p onClick={() => scrollToRef(projectsRef)}>Projects</p>
          <p onClick={() => scrollToRef(contactRef)}>Contacts</p>
        </div>
        <RxHamburgerMenu className="hamburger" onClick={BurgerClick} />
      </HeaderWrapper>
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </Container>
  );
};

export default App;
