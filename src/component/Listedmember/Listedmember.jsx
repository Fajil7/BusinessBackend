import React, {useState, useEffect} from 'react'
import axios from 'axios';
import CardItem from '../CardItem/CardItem';



function Listedmember() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/api/forms')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching the users:', error);
                setError('Error fetching the users');
            });
    }, []);

    return (
        <>
            <div className="directory-card">

                {error && <p style={{ color: 'red' }}>{error}</p>}
                <ul>
                    {users.map(eachCard => (
                        <CardItem cardDetails={eachCard} key={eachCard.id} />
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Listedmember
