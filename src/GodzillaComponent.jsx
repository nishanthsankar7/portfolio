import React from "react";
import styled, { keyframes } from "styled-components";
import "./styles.css";

const Mountains = styled.img`
  position: absolute;
  width: 600px;
  left: -2px;
  top :-135px;
`;
const Mountains1 = styled.img`
  position: absolute;
  width: 600px;
  right :1px;
  top :-135px;
`;


const contentJudder = keyframes`

0% {
  transform: translateY(0);
}
70% {
  transform: translateY(0);
}
80% {
  transform: translateY(-5px);;
}
90% {
  transform: translateY(0);
}
`;

const Content = styled.div`
  animation: ${contentJudder} 1s infinite;
`;

const godzillaWalk = keyframes`
100%{
  transform: translateX(1700px);
}
`;
const GodzillaWrapper = styled.div`
  position: absolute;
  z-index: 5;
  left: -450px;
  top : 473px;
  animation: ${godzillaWalk} 15s infinite linear;
`;

const godzillaStamp = keyframes`
0% {
  transform: rotate(0);
}
60%{
  transform: translateY(-13px) rotate(-4deg);
}
70% {
  transform: rotate(0);
}
`;

const Godzilla = styled.img`
  width: 200px;
  animation: ${godzillaStamp} 1s infinite;
`;

export default function GodzillaComponent() {
  return (
    <div>
      <Content>
        <Mountains src={require("./images/mountains.png")} />
          <Mountains1 src={require("./images/mountains.png")} />


      </Content>
      <GodzillaWrapper>
        <Godzilla src={require("./images/godzilla.png")} />
      </GodzillaWrapper>
    </div>
  );
}
