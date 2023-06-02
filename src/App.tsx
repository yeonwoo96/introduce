import Header from "./pages/Header";
import Footer from "./pages/Footer";
import styled from "styled-components";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const Container = styled.div`
  .container {
    box-sizing: border-box;
    padding: 0 40px;
  }
`;

const App = () => {
  return (
    <Container>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </Container>
  );
};

export default App;
