import React, { useState, useEffect } from "react";

function Timer() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTime(new Date());
        }, 5000);
        return () => clearTimeout(timer);
    }, [time]);

    return (
        <div>
            <p>Current time: {time.toLocaleTimeString()}</p>
        </div>
    );
}

export default Timer;