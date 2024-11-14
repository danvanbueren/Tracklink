import {RouteProvider} from "@/contexts/RouteContext";
import SpaRouter from "@/components/SpaRouter";
import {AudioPlayerProvider} from "@/components/AudioPlayer/AudioPlayerContext";

export const metadata = {
    title: "NextJS AudioPlayerContainer Demo",
    description: "NextJS AudioPlayerContainer Demo",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <RouteProvider>
                    <AudioPlayerProvider>
                        <SpaRouter>

                            {children}

                        </SpaRouter>
                    </AudioPlayerProvider>
                </RouteProvider>
            </body>
        </html>
    );
}
