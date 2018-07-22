import React from 'react';

const ConnectionTest = (props) => {
    return (
        <div>
            <button onClick={props.test}>Test connection</button>
            <p>{props.message}</p>
        </div>
    );
};

export default ConnectionTest;