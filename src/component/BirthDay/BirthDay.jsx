import React, { useEffect, useState } from 'react';
import axios from 'axios';
// Assuming you have a Popup component
import './birthday.css'; // Make sure to import your CSS file
import Popup from '../Popup/Popup';

function BirthDay() {
    const [birthdays, setBirthdays] = useState([]);
    const [error, setError] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/api/forms/getdata')
            .then(response => {
                
                const logosData = response.data.map(eachData => ({
                    name: eachData.name,
                    dob: eachData.dob
                }));
               

                setBirthdays(logosData);

            })
            .catch(error => {
                console.error('Error fetching the brands:', error);
                setError('Error fetching the brands');
            });
    }, []);

    useEffect(() => {
        const today = new Date().toISOString().slice(0, 10); // Get today's date in YYYY-MM-DD format
        const birthdaysToday = birthdays.filter(birthday => birthday.dob === today);

        if (birthdaysToday.length > 0) {
            const names = birthdaysToday.map(birthday => birthday.name).join(', ');
            setPopupMessage(`Birthdays today: ${names}`);
            setShowPopup(true);
        }
    }, [birthdays]);

    const closePopup = () => {
        setShowPopup(false);
    };

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            {showPopup && <Popup message={popupMessage} onClose={closePopup} />}
        </div>
    );
}

export default BirthDay;
