export default function NotFound({ slug }) {
    return (
        <>
            <h2>Not Found</h2>
            <p>{slug ? 'SLUG PROVIDED - ' + slug : "NO SLUG PROVIDED"}</p>
        </>
    );
}