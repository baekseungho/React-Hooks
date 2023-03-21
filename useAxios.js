import defaultAxios from "axios";
import { useEffect, useState } from "react";
const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  const [trigger, setTrigger] = useState(0);
  if (!opts.url) {
    return;
  }
  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(Date.now());
  };
  useEffect(() => {
    axiosInstance(opts)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data,
        });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
      });
  }, [trigger]);
  return { ...state, refetch };
};

export default useAxios;
//Add Dependency로 axios 설치

//App(main)부분

// import React, { useEffect, useState, useRef } from "react";
// import "./styles.css";
// import useAxios from "./useAxios";
// const App = () => {
//   const { loading, data, error, refetch } = useAxios({
//     url: "https://yts.mx/api/v2/list_movies.json"
//   });
//   console.log(
//     `Loading: ${loading}\nError:${error}\nData:${JSON.stringify(data)}`
//   );
//   return (
//     <div className="App">
//       <h1>{data && data.staus}</h1>
//       <h2>{loading && "Loading"}</h2>
//       <button onClick={refetch}>Refecth</button>
//     </div>
//   );
// };

// export default App;
