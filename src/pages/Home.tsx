import styled, { keyframes } from "styled-components";
import { SiVelog, SiGithub } from "react-icons/si";

const wiggle = keyframes`
  0% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
}

50% {
    border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
}
100% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
}
`;
const Shakeanimation = keyframes`
0% {
    rotate: 0deg;
}
25%{
    rotate: -5deg;
}
50% {
    rotate: 0deg;
}
75% {
    rotate: 5deg;
}
100%{
  rotate: 0deg;
}
`;
const HomeContainer = styled.div`
  width: 100%;
  background: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  @media (max-width: 990px) {
    margin-top: 80px;
    height: auto;
  }
  .hiiamyeonwoo {
    width: 20rem;
  }
`;
const Main = styled.div`
  box-sizing: border-box;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 950px;
  @media (max-width: 990px) {
    width: 100%;
    flex-flow: column;
  }
  .textWrap {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    h1 {
      margin-bottom: 20px;
      .rice {
        height: 2rem;
        animation: ${Shakeanimation} 1s infinite;
      }
    }
    p {
      margin-bottom: 14px;
      .rice {
        height: 16px;
      }
    }
    .myworth {
    }
    .blogs {
      font-size: 24px;
      margin-bottom: 80px;
      & > svg:first-child {
        margin-right: 20px;
      }
      & > svg:hover {
        color: #147efb;
      }
    }
    @media (max-width: 990px) {
      text-align: center;
      h1 {
        font-size: 30px;
      }
    }
  }
  .photo {
    width: 350px;
    height: 350px;
    border: 1px solid #000;
    background: url("./assets/images/me1.jpg");
    background-size: cover;
    background-position: 0 -100px;
    animation: ${wiggle} 5s infinite ease-in-out;
    @media (max-width: 990px) {
      order: -1;
      margin: 30px 0;
      height: 250px;
      width: 250px;
    }
  }
`;
const Skills = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  flex-wrap: wrap;
  h4 {
    margin-right: 50px;
  }
  .CircleContainer {
    gap: 1.2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @media (max-width: 990px) {
      padding-bottom: 40px;
    }
  }
  @media (max-width: 990px) {
    flex-flow: column;
    h4 {
      margin: 0;
      margin-bottom: 30px;
    }
  }
`;
const Circle = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.09);
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 34px;
  }
`;
const Home = () => {
  return (
    <HomeContainer className="container">
      <div>
        <Main>
          <div className="textWrap">
            <div className="text">
              <h1>
                <span className="myworth nanum">밥 값</span> 하는 개발자
                <br />
                신연우 입니다&nbsp;
                <img className="rice" src="./assets/images/rice.png"></img>
              </h1>
              <p className="hiiamyeonwoo">
                안녕하세요. 부산에서 개발 공부하는 프론트 엔드 개발자 신연우라고
                합니다.👋
              </p>
              <span className="blogs Hilite">
                <SiGithub />
                <SiVelog />
              </span>
            </div>
          </div>
          <div className="photo"></div>
        </Main>
        <Skills>
          <h4 className="Hilite">My Skills</h4>
          <div className="CircleContainer">
            <Circle>
              <img alt="html" src="./assets/images/html.png" />
            </Circle>
            <Circle>
              <img alt="css" src="./assets/images/css.png" />
            </Circle>
            <Circle>
              <img alt="js" src="./assets/images/js.png" />
            </Circle>
            <Circle>
              <img alt="js" src="./assets/images/react.png" />
            </Circle>
            <Circle>
              <img alt="ts" src="./assets/images/ts.png" />
            </Circle>
            <Circle>
              <img alt="sass" src="./assets/images/sass.png" />
            </Circle>
          </div>
        </Skills>
      </div>
    </HomeContainer>
  );
};

export default Home;
