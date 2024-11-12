'use client';

import { useRoute } from '@/contexts/RouteContext';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import AudioPlayer from "@/components/AudioPlayer";

export default function SpaRouter() {
    const { currentRoute, slug, navigate } = useRoute();

    const routeComponents = {
        '/': slug ? <Home slug={slug} /> : <Home />,
        '/about': slug ? <About slug={slug} /> : <About />,
        '/contact': slug ? <Contact slug={slug} /> : <Contact />,
    };

    const content = routeComponents[currentRoute] || ( slug ? <NotFound slug={slug} /> : <NotFound /> );

    return (
        <>
            <header>
                <div style={{marginBottom: 60, backgroundColor: "#aaa", padding: '0.1rem 1.5rem 2rem 1.5rem', borderRadius: 25}}>
                    <h1>Old School Single Page App (SPA) Demo in React/NextJS</h1>
                    <p>Proof of client-side routing. On hard refresh and new SSR, the image will always change. Client side routing does not reload the page.</p>
                    <img style={{width: 100 + '%', height: 100, objectFit: 'cover'}} alt='Unique image on reload' src='https://picsum.photos/1000/100'/>
                </div>

                <nav>
                    <button style={{width: 15 + 'rem'}} onClick={() => navigate('/')}>
                        Root<br/>/
                    </button>

                    <button style={{width: 15 + 'rem'}} onClick={() => navigate('/about')}>
                        About<br/>/about
                    </button>

                    <button style={{width: 15 + 'rem'}} onClick={() => navigate('/contact')}>
                        Contact (without slug)<br/>/contact
                    </button>

                    <button style={{width: 15 + 'rem'}} onClick={() => navigate('/contact/test')}>
                        Contact (with slug)<br/>/contact/slug
                    </button>

                    <button style={{width: 15 + 'rem'}} onClick={() => navigate('/not-valid')}>
                        404 Handling<br/>/not-valid
                    </button>

                </nav>
            </header>

            <main>
                {content}
            </main>

            <footer style={{marginTop: '10rem', backgroundColor: '#bdf', padding: '1rem'}}>
                <AudioPlayer />
            </footer>
        </>
    );
}