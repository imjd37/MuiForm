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
  const [selectedOrderStatus, setSelectedOrderStatus] = React.useState([]);
  const [saleType, setSaleType] = React.useState([]);
  const [fromDate, setFromDate] = React.useState(null);

  const handleOrderStatusChange = (event) => {
    if (event.target.value.includes("All")) setSelectedOrderStatus([]);
    else setSelectedOrderStatus(event.target.value);
  };
  const handleSalesTypeOptions = (event) => {
    if (event.target.value.includes("All")) setSaleType([]);
    else setSaleType(event.target.value);
  };

  console.log(selectedOrderStatus, saleType, fromDate);

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
              multiple
              onChange={handleOrderStatusChange}
              value={selectedOrderStatus.map((type) => type.toString())}
              renderValue={(selected) => selected.join(",")}
            >
              {orderStatus.map((type) => (
                <MenuItem key={type} value={type}>
                  <Checkbox checked={selectedOrderStatus.includes(type)} />
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
              multiple
              onChange={handleSalesTypeOptions}
              value={saleType.map((type) => type.toString())}
              renderValue={(selected) => selected.join(",")}
            >
              {saleTypes.map((type) => (
                <MenuItem key={type} value={type}>
                  <Checkbox checked={saleType.includes(type)} />
                  <ListItemText primary={type} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid>
          <DatePicker
            label="Select from date"
            value={fromDate}
            onChange={(newValue) => setFromDate(newValue.$d)}
          />
        </Grid>
      </Container>
    </>
  );
}

export default Demo;
