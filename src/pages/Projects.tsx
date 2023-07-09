import styled from "styled-components";
import Mywork from "./Mywork";

const ProjectsWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 110px 0;
  background: #f9f9f9;
  .textwrap {
    text-align: center;
  }
  h4 {
    margin-bottom: 1rem;
    text-align: center;
  }
  h3 {
    width: 30rem;
    text-align: center;
  }
`;

const NikeClone = [
  {
    img: "./assets/images/nikeclone.png",
    h3: "나이키 온라인 스토어 🏃‍♂️",
    p: "나이키 공식 온라인 스토어를 구현 하였습니다. 리액트와 타입스크립트를 사용하고 상태 관리 라이브 러리론 리코일을 이용하였습니다.",
    skill: ["React", "TypeScript", "Recoil", "Vite"],
    timer: 10,
    github: "https://github.com/yeonwoo96/nikeClone",
    right: false,
    url: "https://yeonwoo96.github.io/nikeClone/",
  },
  {
    img: "./assets/images/ReactFakeShop.png",
    h3: "리액트 페이크 샵 👔",
    p: "가상 의류 쇼핑몰을 구현 하였습니다. 타입스크립와 리코일이 사용되었고. 상품 리스트와 상세페이지를 구현하고.다크 모드와 화이트 모드 기능을 추가 하였습니다.",
    skill: ["React", "Recoil"],
    timer: 3,
    github: "https://github.com/yeonwoo96/ReactFakeShop",
    right: true,
    url: "https://react-fake-shop-lake.vercel.app/",
  },
  {
    img: "./assets/images/busanisgood.png",
    h3: "부산 광역시 홈페이지 🌊",
    p: "부산시 홈페이지를 구현 하였습니다. 리액트와 타입스크를 사용 하였습니다.",
    skill: ["React", "TypeScript", "Vite"],
    timer: 6,
    github: "https://github.com/yeonwoo96/Busan",
    right: false,
    url: "https://yeonwoo96.github.io/Busan/",
  },
];
const Projects = () => {
  return (
    <ProjectsWrapper>
      <h4 className="Blue">PORTFOLIO</h4>
      <h3>이미지의 마우스를 올리시면 페이지 전체를 보실 수 있습니다 ☕ </h3>
      <Mywork source={NikeClone} />
    </ProjectsWrapper>
  );
};

export default Projects;
