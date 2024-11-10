import * as React from 'react';

export default function RootPage({ slug }) {

    return (
        <main>
            <h2><code>`/`</code> Page</h2>
            <p>This is the landing page for unauthenticated sessions.</p>
            <p>It will redirect to <code>/home</code> during an authenticated session.</p>
            <p>slug: {slug}</p>
        </main>
    );
}