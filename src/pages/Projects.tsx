import styled from "styled-components";
import Mywork from "./Mywork";

const ProjectsWrapper = styled.div`
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
  }
`;

const NikeClone = [
  {
    img: "src/assets/images/nikeclone.png",
    h3: "나이키 온라인 스토어 🏃‍♂️",
    p: "나이키 공식 온라인 스토어를 클론 코딩 하였습니다. 리액트와 타입스크립트를 사용하고 상태 관리 라이브 러리론 리코일을 이용하였습니다.",
    skill: ["React", "TypeScript"],
    github: "string",
    right: false,
    height: 92,
  },
  {
    img: "src/assets/images/ReactFakeShop.png",
    h3: "나이키 온라인 스토어 🏃‍♂️",
    p: "나이키 공식 온라인 스토어를 클론 코딩 하였습니다. 리액트와 타입스크립트를 사용하고 상태 관리 라이브 러리론 리코일을 이용하였습니다.",
    skill: ["React", "TypeScript"],
    github: "string",
    right: true,
    height: 92,
  },
  {
    img: "src/assets/images/nikeclone.png",
    h3: "나이키 온라인 스토어 🏃‍♂️",
    p: "나이키 공식 온라인 스토어를 클론 코딩 하였습니다. 리액트와 타입스크립트를 사용하고 상태 관리 라이브 러리론 리코일을 이용하였습니다.",
    skill: ["React", "TypeScript"],
    github: "string",
    right: false,
    height: 92,
  },
];
const Projects = () => {
  return (
    <ProjectsWrapper>
      <h4 className="Blue">PORTFOLIO</h4>
      <h3>Each project is a unique piece of development 🧩</h3>
      <Mywork source={NikeClone} />
    </ProjectsWrapper>
  );
};

export default Projects;
