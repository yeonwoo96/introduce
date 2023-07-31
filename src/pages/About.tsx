import styled from "styled-components";

const AboutContainer = styled.div`
  width: 100vw;
  box-sizing: border-box;
  padding: 10rem 0;
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
      margin-bottom: 1.2rem;
    }
  }
  .left {
    position: relative;
    border-radius: 40px;
    background: url("./assets/images/me.jpg");
    background-size: cover;
    background-position: 100%;
    min-width: 300px;
    min-height: 350px;
    height: auto;
    font-size: 64px;

    span {
      background: #fff;
      border-radius: 50%;
      padding: 10px;
      font-size: 54px;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      display: flex;
      position: absolute;
      bottom: -30px;
      right: -30px;
    }
  }
  @media (max-width: 990px) {
    flex-flow: column;
    .left {
      margin-bottom: 30px;
    }
  }
  .right {
    .educationwrap {
      margin-bottom: 24px;
    }
  }
`;
const About = () => {
  return (
    <AboutContainer>
      <AboutWrap>
        <div className="left">
          <span>🍰</span>
        </div>
        <div className="right">
          <h4 className="Blue">ABOUT ME</h4>
          <div className="educationwrap">
            <h3 className="Hilite">Education ✏️</h3>
            <ul className="education">
              <li>
                2022.02.01 - 2022.06.29
                <br />
                🧑🏻‍💻 코리아 IT 아카데미 프론트엔드(개발자) 과정{" "}
              </li>
              <li>
                2022.07.01 - 2022.12.01
                <br />
                👩🏼‍💻 독학 및 NomadCoder React JS 마스터 클래스 수강
              </li>
              <li>
                2022.12.01 - 2023.05.31
                <br />
                🧑🏻‍💻 제로베이스 프론트엔드 스쿨 10기 수료{" "}
              </li>
            </ul>
          </div>
          <div className="Bookwrap">
            <h3 className="Hilite">Book 📚</h3>
            <ul className="book">
              <li>📕 Do it! HTML+CSS+자바스크립트 웹 표준의 정석</li>
              <li>📘 리액트를 다루는 기술</li>
            </ul>
          </div>
        </div>
      </AboutWrap>
    </AboutContainer>
  );
};

export default About;
