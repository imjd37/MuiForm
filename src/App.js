import "./App.css";
import Demo from "./Demo";
import Demo2 from "./Demo2";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useEffect, useState } from "react";
import axios from "axios";
import MuiTable from "./MuiTable";

function App() {
  const [data, setData] = useState(0);

  const getApiData = async () => {
    const res = await axios.get("https://dummyjson.com/users");
    setData(res.data.users);
  };

  useEffect(() => {
    getApiData();
  }, []);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="App">
        <Demo />
        <Demo2 />
        {Object.keys(data).length > 0 ? <MuiTable table={data} /> : ""}
      </div>
    </LocalizationProvider>
  );
}

export default App;
