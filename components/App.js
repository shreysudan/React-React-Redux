import React, { Component } from 'react';
import TodoInput from './TodoInput.js';
import TodoList from './TodoList.js';
import { connect } from 'react-redux';

class App extends Component {
	render() {
		return (
			<div>
				<div> To Do Input </div>
				<TodoInput dispatch={this.props.dispatch} />
				<TodoList todos={this.props.todos} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	//Whatever is returned here will show up as props in App
	return state;
}

export default connect(mapStateToProps)(App);
