import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FormComponent from "./components/FormComponent";
import CardComponent from "./components/CardComponent";
import { createContext, useEffect, useState } from "react";

export const CardContext = createContext();

function App() {
  const [array, setarray] = useState(
    JSON.parse(localStorage.getItem("array")) || []
  );
  const [count, setcount] = useState(
    JSON.parse(localStorage.getItem("count")) || 0
  );
  const [obj, setobj] = useState({image: "", title : "", subtitle: "", button: ""});
  const [editObj, seteditObj] = useState({});
  const [blankObj, setblankObj] = useState({});

  useEffect(() => {
    localStorage.setItem("array", JSON.stringify(array));
    localStorage.setItem("count", JSON.stringify(count));
  }, [array, count]);

  useEffect(() => {
    setarray(JSON.parse(localStorage.getItem("array")));
    setcount(JSON.parse(localStorage.getItem("count")));
  }, []);

  // const getValue = (array, count) => {
  //   setarray([...array]);
  //   setcount(count);
  // };

  return (
    <div className="App">
      <CardContext.Provider
        value={{
          array,
          count,
          obj,
          editObj,
          blankObj,
          setarray,
          setcount,
          setobj,
          seteditObj,
          setblankObj,
        }}
      >
        <FormComponent /* getValue={getValue} */ />
        <CardComponent />
      </CardContext.Provider>
    </div>
  );
}

export default App;
