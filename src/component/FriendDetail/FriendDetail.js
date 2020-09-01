import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const FriendDetail = () => {
    const {friendId} = useParams();
     
    const [ detail, setDetail ] = useState({});

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setDetail(data));
      } , [])
    return (
       
        <div>
            <p>Friend Details: {friendId} </p>
            <h1>Name: {detail.name}</h1>
            <h2>{detail.username}</h2>
            <h4>Email: {detail.email}</h4>
            <h3>Phone: {detail.phone}</h3>
            <h5>Website: {detail.website}</h5>
        </div>
    );
};

export default FriendDetail;