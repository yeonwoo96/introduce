import { Circle } from "../components/Circle";
import { HiOutlinePhone } from "react-icons/hi";
import styled from "styled-components";

const ContactContainer = styled.div`
  padding: 110px 0;
  width: 950px;
  display: flex;
  flex-wrap: nowrap;
  flex-flow: column;
  margin: auto;
  box-sizing: border-box;
  font-size: 16px;
  .Hilite {
    font-weight: 700;
    font-size: 1rem;
  }
  h4 {
    margin-bottom: 1rem;
  }
  h3 {
    margin-bottom: 3rem;
  }
  .icon {
    font-size: 24px;
    color: #147efb;
  }
  .contact {
    width: 100%;
    display: flex;
    gap: 2rem;
    li {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }
  @media (max-width: 990px) {
    width: 100%;
    padding: 20px;
  }
  .contact {
    display: flex;
    flex-flow: column;
  }
`;
const Contact = () => {
  return (
    <ContactContainer>
      <h4 className="Blue">CONTACT</h4>
      <h3>아래로 연락주세요!</h3>
      <ul className="contact">
        <li>
          <Circle>
            <HiOutlinePhone className="icon" />
          </Circle>
          <span className="Hilite">HP :</span>010 5314 3899
        </li>
        <li>
          <Circle>
            <HiOutlinePhone className="icon" />
          </Circle>
          <span className="Hilite">Mail :</span>tlsxkrqhd@naver.com
        </li>
      </ul>
    </ContactContainer>
  );
};

export default Contact;
