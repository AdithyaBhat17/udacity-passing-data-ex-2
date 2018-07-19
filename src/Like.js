import React,{Component} from 'react';
import Movies from './Movies';

class Like extends Component{
	render(){
    	const {profiles,users,movies,userByMovie} = this.props;
      	const movielist = Object.keys(movies).map(id=>(
          <Movies
          	key={id}
          	users={users}
          	usersLikeMovie={userByMovie[id]}
          	aboutMovie={movies[id]}
          />
          	
        ));
      	return <ul>{movielist}</ul>
    }
}

export default Like;