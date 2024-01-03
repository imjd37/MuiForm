import { makeStyles } from "tss-react/mui"

export const useStyles = makeStyles()((theme) => ({
    vFilterBlock: {
        marginBottom: "0",
        padding: "10px 5px",
        minWidth: "120px",
    },
    vOrderFilters: {
        display: "flex",
        minWidth: "120px",
        alignItems: "end",
        justifyContent: "space-between",
        h6: {
            fontSize: "13px",
        },
        input: {
            padding: "10px",
            minWidth: "130px",
        },
        [theme.breakpoints.down("lg")]: {
            display: "block",
            "& .MuiTextField-root": {
                width: "94%",
                marginLeft: "10px",
            },
        },
    },
    vLeftFilters: {
        display: "flex",
        alignItems: "end",
        justifyContent: "space-between",
        "& .MuiTextField-root": {
            marginLeft: "10px",
        },
        [theme.breakpoints.down("lg")]: {
            display: "block",
            "& .MuiTextField-root": {
                marginBottom: "10px",
                width: "94%",
            },
            "& .MuiFormControl-root": {
                width: "100%",
            },
        },
        minWidth: "130px",
    },
    vFilterDropDown: {
        margin: "10px 0 0 0",
        padding: "10px",
    },
    vFilterDropSection: {
        display: "flex",
    },
    vAllFilterBtn: {
        background: "#195bdc",
        color: "#FFF",
        ":visited": {
            background: "#F00",
            color: "#FFF",
        },
        "&:hover": {
            background: "#F00",
            color: "#FFF",
        },
        [theme.breakpoints.down("lg")]: {
            margin: "0 0 10px 10px",
        },
    },
    vCloseIcon: {
        textAlign: "right",
    },
    vSignedBox: {
        margin: "0 0 0 10px",
        [theme.breakpoints.down("lg")]: {
            margin: "10px 0 10px 10px",
            "& .MuiFormControl-root": {
                width: "100%",
            },
        },
    },
    vSelectSalesStatus: {
        width: "150px",
        paddingTop: "10px",
        paddingBottom: "10px",
        marginLeft: "10px",
        [theme.breakpoints.down("lg")]: {
            minWidth: "130px",
            marginTop: "10px",
            marginLeft: "10px",
            width: "100%",
        },
    },
    vSalesLabel: {
        "& .MuiInputLabel-shrink": {
            lineHeight: 3.3,
            fontSize: "8px !important",
            left: "5px",
        },
    },
    vSearchBlock: {
        display: "flex",
    },
    vSearchBtn: {
        background: "#195bdc",
        width: "2em",
        height: "2em",
        marginLeft: "3px",
        borderRadius: "5px",
        color: "#FFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    vTableBlock: {
        marginTop: "30px",
        table: {
            th: {
                padding: "5px",
                "& .MuiBox-root .css-4u4j9j": {
                    position: "relative",
                    float: "right",
                    left: "-6px",
                },
            },
            td: {
                padding: "5px",
            },
        },
    },
    vNoData: {
        padding: "30px 0",
        textAlign: "center",
    },
}))
