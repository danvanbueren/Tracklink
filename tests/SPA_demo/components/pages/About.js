export default function About({ slug }) {
    return (
        <>
            <h2>About</h2>
            <p>{slug ? 'SLUG PROVIDED - ' + slug : "NO SLUG PROVIDED"}</p>
        </>
    );
}