import * as React from 'react';

export default function Home() {

    return (
        <main>
            <h2><code>`/`</code> Page</h2>
            <p>This is the landing page for unauthenticated sessions.</p>
            <p>It will redirect to <code>/home</code> during an authenticated session.</p>
        </main>
    );
}