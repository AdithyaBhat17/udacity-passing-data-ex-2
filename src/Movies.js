import React,{Component} from 'react';

class Movies extends Component{
  render(){
    const {users,usersLikeMovie,aboutMovie} = this.props;
    return(
      <li key={aboutMovie.id}>
      	<h2>{aboutMovie.name}</h2>
        <h3>Liked By:</h3>

        {!usersLikeMovie || usersLikeMovie.length === 0 ? (
          <p>None of the current users liked this movie.</p>
        ) : (
          <ul>
            {usersLikeMovie &&
              usersLikeMovie.map(userId => {
                return (
                  <li key={userId}>
                    <p>{users[userId].name}</p>
                  </li>
                );
              })}
          </ul>
        )}
      </li>
    );
  }
}

export default Movies;