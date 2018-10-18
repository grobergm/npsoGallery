import React from 'react';

const Card=(props)=>{

	return (
		<div className="card">
			<img className="card-img-top" alt='robots' src={props.photo} />
			<div className="card-body">
				<h5 className="card-title"><em>{props.name}</em></h5>
				<p>{props.native}</p>
    			<p className="card-text">Observed by {props.user} <img className="userIcon" src={props.userIcon}/></p>
			</div>
		</div>
	);
}

export default Card;