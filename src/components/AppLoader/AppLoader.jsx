import React from 'react';
import { BeatLoader } from 'halogen';
import './AppLoader.css';

const AppLoader = (props) => {
	return <BeatLoader color="rgb(0, 188, 212)"
		className={"app-loader" + (props.stretch ? " stretch": '')} />
}

export default AppLoader;