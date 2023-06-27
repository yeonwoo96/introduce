import styled from "styled-components";

const MyworkWrap = styled.div`
  margin: 50px 0;
  box-sizing: border-box;
  width: 950px;
  border-radius: 40px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 50px 50px;
  gap: 2rem;
  @media (max-width: 1024px) {
    width: 570px;
  }
  .textbox {
    width: 40%;
    display: flex;
    flex-flow: column;
    gap: 2rem;
    justify-content: center;
    order: -1;
    .skillbox {
      display: flex;
      gap: 0.8rem;
    }
  }
`;
const Box = styled.div``;
type IImage = {
  bg: string;
};
const Image = styled.div<IImage>`
  border-radius: 20px;
  width: 55%;
  height: 300px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  overflow: hidden;
  position: relative;
  background: url(${(props) => props.bg}) top;
  background-size: cover;
  transition: background-position 10s ease-in-out;
  &:hover {
    background-position: bottom;
  }
`;
type IMywork = {
  source: {
    img: string;
    h3: string;
    p: string;
    skill: string[];
    github: string;
    right: boolean;
  }[];
};
const Btn = styled.button`
  border: none;
  color: #111;
  padding: 5px 10px;
  background: #fff;
  font-size: 1rem;
  font-weight: 500;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
const Mywork = ({ source }: IMywork) => {
  console.log(source);
  return (
    <>
      {source.map((item) => (
        <MyworkWrap key={item.h3}>
          <Image style={{ order: item.right ? -1 : 0 }} bg={item.img}></Image>
          <Box className="textbox">
            <h3>{item.h3}</h3>
            <p>{item.p}</p>
            <div className="skillbox">
              {item.skill.map((skill) => (
                <Btn>{skill}</Btn>
              ))}
            </div>
            <a href={item.github}>github</a>
          </Box>
        </MyworkWrap>
      ))}
    </>
  );
};

export default Mywork;
