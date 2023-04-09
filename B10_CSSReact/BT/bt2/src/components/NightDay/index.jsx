import React, { useState } from 'react';

function TimeClick() {
    const [time, setTime] = useState('Day');

    const handleToggleClick = () => {
        if (time === 'Day') {
            setTime('Night');
        } else {
            setTime('Day');
        }
    };

    return (
        <div>
            <button onClick={handleToggleClick}>Night</button>
            <button onClick={handleToggleClick}>Day</button>
            <div style={{
                width: '200px',
                height: '80px',
                backgroundColor: time === 'Day' ? 'blue' : 'black',
            }}></div>
        </div>
    );
}

export default TimeClick;
