import React from "react";


const useBoolean = (initialState = false) => {
  const [state, setState] = React.useState(initialState);

  const setTrue = () => setState(true);
  const setFalse = () => setState(false);
  const toggle = () => setState(!state);

  return [
    state,
    {
      setTrue,
      setFalse,
      toggle,
    },
  ];
};

export default useBoolean;


