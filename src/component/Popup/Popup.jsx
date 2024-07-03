import React from 'react';
import './Popup.css'; // Import your popup CSS file

const Popup = ({ messages, onClose }) => {
    return (
        <div className="popup">
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
