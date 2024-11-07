import {Card} from "@mui/material";
import * as React from "react";
export default function ViewWrapper({children}) {
    return (
        <>
            <Card
                sx={{
                    minWidth: '100%',
                    borderRadius: '20px',
                    paddingX: '20px',
                    paddingY: '15px',
                    overflow: 'auto',
                }}
            >
                {children}

            </Card>
        </>
    )
}