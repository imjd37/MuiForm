import "./App.css";
import Demo from "./Demo";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import MuiTable from "./MuiTable";

export const GlobalData = createContext();

function App() {
  const [data, setData] = useState(0);
  const [color, setColor] = useState("Beige");

  const changeColor = (value) => {
    setColor(value);
  };

  const getApiData = async () => {
    const res = await axios.get("https://dummyjson.com/users");
    setData(res.data.users);
  };

  useEffect(() => {
    getApiData();
  }, []);
  return (
    <GlobalData.Provider value={{ appColor: color, changeColor: changeColor }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="App">
          <Demo />
          {Object.keys(data).length > 0 ? <MuiTable table={data} /> : ""}
        </div>
      </LocalizationProvider>
    </GlobalData.Provider>
  );
}

export default App;
