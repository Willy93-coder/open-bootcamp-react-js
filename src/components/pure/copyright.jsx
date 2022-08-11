import React from "react";

// Material UI Components
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const Copyright = () => {
    return (
        <Typography variant="body2" color="GrayText" align="center">
            {"copyright (c)"}
            <Link color="inherit">Imagina Formación</Link>{" "}
            {new Date().getFullYear()}
        </Typography>
    );
};

export default Copyright;
