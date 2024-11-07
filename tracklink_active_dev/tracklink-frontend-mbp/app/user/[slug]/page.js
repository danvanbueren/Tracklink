import * as React from 'react';

export default async function User({ params }) {
    const slug = (await params).slug

    return (
        <main>
            <h2>User</h2>
            <div>SLUG: {slug}</div>
        </main>
    )
}