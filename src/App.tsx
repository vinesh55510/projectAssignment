import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

interface stateType {
  name: { title: string; first: string; last: string };
  email: string;
}

const App = () => {
  const [state, setState] = useState<stateType[]>([] as any[]);

  const refresh = () => {
    window.location.reload();
  };

  useEffect(() => {
    async function getStorageData() {
      localStorage.setItem("items", JSON.stringify(state));
      const response = await axios.get("https://randomuser.me/api");
      console.log(response.data.results);
      setState(response.data.results);
    }
    getStorageData();
  }, [state]);

  return (
    <div>
      <center>
        {state.map((item) => (
          <div>
            <span>{item.name.title}</span> &nbsp;
            <span>{item.name.first}</span> &nbsp;
            <span>{item.name.last}</span> <br />
            <span>{item.email}</span>
          </div>
        ))}
        <button onClick={refresh}>Refresh</button>
      </center>
    </div>
  );
};

export default App;
