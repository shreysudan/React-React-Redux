import React, { Component } from 'react';
import actions from '../redux/actions';
//import TextDisplay from './TextDisplay';

class TodoInput extends Component {
	constructor(props) {
		super(props);

		this.state = {
			inputText: ''
		};
	}

	handleChange(event) {
		this.setState({
			inputText: event.target.value
		});
	}

	handleClick(e) {
		e.preventDefault();
		this.props.dispatch(actions.addTodo(this.state.inputText));
	}

	render() {
		return (
			<div className="input">
				<form onSubmit={this.handleClick.bind(this)}>
					<input
						type="text"
						placeholder="Type in your todo"
						name="input"
						value={this.state.inputText}
						onChange={this.handleChange.bind(this)}
					/>
					<input type="submit" value="Submit" />
				</form>
				{/*<TextDisplay text={this.state.inputText} />*/}
			</div>
		);
	}
}

export default TodoInput;
