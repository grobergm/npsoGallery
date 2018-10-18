import React,{Component} from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';

import inatLogo from './inat.png';
import npsoLogo from './npso.jpg';

class App extends Component{
	constructor(){
		super()
		this.state={
			plants:[],
			searchfield:''}
		this.getData=this.getData.bind(this);
		}

	componentDidMount(){
	this.getData();
		}

	getData(){
	fetch('https://api.inaturalist.org/v1/observations?project_id=native-plant-society-of-oregon-plant-lists')
	.then(response=>response.json())
	.then(observations=>{
		this.setState({
			plants:observations.results
		})
	})
	}	

	onSearchChange=(event)=>{
		this.setState({searchfield:event.target.value});	
	}

	render(){
		console.log(this.state.plants)
		let allObservations=
			this.state.plants.filter(plant=>{
			return plant.taxon.name.toLowerCase().includes(this.state.searchfield.toLowerCase())});
		
		return (
		<div>
			<div id="mainHeader">
				<span id="npsoLogo"><img src={npsoLogo}/></span><h1 id="mainTitle">Native Plant Society of Oregon</h1>
				<h3 id="mainSubTitle"><span className="lineAround">Photo Gallery from Project on </span></h3>
				<a href="https://www.inaturalist.org/projects/native-plant-society-of-oregon-plant-lists"><img id="inatLogo" src={inatLogo}/></a>
			<SearchBox searchChange={this.onSearchChange}/>
			</div>
			<div className="container">
				<div className="col">
				<CardList plants={allObservations} />
				</div>
			</div>
		</div>
		);	
		}
		
	}
	

export default App;