import StarBorderIcon from "@mui/icons-material/StarBorder";
import * as React from "react";
import {IconButton} from "@mui/material";

export default function ToggleStarredButton() {

    return (
        <IconButton
            color="white"
            onClick={() => {alert('TODO: onClick function')}}
            sx={{
                width: '2.5rem',
                height: '2.5rem',
                marginLeft: '1rem',

                color: 'white',
                transition: 'color 0.3s ease',
                '&:hover': {
                    color: 'primary.dark',
                },
                '&:active': {
                    color: 'primary.main',
                },
            }}
        >
            <StarBorderIcon />
        </IconButton>
    )
}