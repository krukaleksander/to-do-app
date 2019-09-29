import React from 'react';

const Extras = (props) => {
    const closer = () => {
        document.querySelector('div.extras').style.display = 'none';
        document.querySelector('div.blured').style.display = 'none';
    }
    return (
        <>
            <div className="blured"></div>
            <div className="extras" data-which="">
                <i className="fas fa-window-close" onClick={() => closer()}></i>
                <input className="extras-in" placeholder="extra info" type="text" onChange={props.extrasChange} />
                <p className="addExtra" onClick={() => props.handleSetExtas()}><i className="fas fa-plus-square"></i></p>
                <p className="extras-par"></p>
            </div>
        </>
    );
}

export default Extras;