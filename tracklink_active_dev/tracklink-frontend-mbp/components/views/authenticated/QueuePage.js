import * as React from 'react';
import Queue from "@/components/elements/Queue";

export default function QueuePage({ slug }) {

    return (
        <main>
            <h2>Queue</h2>
            <p>slug: {slug}</p>

            <Queue />
        </main>
    );
}