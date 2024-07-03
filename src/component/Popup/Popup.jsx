import React from 'react';
import './Popup.css'; // Import your popup CSS file

const Popup = ({ messages, onClose }) => {
    return (
        <div className="popup">
            <div>
                <img 
                src='https://img.freepik.com/free-vector/birthday-chocolate-cake-with-red-chary-three-candles-confetti-background_1035-23604.jpg?t=st=1720008622~exp=1720012222~hmac=3945c6ac6cfd546fc80cf861e81963680eb0e6620e33b4a80acbdfca8fdb62d1&w=740'
                className='birthday-image'
                />
            </div>
            <div className="popup-content">
                <span className="close" onClick={onClose}>&times;</span>
                {messages.map((message, index) => (
                    <p key={index}>{message}</p>
                ))}
            </div>
        </div>
    );
};
export default Popup;
