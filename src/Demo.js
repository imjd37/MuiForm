import * as React from "react";
import {
  Checkbox,
  Container,
  FormControl,
  Grid,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

const orderStatus = ["abc", "def", "ghi", "jkl", "mno", "All"];
const saleTypes = ["Buy", "Rent", "RentToOwn", "All"];

function Demo() {
  const [filter, setFilter] = React.useState({
    selectedOrderStatus: [],
    saleType: [],
    fromDate: null,
  });

  const setFilterFunction = (name, value) => {
    return setFilter({ ...filter, [name]: value });
  };

  const handleOrder = (event) => {
    if (event.target.value.includes("All"))
      setFilterFunction(event.target.name, []);
    else setFilterFunction(event.target.name, event.target.value);
  };

  console.log(filter.selectedOrderStatus, filter.saleType, filter.fromDate);

  return (
    <>
      <Container
        maxWidth="md"
        sx={{ border: 2, p: 2, mt: 2, display: "flex", gap: 5 }}
      >
        <Grid>
          <FormControl variant="standard">
            <InputLabel htmlFor="status-select">Order Status</InputLabel>
            <Select
              sx={{ width: 200 }}
              labelId="order-status-select"
              id="order-status-select"
              label="Order Status"
              name="selectedOrderStatus"
              multiple
              onChange={handleOrder}
              value={filter.selectedOrderStatus.map((type) => type.toString())}
              renderValue={(selected) => selected.join(",")}
            >
              {orderStatus.map((type) => (
                <MenuItem key={type} value={type}>
                  <Checkbox
                    checked={filter.selectedOrderStatus.includes(type)}
                  />
                  <ListItemText primary={type} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid>
          <FormControl variant="standard">
            <InputLabel htmlFor="status-select">Sales Type</InputLabel>
            <Select
              sx={{ width: 200 }}
              label="Sales Type"
              name="saleType"
              multiple
              onChange={handleOrder}
              value={filter.saleType.map((type) => type.toString())}
              renderValue={(selected) => selected.join(",")}
            >
              {saleTypes.map((type) => (
                <MenuItem key={type} value={type}>
                  <Checkbox checked={filter.saleType.includes(type)} />
                  <ListItemText primary={type} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid>
          <DatePicker
            label="Select from date"
            name="fromDate"
            value={filter.fromDate}
            onChange={(newValue) => {
              setFilterFunction("fromDate", newValue.$d);
            }}
          />
        </Grid>
      </Container>
    </>
  );
}

export default Demo;
