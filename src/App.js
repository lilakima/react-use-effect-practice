import React, { useState, useEffect } from "react";
import Hello from "./Hello";
import useForm from "./useForm";
import useFetch from "./useFetch";

function App() {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstname: "",
  });

  // example 1
  // useEffect(() => {
  //   console.log("render");

  //   // clean up function: clean up old stuffs
  //   return () => {
  //     console.log("unmount");
  //   };
  // }, [values.email]);

  // const [showHello, setShowHello] = useState(true);

  // example 2
  // useEffect(() => {
  //   const mouseMove = (e) => {
  //     console.log(e);
  //   };
  //   window.addEventListener("mousemove", mouseMove);
  //   return () => {
  //     window.removeEventListener("mousemove", mouseMove);
  //     console.log("unmount");
  //   };
  // }, []);

  // example 3
  // useEffect(() => {
  //   console.log("mount1");
  // }, []);

  // useEffect(() => {
  //   console.log("mount2");
  // }, []);

  const [count, setCount] = useState(0);
  /*const [count, setCount] = useState(() => {
    if (localStorage.getItem("count") == "undefined") {
     localStorage.setItem("count", JSON.stringify(1));
    }
      JSON.parse(localStorage.getItem("count"));
    
  });
  if (!count) {
    const count = 1;
  }
  */
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  useEffect(() => {
    console.log(count);
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <div>
      {/* <button onClick={() => setShowHello(!showHello)}>
        toggle to remove words
      </button>
      {showHello && <Hello />} */}

      <div>{!data ? "loading ..." : data}</div>
      <div>Count: {count}</div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increment
      </button>
      <div>
        <input
          name="email"
          placeholder="enter email"
          value={values.email}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="enter password"
          value={values.password}
          onChange={handleChange}
        />
        <input
          name="firstname"
          placeholder="enter first name"
          value={values.firstname}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default App;
