import { makeStyles } from "tss-react/mui"

export const useStyles = makeStyles()(() => ({
    removeIncrement: {
        "& .MuiInputBase-input": {
            "&[type=number]": {
                "MozAppearance": "textfield",
            },
            "&::-webkit-outer-spin-button": {
                "WebkitAppearance": "none",
                margin: 0,
            },
            "&::-webkit-inner-spin-button": {
                "WebkitAppearance": "none",
                margin: 0,
            },
        },
    },
}))
