import React, { useState, useEffect } from 'react'
import axios from 'axios';
import CardItem from '../CardItem/CardItem';
import './listedmember.css'



function Listedmember() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/api/forms/getdata')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching the users:', error);
                setError('Error fetching the users');
            });
    }, []);

    return (
        <ul className='listed-member-ul-list-container'>
            {users.map(eachCard => (
                <CardItem key={eachCard.id} cardDetails={eachCard} />
            ))}
        </ul>
    );
}

export default Listedmember
