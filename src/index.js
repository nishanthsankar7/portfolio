import React from "react";
import ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components";
import { lighten, darken } from "polished";
import GodzillaComponent from "./GodzillaComponent";
import ActivityRings from "./ActivityRings";


const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <GodzillaComponent />
  </React.StrictMode>,
  rootElement
);
const activityElement = document.getElementById("activity");
ReactDOM.render(
  <React.StrictMode>
       <ActivityRings />

  </React.StrictMode>,
  activityElement
);



const Progress = ({done}) => {
	const [style, setStyle] = React.useState({});

	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}

		setStyle(newStyle);
	}, 200);

	return (
		<div className="progress">
			<div className="progress-done" style={style}>

			</div>
		</div>
	)
}

const App1 = () => (
	<>

		<Progress done="85"/>
	</>
);
const App2 = () => (
	<>

		<Progress done="80"/>
	</>
);
const App3 = () => (
	<>

		<Progress done="80"/>
	</>
);
const App4 = () => (
	<>

		<Progress done="76"/>
	</>
);
const App5 = () => (
	<>

		<Progress done="65"/>
	</>
);
const App6 = () => (
	<>

		<Progress done="68"/>
	</>
);
const App7 = () => (
	<>

		<Progress done="60"/>
	</>
);
const App8 = () => (
	<>

		<Progress done="70"/>
	</>
);
const App9 = () => (
	<>

		<Progress done="59"/>
	</>
);
const App10 = () => (
	<>

		<Progress done="55"/>
	</>
);
ReactDOM.render(<App1 />, document.getElementById('app1'));
ReactDOM.render(<App2 />, document.getElementById('app2'));
ReactDOM.render(<App3 />, document.getElementById('app3'));
ReactDOM.render(<App4 />, document.getElementById('app4'));
ReactDOM.render(<App5 />, document.getElementById('app5'));
ReactDOM.render(<App6 />, document.getElementById('app6'));
ReactDOM.render(<App7 />, document.getElementById('app7'));
ReactDOM.render(<App8 />, document.getElementById('app8'));
ReactDOM.render(<App9 />, document.getElementById('app9'));
ReactDOM.render(<App10 />, document.getElementById('app10'));
