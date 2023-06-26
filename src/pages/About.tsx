import styled from "styled-components";

const AboutContainer = styled.div`
  padding: 10rem;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AboutWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 950px;
  align-items: center;
  .right {
    max-height: 350px;
    max-width: 400px;
    h4 {
      margin-bottom: 1rem;
    }
    h3 {
      margin-bottom: 2rem;
    }
  }
  .left {
    border-radius: 40px;
    background: url("src/assets/images/me.jpg");
    background-size: cover;
    background-position: 100%;
    min-width: 300px;
    min-height: 350px;
    height: auto;
  }
  @media (max-width: 990px) {
    flex-flow: column;
    .left {
      margin-bottom: 30px;
    }
  }
`;
const About = () => {
  return (
    <AboutContainer>
      <AboutWrap>
        <div className="left"></div>
        <div className="right">
          <h4 className="Blue">ABOUT ME</h4>
          <div className="educationwrap">
            <h3 className="Hilite">Education</h3>
            <ul className="education">
              <li>
                2022.02.01 - 2022.06.29
                <br />
                코리아 IT 아카데미 프론트엔드(개발자) 과정{" "}
              </li>
              <li>
                2022.07.01 - 2022.12.01
                <br />
                독학 및 NomadCoder React JS 마스터 클래스 수강
              </li>
              <li>
                2022.12.01 - 2023.05.31
                <br />
                제로베이스 프론트엔드 스쿨 10기 수료{" "}
              </li>
            </ul>
          </div>
          <div className="Bookwrap">
            <h3 className="Hilite">Book</h3>
            <ul className="book">
              <li>Do it! HTML+CSS+자바스크립트 웹 표준의 정석</li>
              <li>리액트를 다루는 기술</li>
            </ul>
          </div>
        </div>
      </AboutWrap>
    </AboutContainer>
  );
};

export default About;
