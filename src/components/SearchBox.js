import React from 'react';

const SearchBox=({searchfield,searchChange})=>{
	return(

			<input
			className='form-control justify-content-md-center' 
			type='search' 
			placeholder='Search Plants' 
			onChange={searchChange}
			/>

		)
};

export default SearchBox;