import React from 'react';
import Header from './Header';
import ContestPreview from "./contestPreview";
import data from '../sourceData';
import axios from 'axios';

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
		pageHeader: 'Naming Contest',
		contests: []
		}
	}

	componentDidMount(){
		//api call
		axios.get("/api/contests")
			.then(response=>{
				this.setState({contests: data.contests})

			})
			.catch(console.error);
		console.log("willmount");

	}

	componentWillMount(){

	}

	componentWillUnmount(){
		console.log("unmounted");
	}

	render(){
		return (
			<div className = "App">
				<Header message = {this.state.pageHeader}/>
				<div>
					{this.state.contests.map(contest=>{
						 return <ContestPreview key = {contest.id} {...contest}/>
					}
					)}
				</div>
			</div>
		)
	}
}

export default App;