import React, { Component } from 'react';

class ErrorBoundary extends Component {
	constructor(props){
		super(props);
		this.state = {
			hasErrors: false
		}
	}

	componentDidCatch(error, info){
		this.setState({hasErrors: true});
		console.log('[ErrorBoundary]', 'error!');
	}

	render(){
		return this.state.hasErrors ? <h1>Ups something went wrong</h1> : this.props.children;
	}

}

export default ErrorBoundary;