import styled from "styled-components";

export const ContainerModal = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0,0,0,0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 1s;
  
  }
`;



export const ContentModal = styled.div`
  padding: 20px;
  border-radius: 10px;
  background-color:  lightpink;
  line-height: 1.5;
  min-width: 200px;
  text-align: center;
  transition: 1s;
}
`;


