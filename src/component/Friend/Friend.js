import React from 'react';
import { Link, useHistory } from 'react-router-dom';


const Friend = (props) => {
    const {name, email, id} = props.friend;

    const history = useHistory();
    const handleClick = (friendId) => {
        history.push(`/friend/${friendId}`);
    }
    const friendStyle = {
        border: '1px solid purple',
        margin: '20px', 
        padding: '20px', 
        borderRadius: '20px'
    }
    return (
        <div style={friendStyle}>
            <p>Id:{id}</p>
            <h2>Name:{name}</h2>
            <p>Email:{email}</p>
            <Link to={`/friend/${id}`}>Show Detail Of {id}</Link>
         <button onClick={() => handleClick(id)}>Click Me!</button>
         </div>
    );
};

export default Friend;