import React from 'react';

const Extras = () => {
    const closer = () => {
        document.querySelector('div.extras').style.display = 'none';
        document.querySelector('div.blured').style.display = 'none';
    }
    return (
        <>
            <div className="blured"></div>
            <div className="extras">
                <i className="fas fa-window-close" onClick={() => closer()}></i>
                <p>Tutaj już wkrótce będziesz mógł umieścić dodatkowe informacje o zadaniu, np listę zakupów</p>
            </div>
        </>
    );
}

export default Extras;