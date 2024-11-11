export default function Contact({ slug }) {
    return (
        <>
            <h2>Contact</h2>
            <p>{slug ? 'SLUG PROVIDED - ' + slug : "NO SLUG PROVIDED"}</p>
        </>
    );
}