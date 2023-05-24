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
  }, []);

  return (
    <div>
      <center>
        {state.map((item) => (
          <div>
            {item.name.title} &nbsp;
            {item.name.first} &nbsp;
            {item.name.last} <br />
            {item.email}
          </div>
        ))}
        <button onClick={refresh}>Refresh</button>
      </center>
    </div>
  );
};

export default App;
