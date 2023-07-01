import styled from "styled-components";
import { Circle } from "../components/Circle";
import { ImArrowUp } from "react-icons/im";

const FooterContainer = styled.div`
  padding: 3rem 0;
  width: 100vw;
  display: flex;
  justify-content: center;

  .Btn {
    font-size: 24px;
    color: #147efb;
    &:hover {
      background-color: #147efb;
      color: #fff;
    }
  }
`;
const upClick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
const Footer = () => {
  return (
    <FooterContainer>
      <Circle className="Btn" onClick={upClick}>
        <ImArrowUp className="up" />
      </Circle>
    </FooterContainer>
  );
};

export default Footer;
