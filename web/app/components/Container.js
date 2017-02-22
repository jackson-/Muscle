import React, {Component} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class Container extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div id="app_container">
				<Header />
				{this.props.children}
				<Footer />
			</div>
		)
	}
}
