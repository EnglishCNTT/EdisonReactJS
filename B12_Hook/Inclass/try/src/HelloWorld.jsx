import React, {useContext} from "react";
import {MyAppContext} from "./useEffect";

export default React.memo(function HelloWorld({ onMessageClick }) {
    const context = useContext(MyAppContext);

    console.log(context.isLogin);
    return <div onClick={onMessageClick}>{context.message}</div>
});
