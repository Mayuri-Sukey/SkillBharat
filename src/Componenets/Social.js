import React from 'react';
import whatsapp from "../Assets/whatsapp.webp";

const Social = () => {
    const phoneNumber = "919552767463";

    return (
        <div className='scroll_top'>
            <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer">
                <img src={whatsapp} alt="WhatsApp" />
            </a>
        </div>
    );
};

export default Social;
