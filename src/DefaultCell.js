import { Typography } from "@mui/material";
import React, { useMemo } from "react";

function DefaultCell({ value }){
    return (
        <Typography variant="caption" color="text">
            {value}
        </Typography>
    )
}

export default DefaultCell