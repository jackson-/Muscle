import React, {Component} from 'react';

export default class Container extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div id="app_container">
				{this.props.children}
			</div>
		)
	}
}
