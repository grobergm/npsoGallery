import	React from 'react';
import Card from './Card';

const CardList=({plants})=>{

	return(
		
		<div className="row">
		{
			plants.map((plant,i)=>{
				return (
				<Card 
					name={plants[i].taxon.name}
					photo={plants[i].photos[0].url.replace("square","original")}
					user={plants[i].user.login}
					userIcon={plants[i].user.icon_url}
					native={plants[i].taxon.native===true ? "Native":"Non-native"} 
					/>
				);
			})
		}
		</div>
	);
}

export default CardList;