import "./App.css";
// import MyComponent from "./useRef";
// import useBoolean from "./customHook.jsx";
// import { Router } from "react-router-dom";
import router from "./router.js";
import { RouterProvider } from "react-router-dom";

function App() {
  // const [isToggle, {
  //   setToggle,
  //   setTrue,
  //   setFalse,
  // }] = useBoolean(false);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      {/* <button type='button' onClick={setToggle}>Toggle</button>
      <button type='button' onClick={setTrue}>To True</button>
      <button type='button' onClick={setFalse}>To False</button>

      {isToggle.toString()} */}
    </div>
  );
}

export default App;
