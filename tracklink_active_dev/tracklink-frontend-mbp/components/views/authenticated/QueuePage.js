import * as React from 'react';
import Queue from "@/components/elements/audioControls/Queue";

export default function QueuePage({ slug }) {

    return (
        <main>
            <h2>Queue</h2>
            <Queue />
        </main>
    );
}