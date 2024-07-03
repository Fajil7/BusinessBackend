import React from 'react';
import './Popup.css'; // Import your popup CSS file

const Popup = ({ messages, onClose }) => {
    return (
        <div className="popup">
            <div>
                <img 
                src='https://img.freepik.com/free-vector/colorful-balloons-happy-birthday-card_1017-32692.jpg?t=st=1720007710~exp=1720011310~hmac=63ab89e05faddeb2ce5fbb6a268bd81a16a0bd8b10f0bba8d2e2745bc5456851&w=740'
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
