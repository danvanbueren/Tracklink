import * as React from 'react';
import {Card} from "@mui/material";

export default function LoginPage({ slug }) {

    return (
        <main>
            <h2>Login</h2>
            <p>slug: {slug}</p>

            <Card
                sx={{
                    minWidth: '100%',
                    borderRadius: '20px',
                    paddingX: '20px',
                    paddingY: '15px',
                    overflow: 'auto',
                }}
            >
                card
            </Card>
        </main>
    );
}