export default function Home({ slug }) {
    return (
        <>
            <h2>Home</h2>
            <p>{slug ? 'SLUG PROVIDED - ' + slug : "NO SLUG PROVIDED"}</p>
        </>
    );
}