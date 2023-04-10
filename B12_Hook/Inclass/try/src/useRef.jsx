import React, {useRef} from "react";

function MyComponent(){
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus();
        console.log(inputRef.current.value);
    };

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={handleClick}>Focus the input</button>
        </div>
    );
}

export default MyComponent;