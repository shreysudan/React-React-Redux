//No longer using this file in the app but still keeping it for reference

import React, { Component } from 'react';

/*class TextDisplay extends Component {
	render() {
		return <div> Passed state of parent element: {this.props.text} </div>;
	}
}*/

// Since this component is a "dumb" component i.e. has no state of its own - hence we can define it as a functional
// component and refactor the above code as follow:-

function TextDisplay(props) {
	return <div> Passed state of parent element: {props.text} </div>;
}

export default TextDisplay;
