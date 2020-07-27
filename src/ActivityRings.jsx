import React from "react";
import "./styles.css";
import styled from "styled-components";
import {rgba} from "polished";
import Chart from "react-apexcharts";


const Card = styled.div`
width: 300px;
border-radius :3rem;
background: #191919;
`;

const CardHeader = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;
height :64px;
`;
 
const ChartWraper = styled(Chart)`
display : flex;
justify-content:center;
`;

const CardText = styled.div`
font-size:
${props => props.size};
font-weight:
${props => (props.bold ? 700 : 400)};
color:
${props => rgba("#50FFB1", props.opacity)};
`;
const CardText2 = styled.div`
font-size:
${props => props.size};
font-weight:
${props => (props.bold ? 700 : 400)};
color:
${props => rgba("#2191FB", props.opacity)};
`;
const CardText3 = styled.div`
font-size:
${props => props.size};
font-weight:
${props => (props.bold ? 700 : 400)};
color:
${props => rgba("#f6bed6", props.opacity)};
`;


const state = {
  series : [90,85,77],
  options: {
    plotOptions: {
      radialBar: {
        hollow: {size : "20%"},
        dataLabels: {
          name : { show:false},
          value :{ show: false}
        },
        track : {
          background: rgba("white", 0.0375)
        }
      }
    },
    stroke : { lineCap: "round"},
    colors : ["#f6bed6","#2191FB","#50FFB1"]
  }
};




export default function ActivityRings() {
  return(
    <Card>
      <br></br>
    <CardHeader>
    <CardText3 size="1rem" opacity={2.50}>
    Team Work
    </CardText3>
    <CardText2 size="1rem" opacity={2.50}>
    Leadership
    </CardText2>
    <CardText size="1rem" opacity={2.75} >
    Problem Solving
    </CardText>

    </CardHeader>
    <ChartWraper
    options={state.options}
    series={state.series}
    type="radialBar"
    />
    </Card>


  );
}
