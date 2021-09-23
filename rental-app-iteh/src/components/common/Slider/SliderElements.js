import styled from "styled-components";

export const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 500px;
  background: white;
  @media screen and (max-width: 768px) {
    height: 100vh;
    width: 100vw;
  }
`;
export const Image = styled.img`
  width: 100vw;
  height: 100%;
  object-fit: cover;
`;
export const Slide = styled.div``;
export const SlideContent = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;
